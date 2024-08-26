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