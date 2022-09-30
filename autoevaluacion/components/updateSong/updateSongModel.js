class updateSongModel{
    constructor(){}

    async updateSong(_id, _title, _artist, _album){
        return await fetch('services/updateSong.php?id='+_id+'&title='+_title+"&artist="+_artist+"&album="+_album).then(res => res.json());
    }
}

export default updateSongModel;