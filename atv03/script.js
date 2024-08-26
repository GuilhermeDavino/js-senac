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