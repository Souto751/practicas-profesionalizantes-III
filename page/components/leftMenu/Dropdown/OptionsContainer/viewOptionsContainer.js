import subLinkModel from '../SubLink/modelSubLink.js';
import subLinkView from '../SubLink/viewSubLink.js';
import optionsContainerController from './controllerOptionsContainer.js';

class optionsContainerView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new optionsContainerController(this, this.model);

        this.dropdown_div = document.createElement("div");

        this.controller.onLoad();
    }

    createDropdown(_option){
        this.dropdown_div.classList.add("w3-hide", "dropdown-menu");
        this.dropdown_div.id = _option.name + "-dropdown";
        this.dropdown_div.id =  this.dropdown_div.id.replace(" ", "");
    }

    createDropdownSubLink(_sublink, _option){
        var sublink_m = new subLinkModel(_sublink, _option);
        var sublink = new subLinkView(sublink_m);
        this.dropdown_div.appendChild(sublink);
    }

    connectedCallback(){ // NO ESTARIA APLICANDO EL LISTENER!!!!!!!!!!!!
        this.dropdown_div.addEventListener("click", (e) => {
            this.controller.onClick();
        });
        this.appendChild(this.dropdown_div);
    }

    toggleDropdown(){
        var elements = document.getElementsByClassName("dropdown-menu");
        
        if(!this.dropdown_div.classList.contains("w3-hide")){
            let dropdown_menus = document.getElementsByClassName("dropdown-menu");
            
            for (var i = 0; i < dropdown_menus.length; i++) {
                dropdown_menus[i].classList.add("w3-hide");
            }
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove("selected-suboption");
            }
        }else{
            let dropdown_menus = document.getElementsByClassName("dropdown-menu");
            
            for (var i = 0; i < dropdown_menus.length; i++) {
                dropdown_menus[i].classList.add("w3-hide");
            }

            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove("selected-suboption");
            }
            this.dropdown_div.classList.remove("w3-hide");
        }
        

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("w3-teal");
        }
    }

}

customElements.define('x-dropdown-options-container', optionsContainerView);

export default optionsContainerView;