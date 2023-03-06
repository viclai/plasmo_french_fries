# plasmo_french_fries

This repository is meant to be a sample for reproducing https://github.com/PlasmoHQ/plasmo/issues/488.

1. Clone this repository.
2. Install [`pnpm`](https://pnpm.io/installation).
3. Execute the follow commands in Terminal with the current directory being the root of this repository.

```bash
git checkout v0.0.1
pnpm i
pnpm build --tag=0.0.1
git checkout v0.0.2
pnpm build --tag=0.0.2
```

4. Open chrome://extensions in your Chrome browser.
5. Toggle "Developer mode" on.
6. Click on "Load unpacked", and find/select the folder entitled, `chrome-mv3-prod-0.0.1`.
7. Open a new-tab page, and leave it open for the next step. The page should simply show a copy, "installed".
8. Go back to chrome://extensions, click on "Load unpacked", and find/select the folder entitled, `chrome-mv3-prod-0.0.2`.

If the update event triggered, then it should show "update from 0.0.1" as the copy when a new-tab page is opened.

Try repeating the above steps, but for step 7, make sure that no new-tab page is open.
