const {app, BrowserWindow} = require('electron');

const createWindow = _ =>{
    window = new BrowserWindow({
        title:'PVC Record'
    })
}

app.on('ready', createWindow)