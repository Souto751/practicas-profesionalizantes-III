class optionsContainerController{
    constructor(_view, _model){
        this.view = _view;
        this.model = _model;
    }

    onLoad(){
        var data = this.model.getData();
        this.view.createDropdown(data.option);
        data.suboptions.map(el => {
            this.view.createDropdownSubLink(el, data.option);
        });
    }

    onClick(){
        this.view.toggleDropdown();
    }
    
}

export default optionsContainerController;