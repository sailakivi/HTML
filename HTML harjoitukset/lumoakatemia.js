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

let kauppalista[];

kauppalista.push("banaani");
kauppalista.push("maito");
kauppalista.push("kinkku");

console.log(kauppalista);
for (let i = 0; < kauppalista.lenght; i++) {
    console.log(kauppalista[i]);
}



