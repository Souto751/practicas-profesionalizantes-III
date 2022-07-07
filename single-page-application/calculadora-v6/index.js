import CalculatorModel from './calculatorModel.js';
import CalculatorView from './calculatorView.js';

let calcModel = new CalculatorModel();
let calc = new CalculatorView(calcModel);

document.getElementById("showModal").addEventListener("click", () => {
    document.getElementById("modal-screen").classList.remove("hide");
    document.getElementById("modal-content").appendChild(calc);
});

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal-screen").classList.add("hide");
    document.getElementById("modal-content").remove();
});
