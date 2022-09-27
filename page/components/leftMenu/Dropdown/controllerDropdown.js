class dropdownController{
    constructor(_view, _model){
        this.view = _view;
        this.model = _model;
    }

    onLoad(){
        this.view.createDropdown(this.model.getOption());
    }

    onClick(){
        this.view.toggleDropdown();
    }
    
}

export default dropdownController;