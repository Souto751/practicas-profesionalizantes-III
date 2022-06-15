//Muy buen trabajo Agustín
//Consulta: Utilizaste divs además de botones por algo en particular?
//Muy buen uso del CSS

function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
    //Añade el elemento recibido
    tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}

class Calculator{
	constructor(){
		this.operacion = "0";
	}

	calculate(){
		if("+ - * / .".includes(this.operacion.split('')[this.operacion.split('').length-1])){
			alert("Syntax Error");
		}else{
			this.operacion = eval(this.operacion) + "";
		}
		
		return this.operacion;
	}
}

class CalculatorView extends HTMLElement{
	constructor(){

		super();

		this.calculator = new Calculator();

		this.display = document.createElement("input");
		this.display.setAttribute("disabled", "true");
		this.display.classList.add("div-input");
		this.display.value = 0;

		this.button1 = document.createElement("button");
		this.button1.innerHTML = "1"; //Se utiliza innerText
		this.button1.classList.add("btn", "btn-number");

		this.divButton1 = document.createElement("div");
		this.divButton1.classList.add("div-btn", "div-btn-number");

		this.divButton1.appendChild(this.button1);

		this.button2 = document.createElement("button");
		this.button2.innerHTML = "2";
		this.button2.classList.add("btn", "btn-number");

		this.divButton2 = document.createElement("div");
		this.divButton2.classList.add("div-btn", "div-btn-number");

		this.divButton2.appendChild(this.button2);

		this.button3 = document.createElement("button");
		this.button3.innerHTML = "3";
		this.button3.classList.add("btn", "btn-number");

		this.divButton3 = document.createElement("div");
		this.divButton3.classList.add("div-btn", "div-btn-number");

		this.divButton3.appendChild(this.button3);

		this.buttonDivide = document.createElement("button");
		this.buttonDivide.innerHTML = "/";
		this.buttonDivide.classList.add("btn", "btn-sign");

		this.divButtonDivide = document.createElement("div");
		this.divButtonDivide.classList.add("div-btn", "div-btn-sign");

		this.divButtonDivide.appendChild(this.buttonDivide);

		this.button4 = document.createElement("button");
		this.button4.innerHTML = "4";
		this.button4.classList.add("btn", "btn-number");

		this.divButton4 = document.createElement("div");
		this.divButton4.classList.add("div-btn", "div-btn-number");

		this.divButton4.appendChild(this.button4);

		this.button5 = document.createElement("button");
		this.button5.innerHTML = "5";
		this.button5.classList.add("btn", "btn-number");

		this.divButton5 = document.createElement("div");
		this.divButton5.classList.add("div-btn", "div-btn-number");

		this.divButton5.appendChild(this.button5);

		this.button6 = document.createElement("button");
		this.button6.innerHTML = "6";
		this.button6.classList.add("btn", "btn-number");

		this.divButton6 = document.createElement("div");
		this.divButton6.classList.add("div-btn", "div-btn-number");

		this.divButton6.appendChild(this.button6);

		this.buttonMult = document.createElement("button");
		this.buttonMult.innerHTML = "*";
		this.buttonMult.classList.add("btn", "btn-sign");

		this.divButtonMult = document.createElement("div");
		this.divButtonMult.classList.add("div-btn", "div-btn-sign");

		this.divButtonMult.appendChild(this.buttonMult);

		this.button7 = document.createElement("button");
		this.button7.innerHTML = "7";
		this.button7.classList.add("btn", "btn-number");

		this.divButton7 = document.createElement("div");
		this.divButton7.classList.add("div-btn", "div-btn-number");

		this.divButton7.appendChild(this.button7);

		this.button8 = document.createElement("button");
		this.button8.innerHTML = "8";
		this.button8.classList.add("btn", "btn-number");

		this.divButton8 = document.createElement("div");
		this.divButton8.classList.add("div-btn", "div-btn-number");

		this.divButton8.appendChild(this.button8);

		this.button9 = document.createElement("button");
		this.button9.innerHTML = "9";
		this.button9.classList.add("btn", "btn-number");

		this.divButton9 = document.createElement("div");
		this.divButton9.classList.add("div-btn", "div-btn-number");

		this.divButton9.appendChild(this.button9);

		this.buttonRest = document.createElement("button");
		this.buttonRest.innerHTML = "-";
		this.buttonRest.classList.add("btn", "btn-sign");

		this.divButtonRest = document.createElement("div");
		this.divButtonRest.classList.add("div-btn", "div-btn-sign");

		this.divButtonRest.appendChild(this.buttonRest);

		this.button0 = document.createElement("button");
		this.button0.innerHTML = "0";
		this.button0.classList.add("btn", "btn-number");

		this.divButton0 = document.createElement("div");
		this.divButton0.classList.add("div-btn", "div-btn-number");

		this.divButton0.appendChild(this.button0);

		this.buttonDot = document.createElement("button");
		this.buttonDot.innerHTML = ".";
		this.buttonDot.classList.add("btn", "btn-number");

		this.divButtonDot = document.createElement("div");
		this.divButtonDot.classList.add("div-btn", "div-btn-number");

		this.divButtonDot.appendChild(this.buttonDot);

		this.buttonSum = document.createElement("button");
		this.buttonSum.innerHTML = "+";
		this.buttonSum.classList.add("btn", "btn-sign");

		this.divButtonSum = document.createElement("div");
		this.divButtonSum.classList.add("div-btn", "div-btn-sign");

		this.divButtonSum.appendChild(this.buttonSum);

		this.buttonEqual = document.createElement("button");
		this.buttonEqual.innerHTML = "=";
		this.buttonEqual.classList.add("btn", "btn-equal");

		this.divButtonEqual = document.createElement("div");
		this.divButtonEqual.classList.add("div-btn", "div-btn-equal");

		this.divButtonEqual.appendChild(this.buttonEqual);

		this.buttonDelete = document.createElement("button");
		this.buttonDelete.innerHTML = "Delete";
		this.buttonDelete.classList.add("btn", "btn-delete");

		this.divButtonDelete = document.createElement("div");
		this.divButtonDelete.classList.add("div-btn", "div-btn-delete");

		this.divButtonDelete.appendChild(this.buttonDelete);

		this.layout = document.createElement("table");
		this.layout.id = "table";

		let firstCell = this.layout.insertRow().insertCell();
		firstCell.setAttribute("colspan", 4);

		for(let i = 0; i < 4; i++){
			let filaActual = this.layout.insertRow();

			for(let c = 0; c < 4; c++){
				filaActual.insertCell();
			}
		}

		let lastCell = this.layout.insertRow().insertCell();
		lastCell.setAttribute("colspan", 4);
	}

