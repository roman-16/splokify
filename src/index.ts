import path from 'path';
import { app, BrowserWindow, globalShortcut } from 'electron';
import createExecuter from './createExecuter';

const isDevelopment = process.env.NODE_ENV === 'development';

function createWindow() {
  BrowserWindow.addExtension(path.resolve(__dirname, '../uBlock'));

  const window = new BrowserWindow({ webPreferences: { plugins: true } });

  if (isDevelopment) {
    window.webContents.openDevTools();
    window.maximize();
  }

  window.loadURL('https://open.spotify.com');

  const executer = createExecuter(window);

  globalShortcut.register('MediaPreviousTrack', () => executer.previousTrack());
  globalShortcut.register('MediaPlayPause', () => executer.togglePlay());
  globalShortcut.register('MediaStop', () => executer.stopTrack());
  globalShortcut.register('MediaNextTrack', () => executer.nextTrack());
}

app.userAgentFallback = 'Chrome/81';
app.whenReady().then(createWindow);
