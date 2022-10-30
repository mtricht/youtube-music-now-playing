const registerCallback = require("../../providers/song-info");
const fs = require("fs");
const { app } = require("electron");

const writeToFile = (content) => {
    fs.writeFile(process.env.HOMEDRIVE + process.env.HOMEPATH + "\\foobar_np.txt", content, () => {});
};

module.exports = () => {
    registerCallback((songInfo) => {
        let output = "stopped";
        if (songInfo.title && songInfo.artist && !songInfo.isPaused) {
            output = `playing: ${songInfo.artist} - ${songInfo.title}`;
        }
        writeToFile(output);
    });
    app.on('window-all-closed', module.exports.clear)
};

module.exports.clear = () => {
    writeToFile("stopped"); 
};
