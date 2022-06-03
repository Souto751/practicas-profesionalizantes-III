const app = document.getElementById("app");

// Table
const table = document.createElement("table");


// Input row
const inputRow = document.createElement("tr");
const inputColumn = document.createElement("td");
const inputEl = document.createElement("input");

inputColumn.setAttribute("class", "column");
inputColumn.setAttribute("colspan", 4);
inputEl.setAttribute("class", "div-input");
inputEl.setAttribute("id", "div-input");
inputEl.setAttribute("disabled", "true");
inputEl.setAttribute("value", "0");

inputColumn.appendChild(inputEl);
inputRow.appendChild(inputColumn);
table.appendChild(inputRow);

// Buttons rows
// first row
const firstRow = document.createElement("tr");
const fir_firstColumn = document.createElement("td");
const fir_secondColumn = document.createElement("td");
const fir_thirdColumn = document.createElement("td");
const fir_fourthColumn = document.createElement("td");

// first button
const fir_fic_div = document.createElement("div");
const fir_fic_btn = document.createElement("button");

// second button
const fir_sc_div = document.createElement("div");
const fir_sc_btn = document.createElement("button");

// third button
const fir_tc_div = document.createElement("div");
const fir_tc_btn = document.createElement("button");

// fourth button
const fir_foc_div = document.createElement("div");
const fir_foc_btn = document.createElement("button");

// attributes
fir_firstColumn.setAttribute("class", "column");
fir_secondColumn.setAttribute("class", "column");
fir_thirdColumn.setAttribute("class", "column");
fir_fourthColumn.setAttribute("class", "column");

fir_fic_div.setAttribute("class", "div-btn div-btn-number");
fir_sc_div.setAttribute("class", "div-btn div-btn-number");
fir_tc_div.setAttribute("class", "div-btn div-btn-number");
fir_foc_div.setAttribute("class", "div-btn div-btn-sign");

fir_fic_btn.setAttribute("class", "btn btn-number");
fir_fic_btn.setAttribute("id", "btn-7");
fir_sc_btn.setAttribute("class", "btn btn-number");
fir_sc_btn.setAttribute("id", "btn-8");
fir_tc_btn.setAttribute("class", "btn btn-number");
fir_tc_btn.setAttribute("id", "btn-9");
fir_foc_btn.setAttribute("class", "btn btn-sign");
fir_foc_btn.setAttribute("id", "btn-+");

fir_fic_btn.innerHTML = "7";
fir_sc_btn.innerHTML = "8";
fir_tc_btn.innerHTML = "9";
fir_foc_btn.innerHTML = "+";

// append
fir_fic_div.appendChild(fir_fic_btn);
fir_sc_div.appendChild(fir_sc_btn);
fir_tc_div.appendChild(fir_tc_btn);
fir_foc_div.appendChild(fir_foc_btn);

fir_firstColumn.appendChild(fir_fic_div);
fir_secondColumn.appendChild(fir_sc_div);
fir_thirdColumn.appendChild(fir_tc_div);
fir_fourthColumn.appendChild(fir_foc_div);

firstRow.appendChild(fir_firstColumn);
firstRow.appendChild(fir_secondColumn);
firstRow.appendChild(fir_thirdColumn);
firstRow.appendChild(fir_fourthColumn);

table.appendChild(firstRow);


// second row
const secondRow = document.createElement("tr");
const sr_firstColumn = document.createElement("td");
const sr_secondColumn = document.createElement("td");
const sr_thirdColumn = document.createElement("td");
const sr_fourthColumn = document.createElement("td");

// first button
const sr_fic_div = document.createElement("div");
const sr_fic_btn = document.createElement("button");

// second button
const sr_sc_div = document.createElement("div");
const sr_sc_btn = document.createElement("button");

// third button
const sr_tc_div = document.createElement("div");
const sr_tc_btn = document.createElement("button");

// fourth button
const sr_foc_div = document.createElement("div");
const sr_foc_btn = document.createElement("button");

// attributes
sr_firstColumn.setAttribute("class", "column");
sr_secondColumn.setAttribute("class", "column");
sr_thirdColumn.setAttribute("class", "column");
sr_fourthColumn.setAttribute("class", "column");

sr_fic_div.setAttribute("class", "div-btn div-btn-number");
sr_sc_div.setAttribute("class", "div-btn div-btn-number");
sr_tc_div.setAttribute("class", "div-btn div-btn-number");
sr_foc_div.setAttribute("class", "div-btn div-btn-sign");

