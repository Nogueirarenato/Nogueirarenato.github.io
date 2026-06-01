const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1100,
        height: 700,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        icon: path.join(__dirname, 'icone.png'),
        title: 'Urna Eletrônica'
    });

    // Carregar o arquivo HTML
    win.loadFile('index.html');
    
    // Maximizar por padrão (opcional)
    win.maximize();
    
    // Remover menu padrão (opcional)
    win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});