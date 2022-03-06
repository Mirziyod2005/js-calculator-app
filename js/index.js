let input = document.getElementById("screen");
let selectedAction = "";
let selectedActionOrginal = "";
let numberOne = 0;

function addNumber(number) {

    if (input.value.indexOf(".") !== -1 && number === '.' || input.value.length === 15) {
        // alert("bosma nuqtani!!!")
    } else {
        if (input.value === "0" && number !== '.' || selectedAction.length > 0) {
            input.value = number;
            selectedAction = "";
        } else {
            input.value += number;
        }
    }
}



function action(amal) {
    selectedAction = amal;
    selectedActionOrginal = amal;
    numberOne = input.value;
}

function equal() {
    let numberTwo = input.value;
    let result = 0;
    if (selectedActionOrginal === "add") {
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (selectedActionOrginal === "subtract") {
        result = numberOne - numberTwo;
    } else if (selectedActionOrginal === "multply") {
        result = numberOne * numberTwo;
    } else if (selectedActionOrginal === "divays") {
        result = numberOne / numberTwo;
    }

    input.value = result

}

function delet() {
    result = input.value.slice(0, -1);
    input.value = result;
    if (input.value.length === 0) {
        input.value = "0"
    }
}

function kvadrat() {

    result = input.value * input.value;
    input.value = result;

}

function ildiz() {
    result = Math.sqrt(input.value);
    input.value = result;
}

function plusMinus() {
    result = input.value * -1;
    input.value = result;
}

function clerScreen() {
    input.value = 0;
    selectedActionOrginal = "";
    selectedAction = "";
    numberOne = 0;
}

document.addEventListener("keydown", function() {
    if (event.keyCode === 97 || event.keyCode === 49) {
        addNumber('1');
    } else if (event.keyCode === 98 || event.keyCode === 50) {
        addNumber('2');
    } else if (event.keyCode === 99 || event.keyCode === 51) {
        addNumber('3');
    } else if (event.keyCode === 100 || event.keyCode === 52) {
        addNumber('4');
    } else if (event.keyCode === 101 || event.keyCode === 53) {
        addNumber('5');
    } else if (event.keyCode === 102 || event.keyCode === 54) {
        addNumber('6');
    } else if (event.keyCode === 103 || event.keyCode === 55) {
        addNumber('7');
    } else if (event.keyCode === 104 || event.keyCode === 56) {
        addNumber('8');
    } else if (event.keyCode === 105 || event.keyCode === 57) {
        addNumber('9');
    } else if (event.keyCode === 96 || event.keyCode === 48) {
        addNumber('0');
    } else if (event.keyCode === 110) {
        addNumber('.');
    } else if (event.keyCode === 107) {
        action("add");
    } else if (event.keyCode === 109) {
        action("subtract");
    } else if (event.keyCode === 106) {
        action("multply");
    } else if (event.keyCode === 111) {
        action("divays");
    } else if (event.keyCode === 13) {
        equal();
    } else if (event.keyCode === 27) {
        clerScreen();
    } else if (event.keyCode === 8) {
        delet();
    }
});