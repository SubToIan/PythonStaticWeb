function add() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    console.log(num1, num2)
    let sum = num1 + num2
    document.getElementById("result").innerText = "Result: " + sum;
}

function multiply() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sum = num1 * num2
    document.getElementById("result").innerText = "Result: " + sum;
}

function subtract() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sum = num1 - num2
    document.getElementById("result").innerText = "Result: " + sum;
}

function divide() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sum = num1 / num2
    document.getElementById("result").innerText = "Result: " + sum;
}