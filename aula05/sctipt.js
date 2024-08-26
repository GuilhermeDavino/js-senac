const pessoa = {
    nome: "Luiz",
    idade: 20,
    profissao: "Desenvolvedor",
    saudacao: function() {
        console.log(`Olá meu nome é ${this.nome}`);
    }
}

let nomes = ["joel", "silvia", "tulio"];

nomes.push("renata");
nomes.shift();
console.log(nomes.length);
nomes = nomes.map(x => x.toUpperCase());
console.log(nomes);

const carro = {
    marca: "Ford",
    modelo: "Ford Ka",
    ano: 2024,
    print: function() {
        console.log(`${marca}},  ${modelo}`);
    }
}

carro.cor = "azuç";
delete carro.ano;

carro.print();
