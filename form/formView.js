import FormController from './formController.js';

class FormView extends HTMLElement{
	constructor(model){

		super();

		this.innerModel = model;
		this.innerController = new FormController(this, this.innerModel);

        this.userLabel = document.createElement("span");
        this.userLabel.classList.add("input-label");
        this.userLabel.innerText = "User or Email:"

		this.userInput = document.createElement("input");
        this.userInput.id = "user-input";
        this.userInput.setAttribute("placeholder", "User/email...");
        this.userInput.classList.add("form-input");
        this.userInput.setAttribute("type", "text");

        this.pswLabel = document.createElement("span");
        this.pswLabel.classList.add("input-label");
        this.pswLabel.innerText = "Password:"

        this.pswInput = document.createElement("input");
        this.pswInput.id = "pwd-input";
        this.pswInput.setAttribute("placeholder", "Password...");
        this.pswInput.classList.add("form-input");
        this.pswInput.setAttribute("type", "password");

        this.loginBtn = document.createElement("button");
        this.loginBtn.id = "login-btn";
        this.loginBtn.classList.add("btn-primary");
        this.loginBtn.innerText = "Login";
        
        this.cancelBtn = document.createElement("button");
        this.cancelBtn.id = "cancel-btn"
        this.cancelBtn.classList.add("btn-secondary");
        this.cancelBtn.innerText = "Cancel";

        this.btns = document.createElement("div");
        this.btns.id = "btns-div";
        this.btns.appendChild(this.loginBtn);
        this.btns.appendChild(this.cancelBtn);

        this.layout = document.createElement("div");
        this.layout.id = "login-form";
        this.layout.appendChild(this.userLabel);
        this.layout.appendChild(this.userInput);
        this.layout.appendChild(this.pswLabel);
        this.layout.appendChild(this.pswInput);
        this.layout.appendChild(this.btns);

	}

	connectedCallback(){
		console.log("Añadido al DOM");		


		// Funcionabilidades
		this.loginBtn.addEventListener("click", (e) => {
			this.innerController.login();
		});

		this.cancelBtn.addEventListener("click", (e) => {
			this.innerController.cancelLogin();
		});

		this.appendChild(this.layout);
	}

    getUser(){
        return this.userInput.value;
    }

    getPassword(){
        return this.pswInput.value;
    }

}

customElements.define('x-form', FormView);

export default FormView;