class CalculatorModel{
	constructor(){

	}

	calculate(operation){
		return eval(operation) + "";
	}
}

export default CalculatorModel;