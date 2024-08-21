let num1 = 1;

function problema1(num1) {
    if(num1 > 0) {
        console.log("Positivo");
    } else if(num1 == 0) {
        console.log("Nulo");
    } else if(num1 < 0) {
        console.log("Negativo");
    } else {
        console.log("Valor inválido. Digite um número");
    }
}

function problema2(num1) {
    if(num1 % 2 == 0) {
        console.log("É par");
    } else {
        console.log("É impar");
    }
}

let num2 = 30;
function problema3(num2) {
    switch(true) {
        case num2 < 14:
            console.log("Criança");
            break;
        case num2 < 18:
            console.log("Adolescente");
            break;
        case num2 < 30:
            console.log("Jovem");
            break;
        case num2 < 60:
            console.log("Adulto");
            break;
        case num2 < 130:
            console.log("Idoso");
            break;
        default:
            console.log("Idade inválida");
    }
}

let nota = 8;

function problema4(nota) {
    switch(true) {
        case nota <= 2:
            console.log("F");
            break;
        case nota <= 4:
            console.log("D");
            break;
        case nota <= 6:
            console.log("C");
            break;
        case num2 <= 8:
            console.log("B");
            break;
        case num2 <= 10:
            console.log("A");
            break;
        default:
            console.log("Nota inválida");
            break;
    }
}

let dia = 5;

function problema5(dia) {
    switch(true) {
        case nota <= 2:
            console.log("F");
            break;
        case nota <= 4:
            console.log("D");
            break;
        case nota <= 6:
            console.log("C");
            break;
        case num2 <= 8:
            console.log("B");
            break;
        case num2 <= 10:
            console.log("A");
            break;
        default:
            console.log("Nota inválida");
            break;
    }
}