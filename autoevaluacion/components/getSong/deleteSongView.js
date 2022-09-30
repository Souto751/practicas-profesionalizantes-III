import deleteSongController from "./deleteSongController.js";

class deleteSongView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new deleteSongController(this, this.model);
        this.style.width = "100%";
        this.style.height = "100vh";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.justifyContent = "center";
        this.style.alignItems = "center";
        this.style.background = "#2a2b2c";
        
        this.titleH1 = document.createElement("h1");
        this.titleH1.innerText = "Delete Song";
        this.titleH1.style.color = "#ffffff";

        this.form = document.createElement("div");
        this.form.style.width = "90%";
        this.form.style.maxWidth = "400px";
        this.form.style.height = "90%";
        this.form.style.maxHeight = "500px";
        this.form.style.display = "flex";
        this.form.style.flexDirection = "column";
        this.form.style.justifyContent = "center";
        this.form.style.alignItems = "center";
        this.form.style.gap = "10px";

        this.idDiv = document.createElement("div");
        this.idDiv.style.display = "flex";
        this.idDiv.style.flexDirection = "column";
        this.idDiv.style.width = "100%";
        this.idDiv.style.gap = "5px";

        this.idSpan = document.createElement("span");
        this.idSpan.innerText = "Song ID";
        this.idSpan.style.color = "#ffffff";

        this.idInput = document.createElement("input");
        this.idInput.setAttribute("type", "number");

        this.submitBtn = document.createElement("button");
        this.submitBtn.innerText = "Submit";
        this.submitBtn.style.padding = "5px";

        //Agrego los elementos
        this.idDiv.appendChild(this.idSpan);
        this.idDiv.appendChild(this.idInput);

        this.form.appendChild(this.titleH1);
        this.form.appendChild(this.idDiv);
        this.form.appendChild(this.submitBtn);

    }

    connectedCallback(){
        this.submitBtn.addEventListener("click", async (e) => {
            e.stopImmediatePropagation();
            await this.controller.onSubmit();
            this.cleanInputs();
        });

        this.appendChild(this.form);
    }

    cleanInputs(){
        this.idInput.value = "";
    };
}

customElements.define('x-deletesong', deleteSongView);

export default deleteSongView;