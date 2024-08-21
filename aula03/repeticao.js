for(let i = 0; i < 5; i++) {
    console.log("número " + i);
}

for(let i = 10; i < 21; i++) {
    console.log("número " + i);
}

let i = 10;
while(i < 21) {
    console.log("numero " + i);
    i++;
}

i = 0;

do {
    let text = "the number is " + i;
     console.log(text);
     i++;
} while(i < 0);

for(i = 0; i < 0; i++) {
    let text = "the number is " + i;
     console.log(text);
}

i=0;

while(i < 0) {
    let text = "the number is " + i;
     console.log(text);
     i++;
}

for(let i = 0; i < 11; i++) {
    console.log("3 x " +  i + " = " + 3*i);
}

for(let i = 0; i < 11; i++) {
    console.log("3 + " +  i + " = " + (3 + i));
}
for(let i = 10; i<21; i++) {
    if(i == 15) {
        break;
    }

    console.log("The number is " + i);
}

for(let i = 0; i<11; i++) {
    if(i == 3) {
        continue;
    }

    console.log("The number is " + i);
}

for(let i = 0; i<16; i++) {
    if(i % 2 !== 0) {
        console.log("É impar  " + i);
    }

    
}