import dropdownController from './controllerDropdown.js';
import activationBtnModel from './ActivationBtn/modelActivationBtn.js';
import activationBtnView from './ActivationBtn/viewActivationBtn.js';
import optionsContainerModel from './OptionsContainer/modelOptionsContainer.js';
import optionsContainerView from './OptionsContainer/viewOptionsContainer.js';

class dropdownView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new dropdownController(this, this.model);
        this.dropdown = document.createElement("div");

        this.controller.onLoad();
    }

    createDropdown(_option){
        if(_option){
            if(_option.name != ""){
                if(_option.link == ""){
                    _option.link = "#";
                }

                var activator_m = new activationBtnModel(_option);
                var activator = new activationBtnView(activator_m);
                this.dropdown.appendChild(activator);

                var optionsContainer_m = new optionsContainerModel(_option);
                var optionsContainer = new optionsContainerView(optionsContainer_m);
                this.dropdown.appendChild(optionsContainer);
        /*
                let dropdown_div_suboptions = document.createElement("div");
                dropdown_div_suboptions.classList.add("w3-hide", "dropdown-menu");
                dropdown_div_suboptions.id = _option.option.name + "-dropdown";
                dropdown_div_suboptions.id = dropdown_div_suboptions.id.replace(" ", "");

                if(_option.suboptions){
                    _option.suboptions.map(_sub => {
                        let dropdown_suboption = document.createElement("a");
                        dropdown_suboption.classList.add("w3-bar-item", "w3-text-white","w3-button", "bar-subitem");
                        dropdown_suboption.setAttribute("href", _sub.link);
                        dropdown_suboption.innerText = _sub.name;
                        dropdown_suboption.id = _option.option.name + "-"+ _sub.name;
                        dropdown_suboption.id = dropdown_suboption.id.replace(" ", "");
                        dropdown_suboption.style.background = "#009688aa";
                        dropdown_suboption.style.paddingLeft = "30px";
                        
                        dropdown_suboption.addEventListener("click", () => {
                            this.controller.selectSuboption(dropdown_suboption, dropdown);
                        });
                        
                        dropdown_div_suboptions.appendChild(dropdown_suboption);
                    });
                }
                
                dropdown.addEventListener("click", () => {
                    this.controller.toggleDropdown(dropdown, dropdown_div_suboptions);
                });
            */}
        }
    }

    connectedCallback(){ // NO ESTARIA APLICANDO EL LISTENER!!!!!!!!!!!!
        this.appendChild(this.dropdown);
    }

    toggleDropdown(){
        var elements = document.getElementsByClassName("w3-bar-item");
        
        /*if(!_suboptions.classList.contains("w3-hide")){
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
            _suboptions.classList.remove("w3-hide");
        }*/
        

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("w3-teal");
        }
        this.dropdown.classList.add("w3-teal");
    }

}

customElements.define('x-dropdown', dropdownView);

export default dropdownView;