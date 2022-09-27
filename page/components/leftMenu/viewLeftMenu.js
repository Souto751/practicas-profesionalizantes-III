import leftMenuController from './controllerLeftMenu.js';
import linkView from './Link/viewLink.js';
import linkModel from './Link/modelLink.js';
import dropdownView from './Dropdown/viewDropdown.js';
import dropdownModel from './Dropdown/modelDropdown.js';

class leftMenuView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new leftMenuController(this, this.model);
        this.id = "left-menu";

        this.style.position = "fixed";
        this.style.background = "#ffffff";
        this.style.display = "none";

        this.container = document.createElement("div");
        this.container.classList.add("w3-bar-block", "w3-collapse", "w3-animate-left", "w3-card");
        this.container.style.width = "250px";
        this.container.style.height = "100vh";
        this.container.style.overflow = "auto";
        this.container.style.zIndex = "3";
        this.container.style.display = "block";
        this.container.id = "leftMenu";

        this.logo_div = document.createElement("div");
        this.logo_div.style.width = "100%";
        this.logo_div.style.display = "flex";
        this.logo_div.style.justifyContent = "space-between";
        this.logo_div.classList.add("w3-border-bottom", "w3-large", "w3-padding");

        this.closeBtn = document.createElement("button");
        this.closeBtn.classList.add("w3-button");
        this.closeBtn.innerText = "x";
        this.closeBtn.style.width = "20%";
        this.closeBtn.style.padding = "10px";
        this.closeBtn.style.textAlign = "center";
        this.closeBtn.style.marginLeft = "5%";
        this.closeBtn.style.borderRadius = "5px";
        this.closeBtn.addEventListener("click", () => {this.controller.onClickClose()});

        this.logo = document.createElement("img");
        this.logo.style.width = "75%";
        this.logo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg");
        this.logo.classList.add("w3-theme");

        this.logo_div.appendChild(this.logo);
        this.logo_div.appendChild(this.closeBtn);
        this.container.appendChild(this.logo_div);
    }
    
    connectedCallback(){
        this.closeBtn.addEventListener("click", () => {
            this.controller.onClickClose();
        });
        this.appendChild(this.container);
    }

    createMenuLink(_option){
        var link_m = new linkModel(_option);
        var link = new linkView(link_m);
        this.container.appendChild(link);
    }

    createMenuDropdown(_option){
        var dropdown_m = new dropdownModel(_option);
        var dropdown = new dropdownView(dropdown_m);
        this.container.appendChild(dropdown);
    }

    selectSuboption(_suboption, _option){
        var elements = document.getElementsByClassName("w3-bar-item");

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("selected-suboption");
        }
        _suboption.classList.add("selected-suboption");
        _option.classList.add("w3-teal");
    }

    w3_open() {
        this.style.display = "block";
        let app = document.getElementById("body");
        if(app){
            app.style.width = "calc(100% - " + this.container.style.width + ")";
            app.style.marginLeft = this.container.style.width;
        }
    }
    
    w3_close() {
        this.style.display = "none";
        let app = document.getElementById("body");
        if(app){
            app.style.width = "100%"
            app.style.marginLeft = "0";
        }
    }
    
    w3_toggle() {
        if(this.style.display == "block"){
            this.w3_close();
        }else{
            this.w3_open();
        }
    }

}

customElements.define('x-leftmenu', leftMenuView);

export default leftMenuView;