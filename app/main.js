'use strict';

const electron = require('electron');

// Module to control application life.
const app = electron.app;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

let windowManager = require('electron-window-manager');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    
    require('./index.js');

    const {app, BrowserWindow, screen: screen} = require('electron');

    //let screen = require('screen');
    let size = screen.getPrimaryDisplay().size;
    let width = size.width;
    let height = size.height;

    let mainBounds = screen.getPrimaryDisplay().bounds;

    //var appIcon = new Tray('logo.png');

    // Create the browser window.
    mainWindow = new BrowserWindow({
        title: 'Dicionário',
        icon: 'logo.png',
        width: width,
        height: height,
        x: mainBounds.x,
        y: mainBounds.y,
        webSecurity: false,
        showDevTools: true,
        webPreferences: {
            sharedWorker: true
        }
    });

    let pjson = require('./package.json');
    let electron_version = process.versions['electron'];
    let chrome_version = process.versions['chrome'];
    let app_version = pjson.version;
    let platform = process.platform;

    let main_url = 'http://localhost:9000/index.html';
    main_url += '?electron_version=' + electron_version;
    main_url += '&chrome_version=' + chrome_version;
    main_url += '&app_version=' + app_version;
    main_url += '&platform=' + platform;

    // and load the index.html of the app.
    mainWindow.loadURL(main_url);

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    mainWindow.focus();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