sr_fic_btn.setAttribute("class", "btn btn-number");
sr_fic_btn.setAttribute("id", "btn-4");
sr_sc_btn.setAttribute("class", "btn btn-number");
sr_sc_btn.setAttribute("id", "btn-5");
sr_tc_btn.setAttribute("class", "btn btn-number");
sr_tc_btn.setAttribute("id", "btn-6");
sr_foc_btn.setAttribute("class", "btn btn-sign");
sr_foc_btn.setAttribute("id", "btn--");

sr_fic_btn.innerHTML = "4";
sr_sc_btn.innerHTML = "5";
sr_tc_btn.innerHTML = "6";
sr_foc_btn.innerHTML = "-";

// append
sr_fic_div.appendChild(sr_fic_btn);
sr_sc_div.appendChild(sr_sc_btn);
sr_tc_div.appendChild(sr_tc_btn);
sr_foc_div.appendChild(sr_foc_btn);

sr_firstColumn.appendChild(sr_fic_div);
sr_secondColumn.appendChild(sr_sc_div);
sr_thirdColumn.appendChild(sr_tc_div);
sr_fourthColumn.appendChild(sr_foc_div);

secondRow.appendChild(sr_firstColumn);
secondRow.appendChild(sr_secondColumn);
secondRow.appendChild(sr_thirdColumn);
secondRow.appendChild(sr_fourthColumn);

table.appendChild(secondRow);

// third row
const thirdRow = document.createElement("tr");
const tr_firstColumn = document.createElement("td");
const tr_secondColumn = document.createElement("td");
const tr_thirdColumn = document.createElement("td");
const tr_fourthColumn = document.createElement("td");

// first button
const tr_fic_div = document.createElement("div");
const tr_fic_btn = document.createElement("button");

// second button
const tr_sc_div = document.createElement("div");
const tr_sc_btn = document.createElement("button");

// third button
const tr_tc_div = document.createElement("div");
const tr_tc_btn = document.createElement("button");

// fourth button
const tr_foc_div = document.createElement("div");
const tr_foc_btn = document.createElement("button");

// attributes
tr_firstColumn.setAttribute("class", "column");
tr_secondColumn.setAttribute("class", "column");
tr_thirdColumn.setAttribute("class", "column");
tr_fourthColumn.setAttribute("class", "column");

tr_fic_div.setAttribute("class", "div-btn div-btn-number");
tr_fic_div.setAttribute("id", "btn-1");
tr_sc_div.setAttribute("class", "div-btn div-btn-number");
tr_sc_div.setAttribute("id", "btn-2");
tr_tc_div.setAttribute("class", "div-btn div-btn-number");
tr_tc_div.setAttribute("id", "btn-3");
tr_foc_div.setAttribute("class", "div-btn div-btn-sign");
tr_foc_div.setAttribute("id", "btn-*");


tr_fic_btn.setAttribute("class", "btn btn-number");
tr_sc_btn.setAttribute("class", "btn btn-number");
tr_tc_btn.setAttribute("class", "btn btn-number");
tr_foc_btn.setAttribute("class", "btn btn-sign");

tr_fic_btn.innerHTML = "1";
tr_sc_btn.innerHTML = "2";
tr_tc_btn.innerHTML = "3";
tr_foc_btn.innerHTML = "*";

// append
tr_fic_div.appendChild(tr_fic_btn);
tr_sc_div.appendChild(tr_sc_btn);
tr_tc_div.appendChild(tr_tc_btn);
tr_foc_div.appendChild(tr_foc_btn);

tr_firstColumn.appendChild(tr_fic_div);
tr_secondColumn.appendChild(tr_sc_div);
tr_thirdColumn.appendChild(tr_tc_div);
tr_fourthColumn.appendChild(tr_foc_div);

thirdRow.appendChild(tr_firstColumn);
thirdRow.appendChild(tr_secondColumn);
thirdRow.appendChild(tr_thirdColumn);
thirdRow.appendChild(tr_fourthColumn);

table.appendChild(thirdRow);

// fourth row
const fourthRow = document.createElement("tr");
const for_firstColumn = document.createElement("td");
const for_secondColumn = document.createElement("td");
const for_thirdColumn = document.createElement("td");
const for_fourthColumn = document.createElement("td");

// first button
const for_fic_div = document.createElement("div");
const for_fic_btn = document.createElement("button");

// second button
const for_sc_div = document.createElement("div");
const for_sc_btn = document.createElement("button");

// third button
const for_tc_div = document.createElement("div");
const for_tc_btn = document.createElement("button");

// fourth button
const for_foc_div = document.createElement("div");
const for_foc_btn = document.createElement("button");

// attributes
for_firstColumn.setAttribute("class", "column");
for_secondColumn.setAttribute("class", "column");
for_thirdColumn.setAttribute("class", "column");
for_fourthColumn.setAttribute("class", "column");

