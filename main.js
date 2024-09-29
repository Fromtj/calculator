const main = document.querySelector(".main")
const con = document.querySelector(".con")
const close = document.querySelector(".close")

main.onclick = () => {
    con.style.display = "block"
    main.style.display = "none"
}
close.onclick = () => {
    con.style.display = "none"
    main.style.display = "block"
}

let input = document.getElementById('input');
let resultField = document.getElementById('result');

function appendToDisplay(value) {
    let currentInput = input.value;

    if (['+', '-', '*', '/'].includes(currentInput.slice(-1)) && ['+', '-', '*', '/'].includes(value)) {
        return;
    }
    input.value += value;
}

function clearr() {
    input.value = '';
    resultField.value = '';
}

function calculateResult() {
    try {
        resultField.value = eval(input.value);
    } catch (e) {
        resultField.value = 'Ошибка';
    }
}

function abs() {
    let curr = input.value;
    if (curr) {
        if (curr.startsWith('-')) {
            input.value = curr.slice(1);
        } else {
            input.value = '-' + curr; 
        }
    }
}

function del() {
    input.value = input.value.slice(0, -1);
}