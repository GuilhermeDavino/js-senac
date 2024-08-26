function getSizes(alt, lar, com) {
    let area = alt * lar;
    let volume = alt * lar * com;
    let size = [area, volume];
    return size;
}

console.log(getSizes(3, 3, 2));
console.log(getSizes(3, 3, 2)[0]);
console.log(getSizes(3, 3, 2)[1]);

function mult(x) {
    for(let i = 1; i<11; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
}



function add(x) {
    for(let i = 1; i<11; i++) {
        console.log(`${x} + ${i} = ${x + i}`);
    }
}

mult(5);

add(5);

function pular(x) {
    for(let i = 1; i < 11; i++) {
        if(x == i) {
            continue;
        }
        console.log(`the number is ${i}`);
    }
}

pular(3);


function soma(a) {
    let soma = 0;
    for(i of a) {
        soma += i;
    }
    return soma;
}

let nums = [1, 2, 3, 4];

soma(nums);

console.log(soma(nums));

function func(carros) {
    let carro = "";
    for(x of carros) {
        carro = x;
        console.log(carro);
    }
}

func(['bmw', 'mercedes', 'volvo', 'nissan']);

