const { app, BrowserWindow } = require('electron');
const path = require('path');

// Pour les DVD en haute qualité
const ffmpegPath = require('ffmpeg-static');
console.log("FFmpeg trouvé ici:", ffmpegPath);

function creerFenetre() {
  const fenetre = new BrowserWindow({
    width: 1100,
    height: 700,
    backgroundColor: '#111',
    webPreferences: {
      nodeIntegration: false
    }
  });
  fenetre.loadFile('index.html');
}

app.whenReady().then(creerFenetre);
