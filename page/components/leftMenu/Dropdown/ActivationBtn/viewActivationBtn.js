import activationBtnController from './controllerActivationBtn.js';

class activationBtnView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new activationBtnController(this, this.model);

        this.option = document.createElement("a");
        this.option_arrow = document.createElement("i");
        this.option_arrow.classList.add("fa", "fa-caret-down");
        this.option.appendChild(this.option_arrow);

        this.controller.onLoad();
    }

    createLink(_option){
        if(_option){
            if(_option.option.name != ""){
                if(_option.link == ""){
                    _option.link = "#";
                }
                this.option.setAttribute("href", _option.option.link);
                this.option.classList.add("w3-bar-item", "w3-button", "left-menu-option");
                this.option.id = _option.option.name.replace(" ", "");
                this.option.innerText = _option.option.name;
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
        let dropdown = document.getElementById(this.option.id+"-dropdown");
        if(dropdown.classList.contains("w3-hide")){
            var dropdowns = document.getElementsByClassName("dropdown-menu");

            for(var i = 0; i < dropdowns.length; i++){
                dropdowns[i].classList.add("w3-hide");
            }

            dropdown.classList.remove("w3-hide");
        }else{
            dropdown.classList.add("w3-hide");
        }
        
    }

}

customElements.define('x-dropdown-activation-button', activationBtnView);

export default activationBtnView;