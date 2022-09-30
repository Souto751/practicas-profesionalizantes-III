class createSongController{
    constructor(_view, _model){
        this.view = _view;
        this.model = _model;
    }

    async onSubmit(){
        await this.model.createSong(this.view.titleInput.value, this.view.artistInput.value, this.view.albumInput.value).then((res) => {
            alert("Status: " + res.status + "\nMessage: " + res.message);
        });
    }
}

export default createSongController;