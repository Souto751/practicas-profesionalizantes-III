class subLinkModel{
    constructor(_suboption, _option){
        this.data = {
            "option": _option,
            "suboption": _suboption
        };
    }

    getData(){
        return this.data;
    }
}

export default subLinkModel;