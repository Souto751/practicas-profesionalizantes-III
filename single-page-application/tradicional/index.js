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
}

const deleteOperation = () => {
    first_number = "";
    second_number = "";
    sign = "";
    total = "";
    added_sign = false;
    input.value = "0";

}