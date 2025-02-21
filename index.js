const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 450,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  mainWindow.loadFile('index.html');

});

ipcMain.on('minimize-window', () => {
  if (mainWindow) {
      mainWindow.minimize();
  }
});
