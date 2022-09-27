class subLinkController{
    constructor(_view, _model){
        this.view = _view;
        this.model = _model;
    }


    onLoad(){
        this.view.createLink(this.model.getData());
    }

    onClick(){
        this.view.selectOption();
    }
    
}

export default subLinkController;