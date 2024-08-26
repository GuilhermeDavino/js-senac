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