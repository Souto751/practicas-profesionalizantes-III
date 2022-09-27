class leftMenuOpenerController{
    constructor(_view, _model){
        this.view = _view;
        this.model = _model;
    }

    onClick(){
        this.model.leftmenu.w3_toggle();
    }
    
}

export default leftMenuOpenerController;