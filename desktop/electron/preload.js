const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('neonDesktop', {
  getVersion: () => ipcRenderer.invoke('app:get-version'),
  toggleFullscreen: () => ipcRenderer.invoke('app:toggle-fullscreen'),
  isFullscreen: () => ipcRenderer.invoke('app:is-fullscreen'),
  onAskClose: (cb) => {
    ipcRenderer.on('app:ask-close', () => {
      try {
        cb();
      } catch (_) {
        ipcRenderer.send('app:confirm-close', true);
      }
    });
  },
  confirmClose: (shouldClose) => ipcRenderer.send('app:confirm-close', !!shouldClose),
});
