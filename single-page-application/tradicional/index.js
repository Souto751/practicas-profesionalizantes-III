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
        added_sign == true ? total = parseFloat(total) - parseFloat(second_number) : total = parseFloat(first_number) - parseFloat(second_number);
    } else if(sign == "+"){
        added_sign == true ? total = parseFloat(total) + parseFloat(second_number) : total = parseFloat(first_number) + parseFloat(second_number);
    } else if(sign == "*"){
        added_sign == true ? total = parseFloat(total) * parseFloat(second_number) : total = (parseFloat(first_number) * parseFloat(second_number)).toFixed(2);
    } else if(sign == "/"){
        added_sign == true ? total = parseFloat(total) / parseFloat(second_number) : total = parseFloat(first_number) / parseFloat(second_number);
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