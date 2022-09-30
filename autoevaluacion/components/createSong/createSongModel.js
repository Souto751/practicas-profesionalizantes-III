class createSongModel{
    constructor(){}

    async createSong(_title, _artist, _album){
        return await fetch('services/createSong.php?title='+_title+"&artist="+_artist+"&album="+_album).then(res => res.json());
    }
}

export default createSongModel;