	connectedCallback(){
		console.log("Añadido al DOM");		

		// Posiciomaniento de elementos
		posicionarElementoEnTabla(this.layout,0,0,this.display);

		posicionarElementoEnTabla(this.layout,1,0,this.divButton7);
        posicionarElementoEnTabla(this.layout,1,1,this.divButton8);
        posicionarElementoEnTabla(this.layout,1,2,this.divButton9);
        posicionarElementoEnTabla(this.layout,1,3,this.divButtonSum);

		posicionarElementoEnTabla(this.layout,2,0,this.divButton4);
        posicionarElementoEnTabla(this.layout,2,1,this.divButton5);
        posicionarElementoEnTabla(this.layout,2,2,this.divButton6);
        posicionarElementoEnTabla(this.layout,2,3,this.divButtonRest);

		posicionarElementoEnTabla(this.layout,3,0,this.divButton1);
        posicionarElementoEnTabla(this.layout,3,1,this.divButton2);
        posicionarElementoEnTabla(this.layout,3,2,this.divButton3);
        posicionarElementoEnTabla(this.layout,3,3,this.divButtonMult);

		posicionarElementoEnTabla(this.layout,4,0,this.divButton0);
        posicionarElementoEnTabla(this.layout,4,1,this.divButtonDot);
        posicionarElementoEnTabla(this.layout,4,2,this.divButtonEqual);
        posicionarElementoEnTabla(this.layout,4,3,this.divButtonDivide);

		posicionarElementoEnTabla(this.layout,5,0,this.divButtonDelete);

		// Funcionabilidades
		this.button1.addEventListener("click", (e) => {
			this.clickNumberButton("1");
		});

		this.button2.addEventListener("click", (e) => {
			this.clickNumberButton("2");
		});

		this.button3.addEventListener("click", (e) => {
			this.clickNumberButton("3");
		});

		this.button4.addEventListener("click", (e) => {
			this.clickNumberButton("4");
		});

		this.button5.addEventListener("click", (e) => {
			this.clickNumberButton("5");
		});

		this.button6.addEventListener("click", (e) => {
			this.clickNumberButton("6");
		});

		this.button7.addEventListener("click", (e) => {
			this.clickNumberButton("7");
		});

		this.button8.addEventListener("click", (e) => {
			this.clickNumberButton("8");
		});

		this.button9.addEventListener("click", (e) => {
			this.clickNumberButton("9");
		});

		this.button0.addEventListener("click", (e) => {
			this.clickNumberButton("0");
		});

		this.buttonDot.addEventListener("click", (e) => {
			this.clickSignButton(".");
		});

		this.buttonEqual.addEventListener("click", (e) => {
			this.calculate();
		});

		this.buttonSum.addEventListener("click", (e) => {
			this.clickSignButton("+");
		});

		this.buttonRest.addEventListener("click", (e) => {
			this.clickSignButton("-");
		});

		this.buttonMult.addEventListener("click", (e) => {
			this.clickSignButton("*");
		});

		this.buttonDivide.addEventListener("click", (e) => {
			this.clickSignButton("/");
		});

		this.buttonDelete.addEventListener("click", (e) => {
			this.clickDeleteButton();
		});

		this.appendChild(this.layout);
	}

	clickNumberButton(btn){
		if(this.calculator.operacion == "0") this.calculator.operacion = btn;
		else this.calculator.operacion += btn;

		this.display.value = this.calculator.operacion;
	}

	clickDeleteButton(){
		let len = this.calculator.operacion.split('').length;
		if(len == 1){
			this.calculator.operacion = "0";

		}else if(len > 1){
			this.calculator.operacion = this.calculator.operacion.split('').slice(0, -1).join('');
		}

		this.display.value = this.calculator.operacion;
	}

	clickSignButton(sign){
		if(!("+ - / * .".includes(this.calculator.operacion.split('')[this.calculator.operacion.split('').length-1]))) {
			this.calculator.operacion += sign;

			this.display.value = this.calculator.operacion;
		}else{
			let auxArray = this.calculator.operacion.split('');
			auxArray[auxArray.length-1] = sign;
			this.calculator.operacion = auxArray.join('');

			this.display.value = this.calculator.operacion;
		}
	}

	//Bien, este método no es necesario aquí pero está perfecto 
	//como lo armaste.
	calculate(){
		this.display.value = this.calculator.calculate();
	}

}

customElements.define('x-calculator', CalculatorView);