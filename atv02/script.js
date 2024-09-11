class Department {
    #id
    #nome
    #empregados = []

    constructor(id, nome, empregados) {
        this.#id = id;
        this.#nome = nome;
        this.#empregados = empregados;
    }

    addEmpregado(empregado) {
        this.#empregados.push(empregado);
    }

    removerEmpregado(empregado) {
        for(emp of this.#empregados) {
            if(emp == empregado) {
                emp = "funcionário removido";
            }
        }
    }

    listaEmpregados() {
        console.log("Funcionários do departamento " + this.#nome + ":");
       for(let x of this.#empregados) {
            console.log(x.getNome());
       }
    }

    getId() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    getNome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    getEmpregados() {
        return this.#empregados;
    }
}

class Funcionario {
    #id
    #nome
    #empresa
    #tempoDeEmpresa
    #salario
    #sexo
    #cargo

    constructor(id, nome, empresa, tempoDeEmpresa, salario, sexo, cargo) {
        this.#id = id;
        this.#nome = nome;
        this.#empresa = empresa;
        this.#tempoDeEmpresa =  tempoDeEmpresa;
        this.#salario = salario;
        this.#sexo = sexo;
        this.#cargo = cargo;
    }

    apresentacao() {
        console.log(`Olá sou o funcionário ${this.#nome} e trabalho na ${this.#empresa} a ${this.#tempoDeEmpresa} anos, recebo ${this.#salario}`);
    }

    nome() {
        console.log(this.#nome);
    }

    cargo() {
        console.log(this.#cargo);
    }

    salario() { 
        console.log(this.#salario);
    }

    sexo() {
        console.log(this.#sexo);
    }

    getId() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    getNome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    getEmpresa() {
        return this.#empresa;
    }

    set empresa(empresa) {
        this.#empresa = empresa
    }

    getTempoDeEmpresa() {
        return this.#tempoDeEmpresa;
    }

    set tempoDeEmpresa(tempoDeEmpresa) {
        this.#tempoDeEmpresa = tempoDeEmpresa;
    }

    getSalario() {
        return this.#salario;
    }

    set salario(salario) {
        this.#salario = salario;
    }

    getSexo() {
        return this.#sexo;
    }

    set sexo(sexo) {
        this.#sexo = sexo;
    }

    getCargo() {
        return this.#cargo;
    }

    set cargo(cargo) {
        this.#cargo = cargo;
    }
}

class Engenheiro extends Funcionario {
   
    constructor(id, nome, empresa, tempoDeEmpresa, salario, sexo, cargo) {
        super(id, nome, empresa, tempoDeEmpresa, salario, sexo, cargo);
    }
    
    apresentacao() {
        console.log(`Olá sou o Engenheiro ${this.getNome()} e trabalho na ${this.getEmpresa()} a ${this.getTempoDeEmpresa()} anos, recebo ${this.getSalario()}`);
    }
}

class Designer extends Funcionario {
   
    constructor(id, nome, empresa, tempoDeEmpresa, salario, sexo, cargo) {
        super(id, nome, empresa, tempoDeEmpresa, salario, sexo, cargo);
    }
    
    apresentacao() {
        console.log(`Olá sou o Designer ${this.getNome()} e trabalho na ${this.getEmpresa()} a ${this.getTempoDeEmpresa()} anos, recebo ${this.getSalario()}`);
    }
}

const eng = new Engenheiro(1, "Sidney", "Claro", 12, 3000, "Masc", "Eng. Comunicação");

const des = new Designer(2, "Lucas", "Claro", 4, 2500, "Masc", "Chefe");

const dep = new Department(1, "Tecnologia", []);

dep.addEmpregado(eng);
dep.addEmpregado(des);

dep.listaEmpregados();

eng.apresentacao();