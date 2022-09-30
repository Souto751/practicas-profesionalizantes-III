class deleteSongModel{
    constructor(){}

    async deleteSong(_id){
        return await fetch('services/deleteSong.php?id='+_id).then(res => res.json());
    }
}

export default deleteSongModel;