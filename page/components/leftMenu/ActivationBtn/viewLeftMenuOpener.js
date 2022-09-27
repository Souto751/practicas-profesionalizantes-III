import leftMenuOpenerController from './controllerleftMenuOpener.js';

class leftMenuOpenerView extends HTMLElement{
    constructor(_model){
        super();
        this.style.display = "flex";
        this.style.height = "100%";
        this.style.flexDirection = "column";
        this.style.justifyContent = "center";
        this.style.marginTop = "auto";
        this.style.marginBottom = "auto";
        this.style.borderRadius = "5px";
        this.style.overflow = "hidden";

        this.model = _model;
        this.controller = new leftMenuOpenerController(this, this.model);
        this.opener = document.createElement("button");
        this.opener.classList.add("w3-button", "w3-teal", "w3-xlarge");
        this.opener.style.marginTop = "auto";
        this.opener.style.marginBottom = "auto";
        this.opener.innerText = "☰";

    }

    connectedCallback(){
        this.opener.addEventListener("click", (e) => {
            this.controller.onClick();
        });
        this.appendChild(this.opener);
    }

}

customElements.define('x-leftmenuopener', leftMenuOpenerView);

export default leftMenuOpenerView;