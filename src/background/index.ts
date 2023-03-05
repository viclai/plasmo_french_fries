import { Storage } from '@plasmohq/storage';

const storage = new Storage({ area: 'local' });

chrome.runtime.onInstalled.addListener((details: chrome.runtime.InstalledDetails) => {
  console.log('### onInstalled', details);

  const { reason, previousVersion } = details;
  let status = `${reason}`;

  if (reason === chrome.runtime.OnInstalledReason.UPDATE) {
    status += ` from ${previousVersion}`;
  }
  console.log('### onInstalled status', status);
  storage.set('status', status);
});
