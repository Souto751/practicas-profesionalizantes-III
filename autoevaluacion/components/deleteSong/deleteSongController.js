class deleteSongController{
    constructor(_view, _model){
        this.view = _view;
        this.model = _model;
    }

    async onSubmit(){
        await this.model.deleteSong(this.view.idInput.value).then((res) => {
            alert("Status: " + res.status + "\nMessage: " + res.message);
        });
    }
}

export default deleteSongController;