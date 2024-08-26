
function calculadora(num1, num2, operacao) {
    // verificar qual operação escolheu e faz o cálculo
    switch(operacao) {
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        case "*":
            console.log(`${num1} x ${num2} = ${num1 * num2}`);
            break;
        default:
            console.log("Digite uma operação (+ - * /)");

    }
}

var num1 = prompt("numero1: ");
var num2 = prompt("numero2: ");
var op = prompt("Operação: ");

operacao(num1, num2, op);