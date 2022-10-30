# youtube-music-now-playing
A plugin for [th-ch/youtube-music](https://github.com/th-ch/youtube-music) that saves the current playing song to a file named `foobar_np.txt`, much like the Foobar2000 [now playing plugin](https://skipyrich.com/wiki/Foobar2000:Now_Playing_Simple).

Created to be used with [gamesense-essentials](https://mtricht.github.io/gamesense-essentials/).

## Installation
Before starting make sure th-ch/youtube-music is not currently running.

Disclaimer: installing the plugin like this is probably error prone and will probably make it disappear after an automatic update.

1. Install [7-Zip](https://www.7-zip.org/)
2. Download [Asar7z](https://www.tc4shell.com/en/7zip/asar/)
3. Navigate to `C:\Program Files\7-Zip`
4. Create a folder named `Formats`
5. Unpack the downloaded .dll files from Asar7z into the newly created folder
6. Navigate to the location where you installed Youtube Music, for me `C:\Users\<USERNAME>\AppData\Local\Programs\youtube-music` where `<USERNAME>` is your username and open the folder named `resources`
7. Open `app.asar` with 7-Zip and in 7-Zip navigate to `plugins`
8. Create a folder named `now-playing`
9. Download [back.js](https://raw.githubusercontent.com/mtricht/youtube-music-now-playing/master/back.js) and place this file inside the newly created folder
10. Open Youtube Music and enable the `now-playing` plugin
