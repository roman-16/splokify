import { ElectronBlocker } from '@cliqz/adblocker-electron';
import fetch from 'cross-fetch';

export default (session: Electron.Session) =>
  ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
    blocker.enableBlockingInSession(session);
  });
