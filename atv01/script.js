
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

function advinhar(num) {
    // floor aredonda para inteiro e random retorna valor aleatorio de 1 a 100;
    let sorteado =  Math.floor(Math.random() * (100 - 1 + 1) + 1);
    // verificar se acertou número sorteado 
    if(num == sorteado) {
        console.log("Você acertou! número sorteado: " + sorteado);
    } else {
        console.log("Você errou! número sorteado: " + sorteado);
    }
}

let num = prompt("Advinhe o número");

advinhar(num);


function nota(nota1, nota2, nota3, nota4) {
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    // verificar qual é a condição dessa nota
    if(media >=7) {
        console.log("Aprovado");
    } else if(media >= 5 && meida < 7) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

let nota1 = prompt("Nota 1: ");
let nota2 = prompt("Nota 2: ");
let nota3 = prompt("Nota 3: ");
let nota4 = prompt("Nota 4: ");

nota(nota1, nota2, nota3, nota4);

function especialCaractere(str) {
    //quantidade de vezes que aparece caractere especial
    let vezes = 0;
    // array de caracteres especias
    let caracteres = ["@", "!", "#", "$", "%", "¨", "&", "*", "(", ")"];
    // percorre string
    for(x of str) {
        //verficar se o char está no array de caracteres especias
        // se tiver incrementa no número de vezes
        if(caracteres.includes(x)) {
            vezes++;
        }
    }
    console.log("Número de caracteres especias: " + vezes);
}

let str =  String.toString(prompt("Escreva: "));

especialCaractere(str);

function primo(num) {
    // quantidade de divisores
    let divisores = 0;
    for(let i = 1; i <= num; i++) {
        // verificar se um certo número é divisor do número dado pelo usuário
        if(num % i == 0) {
            divisores++;
        }
        // verificar se a quantidade de divisores e maior que 2
        if(divisores > 2) {
            break;
        }
    }
    // se o número for divisivel por um e por ele mesmo é primo
    if(divisores > 2) {
        console.log(`${num} não é primo`);
    } else {
        console.log(`${num} é primo`);
    }
}

let num1 = prompt("Número: ");

primo(num);