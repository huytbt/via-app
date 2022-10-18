const { app, BrowserWindow } = require("electron");
const path = require('path');

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
  });
  win.loadURL(path.join(__dirname, "./index.html"));
}
