import { BrowserWindow } from 'electron';
import injectSplokify from './injectSplokify.ts.string';

export default (window: BrowserWindow) => {
  window.webContents.executeJavaScript(injectSplokify);
  window.webContents.on('did-finish-load', () => window.webContents.executeJavaScript(injectSplokify));

  return {
    previousTrack: () => window.webContents.executeJavaScript('splokify.media.actions.previousTrack()'),
    togglePlay: () => window.webContents.executeJavaScript('splokify.media.actions.togglePlay()'),
    stopTrack: () => window.webContents.executeJavaScript('splokify.media.actions.stopTrack()'),
    nextTrack: () => window.webContents.executeJavaScript('splokify.media.actions.nextTrack()'),
  };
};
