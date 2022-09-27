class leftMenuModel{
    constructor(){}

    loadOptions(){
        return fetch('/page/services/getLeftMenuOptions.json', {method: 'GET'}).then(res => res.json());
    }
    
    loadSubOptions(){
        return fetch('/page/services/getLeftMenuSubOptions.json', {method: 'GET'}).then(res => res.json());
    }
}

export default leftMenuModel;