import subLinkController from './controllerSubLink.js';

class subLinkView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new subLinkController(this, this.model);

        this.option = document.createElement("a");

        this.controller.onLoad();
    }

    createLink(_data){
        if(_data.option){
            if(_data.option.name != ""){
                if(_data.option.link == ""){
                    _data.option.link = "#";
                }

                this.option.classList.add("w3-bar-item", "w3-text-white","w3-button", "bar-subitem");
                this.option.setAttribute("href", _data.suboption.link);
                this.option.innerText = _data.suboption.name;
                this.option.id = _data.option.name + "-"+ _data.suboption.name;
                this.option.id = this.option.id.replace(" ", "");
                this.option.style.background = "#009688aa";
                this.option.style.paddingLeft = "30px";
            }
        }
    }

    connectedCallback(){ // NO ESTARIA APLICANDO EL LISTENER!!!!!!!!!!!!
        this.option.addEventListener("click", (e) => {
            this.controller.onClick();
        });
        this.appendChild(this.option);
    }

    selectOption(){
        var elements = document.getElementsByClassName("left-menu-option");
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var dropdowns_options = document.getElementsByClassName("bar-subitem");

        for (var i = 0; i < elements.length; i++) {
            if(elements[i].id != this.option.id.split("-").splice(0,1).join("-")){
                elements[i].classList.remove("w3-teal");
            }
        }
        for(var i = 0; i < dropdowns.length; i++){
            dropdowns[i].classList.add("w3-hide");
        }
        for(var i = 0; i < dropdowns_options.length; i++){
            dropdowns_options[i].classList.remove("selected-suboption");
            dropdowns_options[i].classList.remove("w3-teal");
        }

        document.getElementById(this.option.id.split("-").splice(0,1).join("-")).classList.add("w3-teal");
        this.option.classList.add("selected-suboption");
    }

}

customElements.define('x-sublink', subLinkView);

export default subLinkView;