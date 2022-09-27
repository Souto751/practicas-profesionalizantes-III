import CalculatorModel from './calculatorModel.js';
import CalculatorView from './calculatorView.js';

let calcModel = new CalculatorModel();
let calc = new CalculatorView(calcModel);
document.body.appendChild(calc);