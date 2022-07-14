class FormController{
	constructor(view, model){
		this.view = view;
		this.model = model;
	}

	cancelLogin(){
		this.view.userInput.value = "";
        this.view.pswInput.value = "";
        document.getElementById("modal-screen").classList.add("hide");
	}

	login(){
		this.model.login(this.view.getUser(), this.view.getPassword()).then(res => console.log(res));
        this.cancelLogin();
	}
}

export default FormController;