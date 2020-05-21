import { app, BrowserWindow, globalShortcut, session } from 'electron';
import createExecuter from './createExecuter';
import blockAds from './blockAds';

const isDevelopment = process.env.NODE_ENV === 'development';

const createWindow = async () => {
  await blockAds(session.defaultSession);

  const window = new BrowserWindow();

  window.loadURL('https://open.spotify.com/');

  if (!isDevelopment) {
    window.removeMenu();
  } else {
    window.webContents.openDevTools();
    window.maximize();
  }

  const executer = createExecuter(window);

  globalShortcut.register('MediaPreviousTrack', () => executer.previousTrack());
  globalShortcut.register('MediaPlayPause', () => executer.togglePlay());
  globalShortcut.register('MediaStop', () => executer.stopTrack());
  globalShortcut.register('MediaNextTrack', () => executer.nextTrack());
};

app.userAgentFallback = 'Chrome/81';
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
