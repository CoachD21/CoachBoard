COACHBOARD PRO V5.1 CLOUD

FIXES
- Real Supabase email/password account creation and login
- Cloud save/load using the CoachBoard Supabase project
- Automatic sync after CoachBoard changes
- Manual Sync Now and Load Cloud controls
- Existing V4/V3 coaching tools retained
- Updated service worker uses network-first navigation so new deployments replace stale builds

GITHUB UPDATE
Replace the top-level files in the CoachBoard GitHub repository with:
- index.html
- manifest.json
- service-worker.js
- icon.png

After GitHub Pages redeploys, reload the app.
If an old installed Home Screen copy still looks broken, remove that Home Screen icon,
open the GitHub Pages URL in Safari, refresh it, then Add to Home Screen again.

ACCOUNT NOTE
Supabase hosted projects typically require email confirmation by default.
After Create Account, check your email if the app tells you confirmation is required.
