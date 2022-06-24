class CalculatorController{
	constructor(view, model){
		this.view = view;
		this.model = model;
	}

	clickNumberButton(btn){
		if(this.view.display.value == "0") this.view.display.value = btn;
		else this.view.display.value += btn;
	}

	clickDeleteButton(){
		let len = this.view.display.value.split('').length;
		if(len == 1){
			this.view.display.value = "0";

		}else if(len > 1){
			this.view.display.value = this.view.display.value.split('').slice(0, -1).join('');
		}
	}

	clickDeleteButtonAll(){
		this.view.display.value = "0";
	}

	clickSignButton(sign){
		if(!("+ - / * .".includes(this.view.display.value.split('')[this.view.display.value.split('').length-1]))) {
			this.view.display.value += sign;
		}else{
			let auxArray = this.view.display.value.split('');
			auxArray[auxArray.length-1] = sign;
			this.view.display.value = auxArray.join('');
			
		}
	}

	//Bien, este método no es necesario aquí pero está perfecto 
	//como lo armaste.
	clickEqualButton(){
		if("+ - * / .".includes(this.view.display.value.split('')[this.view.display.value.split('').length-1])){
			alert("Syntax Error");
		}else{
			this.model.calculate(this.view.display.value).then(res => this.view.display.value = res);
		}
		
	}
}

export default CalculatorController;