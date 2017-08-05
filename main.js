// ./main.js
const {app, BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');

require('dotenv').config();

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  console.log("__dirname = " + path.join(__dirname, 'dist/index.html'));
  console.log("process env PACKAGE = " + process.env.PACKAGE);
  console.log("process env HOST = " + process.env.HOST);
  if (process.env.PACKAGE === 'true' || process.env.PACKAGE === true){
    console.log('get URL from file');
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    console.log('get URL from HTTP');
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
  createWindow()
}
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
