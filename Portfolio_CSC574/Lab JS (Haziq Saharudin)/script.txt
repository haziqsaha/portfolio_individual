function addBy() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}

function substractBy() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = num1 / num2;
}