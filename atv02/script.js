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

let num = prompt("Número: ");

primo(num);