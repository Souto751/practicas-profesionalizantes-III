import createSongModel from "./components/createSong/createSongModel.js";
import createSongView from "./components/createSong/createSongView.js";

import deleteSongModel from "./components/deleteSong/deleteSongModel.js";
import deleteSongView from "./components/deleteSong/deleteSongView.js";

import updateSongModel from "./components/updateSong/updateSongModel.js";
import updateSongView from "./components/updateSong/updateSongView.js";

let app = document.getElementById("app");

let createSong_m = new createSongModel();
let createSong_v = new createSongView(createSong_m);

let deleteSong_m = new deleteSongModel();
let deleteSong_v = new deleteSongView(deleteSong_m);

let updateSong_m = new updateSongModel();
let updateSong_v = new updateSongView(updateSong_m);

/*let createSong_m = new createSongModel();
let createSong_v = new createSongView(createSong_m);*/

app.appendChild(createSong_v);
app.appendChild(deleteSong_v);
app.appendChild(updateSong_v);