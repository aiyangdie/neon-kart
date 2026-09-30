const { app, BrowserWindow, Menu, globalShortcut, ipcMain, shell } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;
let mainWindow = null;
let allowClose = false;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    backgroundColor: '#05070f',
    title: '霓虹卡丁车 NEON KART',
    icon: path.join(__dirname, '..', 'build', 'icon.png'),
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      devTools: isDev,
    },
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadFile(path.join(__dirname, '..', 'game', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('close', (e) => {
    if (allowClose || isDev) return;
    e.preventDefault();
    mainWindow.webContents.send('app:ask-close');
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function toggleFullscreen() {
  if (!mainWindow) return;
  mainWindow.setFullScreen(!mainWindow.isFullScreen());
}

ipcMain.handle('app:get-version', () => app.getVersion());
ipcMain.handle('app:toggle-fullscreen', () => {
  toggleFullscreen();
  return mainWindow ? mainWindow.isFullScreen() : false;
});
ipcMain.handle('app:is-fullscreen', () => (mainWindow ? mainWindow.isFullScreen() : false));
ipcMain.on('app:confirm-close', (_e, shouldClose) => {
  if (!shouldClose || !mainWindow) return;
  allowClose = true;
  mainWindow.close();
});

app.whenReady().then(() => {
  createWindow();
  globalShortcut.register('F11', toggleFullscreen);
  if (isDev) {
    globalShortcut.register('CommandOrControl+Shift+I', () => {
      if (mainWindow) mainWindow.webContents.toggleDevTools();
    });
  }
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
