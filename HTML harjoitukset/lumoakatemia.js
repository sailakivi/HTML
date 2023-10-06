function heiMaailma() {
    console.log("Hei maailma!")
}
heiMaailma();

function summa(a , b) {
    console.log(a + b);
}
summa(2 , 3);

function erotus(a , b) {
    console.log(a - b);
}
erotus(7 , 3);

function tulo(a , b) {
    console.log(a * b);
} 
tulo(10 , 2);

function osamaara(a , b) {
    console.log(a / b);
}
osamaara(10, 2);

let celsius, fahrenheit;
celsius = 15;
fahrenheit = celsius * 9 / 5 + 32;
console.log(fahrenheit);

let fah, cel;
fah = 15;
cel = (fah - 32) * (5/9);
console.log(cel);

let mile, km;
mile = 10;
km = 1.61 * mile;
console.log(km);

let kilometri, maili;
kilometri = 1 ;
maili = kilometri / 1.61;
console.log(maili);

let cm, inch;
inch = 10;
cm = inch * 2.54;
console.log(cm);

let sentit, tuumat;
sentit = 10;
tuumat = sentit / 2.54;
console.log(tuumat);

let yrd, m;
yrd = 10;
m = 0.91 * yrd;
console.log(m);

let jaardi, metri;
metri = 100;
jaardi = metri / 0.91;
console.log(jaardi);

function suurempi(a, b) {
    if (a > b) {
        console.log("Suurempi luku on" + a);
    }
    else if (b > a) {
        console.log("Suurempi luku on" + b);
    }
    else {
        console.log("Luvut ovat yhtäsuuret");
    }
}

function suurinKolmesta(a, b, c) {
    if (a > b && a > c) {
        console.log("Suurin luku on" + a);
    }
    else if (b > c) {
        console.log("Suurin luku on" + b);
    }
    else {
        console.log("Suurin luku on" + c);
    }
}

function etuMerkki(luku) {
    if (luku > 0) {
        console.log("Luku on negatiivinen");
    }
    else if (luku == 0) {
        console.log("Luku on nolla");
    }
    else {
        console.log("Luku on positiivinen");
    }
}

function jaollinen(luku) {
    if (luku % 5 == 0 && luku % 11 == 0) {
        console.log("Luku on jaollinen sekä 5 että 11");
    }
    else if (luku % 5 == 0 || luku % 11 == 0) {
        console.log("Luku on jaollinen 5 tai 11");
    }
    else {
        console.log("Luku ei ole jaollinen 5 tai 11");
    }
}

function karkausvuosi(vuosi) {
    if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else if (vuosi % 400 == 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}

let kauppalista = [];

kauppalista.push("banaani");
kauppalista.push("maito");
kauppalista.push("kinkku");

console.log(kauppalista);
for (let i = 0; i < kauppalista.lenght; i++) {
    console.log(kauppalista[i]);
}

const nimet = ["Esko", "Mikko", "Sanna", "Aino", "Marja"]
console.log(nimet);

const taulukko = [1, 2, 3, 4, 5];
const pituus = taulukko.lengh;
console.log(pituus);

const names = ["Esko", "Mikko", "Sanna", "Aino", "Marja"];
names.push("Petri");
console.log(names);

const taulukko1 = [1, 2, 3];
const taulukko2 = [4, 5, 6];
const yhdistettyTaulukko = taulukko1.concat(taulukko2);
console.log(yhdistettyTaulukko);

const numerot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parillisetNumerot = numerot.filter(numero => numero % 2 === 0);
console.log(parillisetNumerot);

const numbers = [5, 2, 9, 1, 5, 8, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

const numb = [1, 2, 3, 4, 5];
const kaannettyTaulukko = numb.reverse();
console.log(kaannettyTaulukko);
