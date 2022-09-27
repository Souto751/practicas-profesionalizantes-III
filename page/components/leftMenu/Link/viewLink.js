import linkController from './controllerLink.js';

class linkView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new linkController(this, this.model);

        this.option = document.createElement("a");

        this.controller.onLoad();
    }

    createLink(_option){
        if(_option){
            if(_option.name != ""){
                if(_option.link == ""){
                    _option.link = "#";
                }
                this.option.setAttribute("href", _option.link);
                this.option.classList.add("w3-bar-item", "w3-button", "left-menu-option");
                this.option.id = _option.name.replace(" ", "");
                this.option.innerText = _option.name;
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
            elements[i].classList.remove("w3-teal");
        }
        for(var i = 0; i < dropdowns.length; i++){
            dropdowns[i].classList.add("w3-hide");
        }
        for(var i = 0; i < dropdowns_options.length; i++){
            dropdowns_options[i].classList.remove("selected-suboption");
        }

        this.option.classList.add("w3-teal");
    }

}

customElements.define('x-link', linkView);

export default linkView;