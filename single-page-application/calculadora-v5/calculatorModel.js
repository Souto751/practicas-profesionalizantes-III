class CalculatorModel{
	constructor(){

	}

	calculate(operation){
		return fetch('./calculator.php', {method: 'POST', body: JSON.stringify(operation)}).then(res => res.json());
	}
}

export default CalculatorModel;