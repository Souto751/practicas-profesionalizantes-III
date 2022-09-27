class leftMenuController{
    constructor(_view, _model){
        this.view = _view;
        this.model = _model;

        this.options = this.loadMenuOptions();
    }

    onClickClose(){
        this.view.w3_close();
    }


    async loadMenuOptions(){  //-> deberia cargar las opciones que apareceran en el menu
        let data = {
            options: [],
            suboptions: []
        };
        
        await this.model.loadOptions().then(response => {
            data.options = response.data.options;
        });
        
        await this.model.loadSubOptions().then(response => {
            data.suboptions = response.data.suboptions;
        });

        if(data.options.length > 0){
            data.options.map(_option => {
                let find = data.suboptions.filter(_sub => _sub.from == _option.name);
                if(find.length == 0){
                    this.view.createMenuLink(JSON.parse(JSON.stringify(_option)));
                }else{
                    this.view.createMenuDropdown(JSON.parse(JSON.stringify({'option': _option, 'suboptions': find})));
                }
            });
        }

        return data;
    } 

    
}

export default leftMenuController;