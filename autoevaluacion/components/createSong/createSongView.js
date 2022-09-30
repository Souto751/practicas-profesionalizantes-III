import createSongController from "./createSongController.js";

class createSongView extends HTMLElement{
    constructor(_model){
        super();
        this.model = _model;
        this.controller = new createSongController(this, this.model);
        this.style.width = "100%";
        this.style.height = "100vh";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.justifyContent = "center";
        this.style.alignItems = "center";
        
        this.titleH1 = document.createElement("h1");
        this.titleH1.innerText = "Create Song";

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

        this.titleDiv = document.createElement("div");
        this.titleDiv.style.display = "flex";
        this.titleDiv.style.flexDirection = "column";
        this.titleDiv.style.width = "100%";
        this.titleDiv.style.gap = "5px";

        this.titleSpan = document.createElement("span");
        this.titleSpan.innerText = "Title";

        this.titleInput = document.createElement("input");
        this.titleInput.setAttribute("maxlength", "64");

        this.artistDiv = document.createElement("div");
        this.artistDiv.style.display = "flex";
        this.artistDiv.style.flexDirection = "column";
        this.artistDiv.style.width = "100%";
        this.artistDiv.style.gap = "5px";

        this.artistSpan = document.createElement("span");
        this.artistSpan.innerText = "Artist";

        this.artistInput = document.createElement("input");
        this.artistInput.setAttribute("maxlength", "64");

        this.albumDiv = document.createElement("div");
        this.albumDiv.style.display = "flex";
        this.albumDiv.style.flexDirection = "column";
        this.albumDiv.style.width = "100%";
        this.albumDiv.style.gap = "5px";

        this.albumSpan = document.createElement("span");
        this.albumSpan.innerText = "Album";

        this.albumInput = document.createElement("input");
        this.albumInput.setAttribute("maxlength", "64");

        this.submitBtn = document.createElement("button");
        this.submitBtn.innerText = "Submit";
        this.submitBtn.style.padding = "5px";

        //Agrego los elementos
        this.titleDiv.appendChild(this.titleSpan);
        this.titleDiv.appendChild(this.titleInput);

        this.artistDiv.appendChild(this.artistSpan);
        this.artistDiv.appendChild(this.artistInput);

        this.albumDiv.appendChild(this.albumSpan);
        this.albumDiv.appendChild(this.albumInput);


        this.form.appendChild(this.titleH1);
        this.form.appendChild(this.titleDiv);
        this.form.appendChild(this.artistDiv);
        this.form.appendChild(this.albumDiv);
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
        this.titleInput.value = "";
        this.artistInput.value = "";
        this.albumInput.value = "";
    };
}

customElements.define('x-createsong', createSongView);

export default createSongView;