import leftMenuOpenerModel from '../leftMenu/ActivationBtn/modelLeftMenuOpener.js';
import leftMenuOpenerView from '../leftMenu/ActivationBtn/viewLeftMenuOpener.js';
import headerController from './controllerHeader.js';

class headerView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;

        this.controller = new headerController(this, this.model);
        this.container = document.createElement("div");
        this.container.style.width = "100%";
        this.container.style.padding = "10px";
        this.container.style.display = "flex";
        this.container.style.gap = "10px";
        this.container.classList.add("w3-teal");
        this.container.style.top = "0";
        this.container.style.left = "0";


        this.leftMenuBtn_m = new leftMenuOpenerModel(this.model.leftMenuView);
        this.leftMenuBtn_v = new leftMenuOpenerView(this.leftMenuBtn_m);

        
        this.titleText = document.createElement("h1");
        this.titleText.style.color = "#ffffff";
        this.titleText.innerText = "Agustín Souto";

        this.container.appendChild(this.leftMenuBtn_v);
        this.container.appendChild(this.titleText);
    }

    connectedCallback(){
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.container.style.position = "sticky";
                this.container.style.opacity = "0.95";
              } else {
                this.container.style.position = "static";
                this.container.style.opacity = "1";
              }
        })
        this.appendChild(this.container);
    }

}

customElements.define('x-header', headerView);

export default headerView;