for_fic_div.setAttribute("class", "div-btn div-btn-number");
for_sc_div.setAttribute("class", "div-btn div-btn-number");
for_tc_div.setAttribute("class", "div-btn div-btn-equal");
for_foc_div.setAttribute("class", "div-btn div-btn-sign");

for_fic_btn.setAttribute("class", "btn btn-number");
for_fic_btn.setAttribute("id", "btn-0");
for_sc_btn.setAttribute("class", "btn btn-number");
for_sc_btn.setAttribute("id", "btn-.");
for_tc_btn.setAttribute("class", "btn btn-equal");
for_tc_btn.setAttribute("id", "btn-=");
for_foc_btn.setAttribute("class", "btn btn-sign");
for_foc_btn.setAttribute("id", "btn-/");

for_fic_btn.innerHTML = "0";
for_sc_btn.innerHTML = ".";
for_tc_btn.innerHTML = "=";
for_foc_btn.innerHTML = "/";

// append
for_fic_div.appendChild(for_fic_btn);
for_sc_div.appendChild(for_sc_btn);
for_tc_div.appendChild(for_tc_btn);
for_foc_div.appendChild(for_foc_btn);

for_firstColumn.appendChild(for_fic_div);
for_secondColumn.appendChild(for_sc_div);
for_thirdColumn.appendChild(for_tc_div);
for_fourthColumn.appendChild(for_foc_div);

fourthRow.appendChild(for_firstColumn);
fourthRow.appendChild(for_secondColumn);
fourthRow.appendChild(for_thirdColumn);
fourthRow.appendChild(for_fourthColumn);

table.appendChild(fourthRow);


// delete row
const deleteRow = document.createElement("tr");
const deleteColumn = document.createElement("td");

// first button
const delete_div = document.createElement("div");
const delete_btn = document.createElement("button");

// attributes
deleteColumn.setAttribute("colspan", 4);
deleteColumn.setAttribute("class", "column");

delete_div.setAttribute("class", "div-btn div-btn-delete");

delete_btn.setAttribute("class", "btn btn-delete");
delete_btn.setAttribute("id", "btn-delete");


delete_btn.innerHTML = "Borrar";

// append
delete_div.appendChild(delete_btn);

deleteColumn.appendChild(delete_div);

deleteRow.appendChild(deleteColumn);

table.appendChild(deleteRow);


// append table to app
app.appendChild(table);


// calculator operations
let first_number = "";
let second_number = "";
let total;
let sign = "";
let added_sign = false;
let input = document.getElementById('div-input');

const modifyNumber = (value) => {
    if(!added_sign){
        first_number += value;
        input.value = first_number;
        
    }else{
        second_number += value;
        input.value = second_number;
    }
}

const clickSign = (s) => {
    if(added_sign == true){
        doOperation();
    }
    added_sign = true;
    sign = s;
    input.value = sign;
}

const doOperation = () => {
    if(sign == "-"){
        total = parseFloat(first_number) - parseFloat(second_number);
    } else if(sign == "+"){
        total = parseFloat(first_number) + parseFloat(second_number);
    } else if(sign == "*"){
        total = (parseFloat(first_number) * parseFloat(second_number)).toFixed(2);
    } else if(sign == "/"){
        total = parseFloat(first_number) / parseFloat(second_number);
    }
    added_sign = false;
    input.value = total;
    first_number = "";
    second_number = "";
    sign = "";
}

const deleteOperation = () => {
    first_number = "";
    second_number = "";
    sign = "";
    total = "";
    added_sign = false;
    input.value = "0";

}

// event listener
document.getElementById("btn-1").addEventListener('click', () => modifyNumber(1));
document.getElementById("btn-2").addEventListener('click', () => modifyNumber(2));
document.getElementById("btn-3").addEventListener('click', () => modifyNumber(3));
document.getElementById("btn-4").addEventListener('click', () => modifyNumber(4));
document.getElementById("btn-5").addEventListener('click', () => modifyNumber(5));
document.getElementById("btn-6").addEventListener('click', () => modifyNumber(6));
document.getElementById("btn-7").addEventListener('click', () => modifyNumber(7));
document.getElementById("btn-8").addEventListener('click', () => modifyNumber(8));
document.getElementById("btn-9").addEventListener('click', () => modifyNumber(9));
document.getElementById("btn-.").addEventListener('click', () => modifyNumber('.'));
document.getElementById("btn-+").addEventListener('click', () => clickSign('+'));
document.getElementById("btn--").addEventListener('click', () => clickSign('-'));
document.getElementById("btn-*").addEventListener('click', () => clickSign('*'));
document.getElementById("btn-/").addEventListener('click', () => clickSign('/'));
document.getElementById("btn-=").addEventListener('click', () => doOperation());
document.getElementById("btn-delete").addEventListener('click', () => deleteOperation());