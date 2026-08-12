const CACHE='coachboard-v5-1-cache-v1';
const CORE=['./manifest.json','./icon.png'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const req=event.request;
  const url=new URL(req.url);

  // Always prefer the network for pages so deployments update promptly.
  if(req.mode==='navigate' || url.pathname.endsWith('/index.html')){
    event.respondWith(
      fetch(req).then(resp=>{
        const copy=resp.clone();
        caches.open(CACHE).then(c=>c.put('./index.html',copy)).catch(()=>{});
        return resp;
      }).catch(()=>caches.match('./index.html'))
    );
    return;
  }

  // Cache-first for app assets, runtime-cache anything else that succeeds.
  event.respondWith(
    caches.match(req).then(cached=>cached || fetch(req).then(resp=>{
      const copy=resp.clone();
      caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
      return resp;
    }))
  );
});
