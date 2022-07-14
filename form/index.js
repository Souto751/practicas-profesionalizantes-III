import FormModel from './formModel.js';
import FormView from './formView.js';

let formModel = new FormModel();
let form = new FormView(formModel);

let modalScreen = document.createElement("div");
modalScreen.classList.add("modal-screen");
modalScreen.classList.add("hide");
modalScreen.id = "modal-screen";

let modal = document.createElement("div");
modal.classList.add("modal-body");
modal.id = "modal";

let closeBtn = document.createElement("button");
closeBtn.id = "close-modal";
closeBtn.innerText = "x";

let modalContent = document.createElement("div");
modalContent.id = "modal-content";


modalContent.appendChild(form);

modal.appendChild(closeBtn);
modal.appendChild(modalContent);

modalScreen.appendChild(modal);

let openModal = document.createElement("button");
openModal.id = "showModal";
openModal.classList.add("btn-primary");
openModal.innerText = "Open";

openModal.addEventListener("click", () => {
    modalScreen.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
    modalScreen.classList.add("hide");
});

document.getElementById("body").appendChild(openModal);
document.getElementById("body").appendChild(modalScreen);