const { app, BrowserWindow, screen } = require('electron');

const createApp = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({width, height});
    win.loadURL('https://glittery-froyo-4efa38.netlify.app/');
}

app.whenReady().then( () => {
        createApp(); 
});