const { app, BrowserWindow, screen } = require('electron');
const { exec, spawn } = require('child_process');
exec("npm run front");

const createApp = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({width, height});
    win.loadURL('http://localhost:3000');
    win.reload();
}

app.whenReady().then( () => {

    setTimeout(() => {
        
        createApp();
    }, 2000);
});

app.on('quit', () => {
    // exec("npm run front");
    const result = exec("netstat -ano | findstr :3000");
    exec(`taskkill /PID ${result.pid} /F`);
    exec(`echo ${result.pid}`);
});
