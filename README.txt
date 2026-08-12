COACHBOARD PRO V5 CLOUD

This build adds an optional Supabase cloud account and sync layer to V4.

WHAT CHANGED
- Email/password CoachBoard account sign-in
- Cloud save of CoachBoard program data
- Sync Now button
- Automatic sync shortly after local changes while signed in
- Existing offline/local storage and backup/restore remain available
- Same V3/V4 coaching features remain

IMPORTANT ABOUT ACCESS ANYWHERE
The cloud database is now ready, but the app files themselves still need to be published to a public HTTPS host before the phone can open CoachBoard away from the home network with the laptop off.

The included app can still be tested locally exactly like V4:
python -m http.server 8000

Then open http://localhost:8000 on the laptop or http://YOUR-LAPTOP-IP:8000 on the same Wi-Fi.

Once hosted publicly, sign into the same CoachBoard account on phone and laptop to use the same cloud data.
