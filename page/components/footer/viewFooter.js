import footerController from './controllerFooter.js';

class footerView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new footerController(this, this.model);


        this.container = document.createElement("div");
        this.container.style.width = "100%";
        this.container.style.padding = "20px";
        this.container.style.paddingRight = "40px";
        this.container.style.display = "flex";
        this.container.style.justifyContent = "flex-end";
        this.container.style.gap = "10px";
        this.container.classList.add("w3-teal");

        
        this.titleText = document.createElement("p");
        this.titleText.style.color = "#ffffff";
        this.titleText.innerText = "© Agustín Souto | Prácticas Profesionalizantes 3 | 2022";

        this.container.appendChild(this.titleText);
    }

    connectedCallback(){
        this.appendChild(this.container);
    }

}

customElements.define('x-footer', footerView);

export default footerView;