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
        console.log("Luvut ovat yht‰suuret");
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
        console.log("Luku on jaollinen sek‰ 5 ett‰ 11");
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

function parillinenPariton(luku) {
    if (luku % 2 == =) {
        console.log("Luku on parillinen");
    }
    else {
        console.log("Luku on pariton");
    }
}

function kirjain(merkki) {
    if (merkki.lenght == 1 %% merkki.match(/[a-ˆ,A-÷]/i)) {
        console.log("Annettu merkki on kirjain");
    }
    else {
        console.log("Annettu merkki ei ole kirjain");
    }
}

funvtion konsonanttiVokaali(kirjain) {
    if (kirjain.match(/[bcdfghjkmnpqrstvwxz]/i)) {
        console.log("Annettu kirjain on konsonantti");
    }
        else if (kirjain.match(/[aeiouy‰ˆ]/i)) {
            console.log("Annettu kirjain on vokaali");
        }
    }
    else {
        console.log("Annettu kirjain ei ole kumpikaan");
    }
}

function kiNuEm(merkki {
    let kirjain = /[a-ˆ,A-÷]/i;
    let numero = /[0-9]/i;
    if (merkki.lenght == 1 && merkki.match(kirjain));
{
    console.log("Merkki on kirjain");
}
else if (merkki.match(numero));
{
    console.log("Merkki on numero");
}
else 
{
    console.log("Merkki on erikoismerkki");
}
}

function isoPieni(merkki) {
    if (merkki.match(/[a-ˆA-÷]/i) && merkki == merkki.toUpperCase()) {
        console.log("Merkki on iso kirjain");
    }
    else if (merkki.match(/[a-ˆA-÷]/i) && merkki == merkki.toLowerCase()) {
        console.log("Merkki on pieni kirjain");
    }
    else {
        console.log("Merkki ei ole kirjain");
    }
}

function voittoTappio(myynti, osto) {
    myynti = parseInt(myynti);
    osto = parseInt(osto);
    if ((myynti - osto) > 0) {
        console.log("Sait voittoa: " + (myynti - osto));
    }
    else {
        console.log("Tappiosi oli " + (myynti - osto));
    }
}

function koePisteet(Ma, KeFy, Ai, Ru, En) {
    var taulukko = [["Matematiikka", Ma], ["KemiaFysiikka", KeFy], ["Aidinkieli", Ai], ["Ruotsi", Ru], ["Englanti", En]];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i][1] >= 90) {
            console.log(taulukko[i][0] + ": K5");
        }
        else if (taulukko[i][1] >= 80) {
            console.log(taulukko[i][0] + ": H4");
        }
        else if (taulukko[i][1] >= 70) {
            console.log(taulukko[i][0] + ": H3");
        }
        else if (taulukko[i][1] >= 60) {
            console.log(taulukko[i][0] + ": T2");
        }
        else if (taulukko[i][1] >= 50) {
            console.log(taulukko[i][0] + ": T1");
        }
        else {
            console.log(taulukko[i][0] + ": Hyl‰tty");
        }
    }
}

function viikonpaiva(nro) {
    nro = parseInt(nro);
    console.log(nro);
    switch (nro) {
        case 1:
            console.log("Maanantai");
            break;
        case 2:
            console.log("Tiistai");
            break;
        case 3:
            console.log("Keskiviikko");
            break;
        case 4:
            console.log("Torstai");
            break;
        case 5:
            console.log("Perjantai");
            break;
        case 6:
            console.log("Lauantai");
            break;
        case 7:
            console.log("Sunnuntai");
            break;
        default:
            console.log("Anna numero v‰lill‰ 1-7");
            break;
    }
}

function tarkastaKokonaisluvut(a, b) {
    try {
        
        const lukuA = parseInt(a);
        const lukuB = parseInt(b);

        if (isNaN(lukuA) || isNaN(lukuB)) {
            throw new Error("Et antanut kokonaislukuja");
        }

        if (lukuA == lukuB) {
            return "Antamasi luvut ovat samat.";
        } else {
            return "Antamasi luvut eiv‰t ole samat.";
        }
    } catch (error) {
        return error.message;
    }
}

function aanestys(ika) {
    ika = parseInt(ika);
    if (ika >= 18) {
        console.log("Voit ‰‰nest‰‰");
    }

    else if (isNaN(ika)) {
        console.log("Et antanut numeroa");
    }

    else {
        console.log("Et voi ‰‰nest‰‰");
    }
}

function kuukaudenPaivat(kknro) {
    kknro = parseInt(kknro);
    switch (kknro) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:

            console.log("Kuukaudessa on 31 p‰iv‰‰");
            break;

        case 4:
        case 6:
        case 9:
        case 11:

            console.log("Kuukaudessa on 30 p‰iv‰‰");
            break;

        case 2:
            console.log("Kuukaudessa on 27/28 p‰iv‰‰");
    }
}

function seteleiksi(amount) {
    var note1 = 0, note2 = 0, note5 = 0, note10 = 0, note20 = 0, note50 = 0, note100 = 0, note500 = 0;
    if (amount >= 500) {
        note500 = Math.floor(amount / 500);
        amount -= note500 * 500;
    }
    if (amount >= 100) {
        note100 = Math.floor(amount / 100);
        amount -= note100 * 100;
    }
    if (amount >= 50) {
        note50 = Math.floor(amount / 50);
        amount -= note50 * 50;
    }
    if (amount >= 20) {
        note20 = Math.floor(amount / 20);
        amount -= note20 * 20;
    }
    if (amount >= 10) {
        note10 = Math.floor(amount / 10);
        amount -= note10 * 10;
    }
    if (amount >= 5) {
        note5 = Math.floor(amount / 5);
        amount -= note5 * 5;
    }
    if (amount >= 2) {
        note2 = Math.floor(amount / 2);
        amount -= note2 * 2;
    }
    if (amount >= 1) {
        note1 = amount;
    }
    console.log("Total number of notes = \n");
    console.log("500 = " + note500);
    console.log("100 = " + note100);
    console.log("50 = " + note50);
    console.log("20 = " + note20);
    console.log("10 = " + note10);
    console.log("5 = " + note5);
    console.log("2 = " + note2);
    console.log("1 = " + note1);
}

function kolmio(a, b, c) {
    if (a + b + c == 180) {
        console.log("Kolmio on mahdollinen");
    }
    else {
        console.log("Kolmio ei ole mahdollinen");
    }
}



function viikonpaiva(nro) {
    nro = parseInt(nro);
    console.log(nro);
    switch (nro) {
        case 1:
            console.log("Maanantai");
            break;
        case 2:
            console.log("Tiistai");
            break;
        case 3:
            console.log("Keskiviikko");
            break;
        case 4:
            console.log("Torstai");
            break;
        case 5:
            console.log("Perjantai");
            break;
        case 6:
            console.log("Lauantai");
            break;
        case 7:
            console.log("Sunnuntai");
            break;
        default:
            console.log("Anna numero v‰lill‰ 1-7");
            break;
    }
}

function tarkastaKokonaisluvut(a, b) {
    try {
        const lukuA = parseInt(a);
        const lukuB = parseInt(b);

        if (isNaN(lukuA) || isNaN(lukuB)) {
            throw new Error("Et antanut kokonaislukuja");
        }

        if (lukuA === lukuB) {
            return "Antamasi luvut ovat samat.";
        } else {
            return "Antamasi luvut eiv‰t ole samat.";
        }
    } catch (error) {
        return error.message;
    }
}

function aanestys(ika) {
    ika = parseInt(ika);
    if (ika >= 18) {
        console.log("Voit ‰‰nest‰‰");
    }
    else if (isNaN(ika)) {
        console.log("Et antanut numeroa");
    }
    else {
        console.log("Et voi ‰‰nest‰‰");
    }
}

function kuukaudenPaivat(kknum) {
    kknum = parseInt(kknum);
    switch (kknum) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Kuukaudessa on 31 p‰iv‰‰");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Kuukaudessa on 30 p‰iv‰‰");
            break;
        case 2:
            console.log("Kuukaudessa on 27/28 p‰iv‰‰");
    }
}

function seteleiksi(amount) {
    var note1 = 0, note2 = 0, note5 = 0, note10 = 0, note20 = 0, note50 = 0, note100 = 0, note500 = 0;
    if (amount >= 500) {
        note500 = Math.floor(amount / 500);
        amount -= note500 * 500;
    }
    if (amount >= 100) {
        note100 = Math.floor(amount / 100);
        amount -= note100 * 100;
    }
    if (amount >= 50) {
        note50 = Math.floor(amount / 50);
        amount -= note50 * 50;
    }
    if (amount >= 20) {
        note20 = Math.floor(amount / 20);
        amount -= note20 * 20;
    }
    if (amount >= 10) {
        note10 = Math.floor(amount / 10);
        amount -= note10 * 10;
    }
    if (amount >= 5) {
        note5 = Math.floor(amount / 5);
        amount -= note5 * 5;
    }
    if (amount >= 2) {
        note2 = Math.floor(amount / 2);
        amount -= note2 * 2;
    }
    if (amount >= 1) {
        note1 = amount;
    }

function kolmio(a, b, c) {
       if (a + b + c == 180) {
           console.log("Kolmio on mahdollinen");
       }
       else {
           console.log("Kolmio ei ole mahdollinen");
       }
}
   
    function laina() {

        let maksu = 5000;
        let korko = 1.02;
        let aika = 2;
        let korkosumma;
        let maksettava = maksu;

        for (var i = 1; i <= aika; i++) {
            maksettava = (maksettava * korko);
        }

        korkosumma = (maksettava - maksu);
        console.log("Joudut maksamaan");
            
    }

    function kertoma(luku) {
        let kertoma = 1;
        for (let i = 1; i <= luku; i++) {
            kertoma = i;
        }
        console.log("Luvun" + luku + "kertoma on" + kertoma);
    }

    function esiintyma() {
        let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
        for (let i = 0; i < taulukko.length; i++) {
            if (taulukko[i] == 3) {
                console.log("Nro 3 on taulukon" + i + "j‰sen");
                i = taulukko.length;
            }
        }
    }

    function kaanto(teksti) {
        let lause = "";
        for (let i = teksti.lenght - 1, i >= 0, i--) {
            lause = teksti[i];
        }
        console.log(lause);
    }
    kaanto("Kissa");

    function max() {
        let taulukko = [6, 7, 2, 4, 3, 8, 1];
        let max = taulukko[0];
        for (let i = 1; i < taulukko.lenght; i++) {
            if (taulukko[i] > max) {
                max = taulukko[i];
            }
        }
        console.log("Taulukon" + taulukko + "maksimiarvo:" + max);
    }

    function keskiarvo() {
        let taulukko = [6, 7, 2, 4, 3, 8, 1];
        let summa = 0;
        let keskiarvo = 0;
        for (let i = 0; i < taulukko.length; i++) {
            summa += taulukko[i];
        }
        keskiarvo = summa / taulukko.length;

        console.log("Taulukon " + taulukko + " lukujen keskiarvo: " + keskiarvo);
    }

    function isot() {
        let taulukko = ["a", "b", "c", "d", "e", "f"];
        let uusiTaulukko = [];
        for (let i = 0; i < taulukko.lenght; i++) {
            uusiTaulukko.push(taulukko[i].toUpperCase());
        }
        console.log(uusiTaulukko);
    }

    function seitsemasPariton() {
        let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
        let laskuri = 0;
        let etsittyLuku;
        for (let i = 0; i < taulukko.length; i++) {
            if (taulukko[i] % 2 != 0) {
                laskuri++;
                if (laskuri == 7) {
                    console.log("Taulukon" + taulukko +
                        "seitsem‰s pariton j‰sen:" + taulukko[i]);
                    i = taulukko.length;
                }
            }
        }
    }
    seitsemasPariton();

    function toiseksiSuurin() {
        let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
        let suurin = taulukko[0];
        let toiseksiSuurin = 0;
        for (let i = 1; i < taulukko.length; i++) {
            if (taulukko[i] > suurin) {
                toiSuurin = suurin;
                suurin = taulukko[i];
            }
        }
        console.log("Taulukon" + taulukko + "toiseksi suurin arvo:" + toiseksiSuurin);
    }
    toiseksiSuurin();     

    function jaollinen() {
        let lause = "";
        for (let i = 1; i <= 100; i++) {
            if (i % 5 == 0 && i % 3 == 0) {
                lause += "viisitoista";
            }
            else if (i % 5 == 0) {
                lause += "viisi";
            }
            else if (i % 3 == 0) {
                lause += "kolme";
            }
            else {
                lause += i + "";
            }
        }
        console.log(lause);
    }
    jaollinen();         

    function Fibonacci() {
        let fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        for (let i = 2; i < 10; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        console.log(fibonacci);
    }

    function palidromi(lause) {
        let kaannetty = "";
        for (let i = lause.length - 1; i >= 0; i--) {
            kaannetty += lause[i];
        }
        if (lause == kaannetty) {
            console.log("lause on palidromi");
        }
        else {
            console.log("lause ei ole palidromi")
        }
    }

    palidromi("saippuakauppias");

    function fibonacciParilliset() {
        let fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        let summa = 0;
        for (let i = 2; i < 10; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            if (fibonacci[i] % 2 == 0) {
                summa += fibonacci[i];
            }
        }
        console.log(fibonacci);
        console.log("Parillisten summa:" + summa);
    }
    fibonacciParilliset();

    function fibonacciParittomat() {
        let fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        let summa = 1;
        for (let i = 2; i < 10; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            if (fibonacci[i] % 2 != 0) {
                summa += fibonacci[i];
            }
        }
        console.log(fibonacci);
        console.log("Parittomien summa:" + summa);
    }
    fibonacciParittomat();



    function laskeSumma(a, b) {
        return a + b;
    }
    console.log(laskeSumma(3, 5));

    function laskeNelionPintaAla(sivunPituus) {
        return sivunPituus * sivunPituus;
    }
    console.log(laskeNelionPintaAla(7));

    function laskeYmpyranPintaAla(sade) {
        return Math.PI * sade * sade;
    }
    console.log(laskeYmpyranPintaAla(5));


    function laskeKeskiarvo(taulukko) {
        const summa = 0;
        for (var i = 0; i < taulukko.length - 1; i++) {
            summa += i;
        }
        return summa / taulukko.length;
    }
    console.log(laskeKeskiarvo([1, 2, 3, 4, 5]));

    function onkoParillinen(luku) {
        return luku % 2 === 0;
    }
    console.log(onkoParillinen(7));

    function laskeMerkkijononPituus(merkkijono) {
        return merkkijono.length;
    }
    console.log(laskeMerkkijononPituus("Tervetuloa"));

    function onkoMerkkijonoTyhja(merkkijono) {
        return merkkijono === "";
    }
    console.log(onkoMerkkijonoTyhja("Tervetuloa"));

    console.log(onkoMerkkijonoTyhja(""));

    function laskeSuurin(taulukko) {
        return Math.max(...taulukko);
    }
    console.log(laskeSuurin([2, 7, 1, 9, 3]));

    function laskePienin(taulukko) {
        return Math.min(...taulukko);
    }
    console.log(laskePienin([2, 7, 1, 9, 3]));

    function laskeTaulukonSumma(taulukko) {
        return taulukko.reduce((acc, numero) => acc + numero, 0);
    }
    console.log(laskeTaulukonSumma([1, 2, 3, 4, 5]));

    function laskePotenssi(kantaluku, eksponentti) {
        return Math.pow(kantaluku, eksponentti);
    }
    console.log(laskePotenssi(4, 7));

    function onkoAlkuluku(luku) {
        if (luku <= 1) return false;
        if (luku <= 3) return true;
        if (luku % 2 === 0 || luku % 3 === 0) return false;
        let i = 5;
        while (i * i <= luku) {
            if (luku % i === 0 || luku % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
    console.log(onkoAlkuluku(7));

    console.log(onkoAlkuluku(17));

    function kaannaMerkkijono(merkkijono) {
        return merkkijono.split('').reverse().join('');
    }
    console.log(kaannaMerkkijono("Tervetuloa"));

    function onkoPalindromi(sana) {
        const kaannettySana = sana.split('').reverse().join('');
        return sana === kaannettySana;
    }
    console.log(onkoPalindromi("saippuakauppias"));

    console.log(onkoPalindromi("kauppias"));

    function onkoAnagrammi(sana1, sana2) {
        const sana1Jarjestetty = sana1.split('').sort().join('');
        const sana2Jarjestetty = sana2.split('').sort().join('');
        return sana1Jarjestetty === sana2Jarjestetty;
    }
    console.log(onkoAnagrammi("listen", "silent"));

    console.log(onkoAnagrammi("hello", "world"));

    function laskeTaulukonKeskiarvo(taulukko) {
        const summa = taulukko.reduce((acc, numero) => acc + numero, 0);
        return summa / taulukko.length;
    }
    console.log(laskeTaulukonKeskiarvo([1, 2, 3, 4, 5]));

    function onkoKarkausvuosi(vuosi) {
        return (vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0);
    }
    console.log(onkoKarkausvuosi(2020));

    console.log(onkoKarkausvuosi(2022));

    function onkoTaulukkoJarjestetty(taulukko) {
        for (let i = 0; i < taulukko.length - 1; i++) {
            if (taulukko[i] > taulukko[i + 1]) {
                return false;
            }
        }
        return true;
    }
    console.log(onkoTaulukkoJarjestetty([1, 2, 3, 4, 5]))

    console.log(onkoTaulukkoJarjestetty([5, 4, 3, 2, 1]));

    function muutaEkaKirjainIsoksi(merkkijono) {
        return merkkijono.charAt(0).toUpperCase() + merkkijono.slice(1);
    }
    console.log(muutaEkaKirjainIsoksi("tervetuloa"));

    function laskeFibonacci(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
    console.log(laskeFibonacci(6));


    class Henkilˆ {
        constructor(etunimi, sukunimi, ik‰) {
            this.etunimi = etunimi;
            this.sukunimi = sukunimi;
            this.ik‰ = ik‰;
        }
    }
    const risto = new Henkilˆ("Risto", "Reipas", 10);

    console.log("Etunimi:", risto.etunimi);
    console.log("Sukunimi:", risto.sukunimi);
    console.log("Ik‰:", risto.ik‰);

    class Henkilˆ {
        public string EtuNimi { get; set; }
        public string SukuNimi { get; set; }
        public int Ik‰ { get; set; }
        public Henkilˆ(string enimi, string snimi, int Ik‰)
    {
        EtuNimi = enimi;
        SukuNimi = snimi;
        Ik‰ = ik‰;
    }
}
class Program {
    static void Main(string[args]) {
        Henkilˆ risto = new Henkilˆ("Risto", "Reipas", 10);
        Console.WriteLine("Etunimi:" + risto.EtuNimi);
        Console.WriteLine("Sukunimi:" + risto.SukuNimi);
        Console.WriteLine("Ik‰:" + risto.Ik‰);
    }
}

class Henkilˆ {
    constructor(etunimi, sukunimi, ik‰) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ik‰ = ik‰;
    }

    NaytaTiedot() {
        console.log("Etunimi:", this.etunimi);
        console.log("Sukunimi:", this.sukunimi);
        console.log("Ik‰:", this.ik‰);
    }
}
const risto = new Henkilˆ("Risto", "Reipas", 10);


class Kuvakirja {
    #SivujenLukumaara;

    constructor(sivumaara = 16) {
        this.#SivujenLukumaara = sivumaara;
    }
    HaeSivumaara() {
        return this.#SivujenLukumaara;
    }
}
const kuvakirjaOletus = new Kuvakirja();
console.log("Oletussivum‰‰r‰:" + kuvakirjaOletus.HaeSivumaara());

class El‰in {
    constructor(nimi = "kana") {
        this._nimi = nimi;
    }
    get nimi() {
        return this._nimi;
    }
    set nimi(uusiNimi) {
        this._nimi = uusiNimi;
    }
    Syˆ() {
        console.log(this._nimi + "syˆ - mumm mumm mumm"); 
    }
}
const kana = new El‰in();
console.log("Olio kana, nimi: " + kana.nimi);
kana.nimi = "kaakattaja";
concole.log("Kanan uusi nimi:" + kana.nimi);
kana.Syˆ();

claa El‰in {
    constructor(nimi = ""){
        this._nimi = nimi;
    }
    get nimi(){
        return this._nimi;
    }
    set nimi(uusiNimi){
        this._nimi = uusiNimi;
    }
    Syˆ({
        console.log(this._nimi + "syˆ - mumm mumm mumm");
    }
}
class Koira extends El‰in {
    constructor(nimi = tassut = 4, turkki = ) {
        super(nimi);
        this._tassut = tassut;
        this._turkki = turkki;
    }
    get tassut() {
        return this._tassut;
    }
    set tassut(uudetTassut) {
        this._tassut = uudetTassut;
    }
    get turkki() {
        return this._turkki;
    }
    set turkki(uusiTurkki) {
        this._turkki = uusiTurkki;
    }
    ƒ‰ntelehtii(‰‰ni) {
        console.log(this._nimi + "" + ‰‰ni);
    }
}
const koira = new Koira("Ressu");
console.log("Olio koira nimi:" + koira.nimi);
console.log("Tassujen m‰‰r‰:" + koira.tassut);

koira.nimi = "Musti";
koira.tassut = 3;
console.log("Koiran uusi nimi:" + koira.nimi);
console.log(Tassujen uusi m‰‰r‰: + koira.tassut);



class Ajoneuvo {
    constructor(merkki, malli, vuosimalli) {
        this._merkki = merkki;
            this._malli = malli;
            this._vuosimalli = vuosimalli;
    }
    get merkki() {
        return this._merkki;
    }
    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }
    get malli() {
        return this._malli;
    }
    set malli(uusiMalli);
    this._malli = uusiMalli;
    }
    get vuosimalli() {
        return this._vuosimalli;
    }
    set vuosimalli(uusiVuosimalli) {
    this._vuosimalli = uusiVuosimalli;
    }
    aja() {
    console.log("Ajetaan ajoneuvoa:" + this._merkki + "" + this._malli);
    }
    kiihdyt‰(){
    console.log("Kiihdytet‰‰n ajoneuvoa:" + this._merkki + "" + this._malli);
    }
    jarruta() {
    console.log("Jarrutetaan ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    k‰ynnist‰() {
    console.log("K‰ynnistet‰‰n ajoneuvo: " + this._merkki + " " + this._malli);
    }
    sammuta() {
    console.log("Sammutetaan ajoneuvo: " + this._merkki + " " + this._malli);
    }
}
class Auto extends Ajoneuvo {

}
class TestiAjo {
    constructor() {
        const tesla = new Auto("Tesla", "Model S", 2021);
        tesla aja();
    }
}
const testiAjo = new TestiAjo();


class Pankkitili {
    constructor() {
        this.saldo = 0;
    }
    talleta(m‰‰r‰) {
        if (m‰‰r‰ > 0) {
            console.log("Talletettu ${m‰‰r‰} euroa. Uusi saldo: ${this.saldo} euroa");
        } else {
            console.log("Talletettava m‰‰r‰ on v‰‰r‰");
        }
    }
    nosta(m‰‰r‰) {
        if (m‰‰r‰ > 0) {
            if (m‰‰r‰ <= this.saldo) {
                this.saldo -= m‰‰r‰;
                console.log("Nostettu ${m‰‰r‰} euroa. Uusi saldo: ${this.saldo} euroa.");
            } else {
                console.log("Nostettava m‰‰r‰ ylitt‰‰ tilin saldon.");
            }
        } else {
            console.log("Nostettava m‰‰r‰ on virheellinen.");
        }
    }
}

const tili = new Pankkitili();
tili.talleta(170);


function muokkaa() {
    var teksti = document.getElementBuId("muokattava");
    teksti.style.fontFamily = "Courier";
    teksti.style.color = "red";
    teksti.style.fontSize = "2em";
}

function haeTiedot() {
    var etunimi = document.getElementById("etunimi").value;
    var sukunimi = document.getElementById("sukunimi").value;
    console.log("Etunimi on:" + etunimi + "sukunimi on:" + sukunimi);
}

function vaihdaTausta() {
    var teksti = document.getElementById("vaihda");
    teksti.style.backgroundColor = "Green";
}

function linkinTiedot() {
    var u = document.getElementById("w3r").href;
    alert('The value of the href attribute of the link is : ' + u);

    var v = document.getElementById("w3r").hreflang;
    alert('The value of the hreflang attribute of the link is : ' + v);

    var w = document.getElementById("w3r").rel;
    alert('The value of the rel attribute of the link is : ' + w);

    var x = document.getElementById("w3r").target;
    alert('The value of the taget attribute of the link is : ' + x);

    var y = document.getElementById("w3r").type;
    alert('The value of the type attribute of the link is : ' + y);
}


function lis‰‰Rivi() {
    var x = document.getElementById("sampleTable").insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = "Uusi solu 1";
    z.innerHTML = "Uusi solu 2";
}

function muutaSolu() {
    rivi = document.getElementById("rivi").value;
    solu = document.getElementById("solu").value;
    sis‰ltˆ = document.getElementById("sis‰ltˆ").value;
    document.getElementById("taulukko").rows[rivi].cells[solu].innerHTML = sis‰ltˆ;
}

function luoTaulukko() {

    rivim‰‰r‰ = document.getElementById("rivi").value;
    sarakem‰‰r‰ = document.getElementById("solu").value;

    for (var r = 0; r < parseInt(rivim‰‰r‰); r++) {
        var x = document.getElementById('taulukko').insertRow(r);

        for (var s = 0; s < parseInt(sarakem‰‰r‰); s++) {
            var y = x.insertCell(s);
            y.innerHTML = "Rivi" + r + " Sarake" + s;
        }
    }
}


function poistaValinta() {
    var poista = document.getElementById("v‰rit");
    poista.remove(poista.selectedIndex);
}



function laskeElementit() {
    var x = document.getElementById("v‰rit");
    var txt1 = "No. of items : ";
    var i;
    l = document.getElementById("v‰rit").length;
    txt1 = txt1 + l;
    for (i = 0; i < x.length; i++) {
        txt1 = txt1 + "\n" + x.options[i].text;
    }
    alert(txt1);
}



var lihavoidut;
window.onload = haeLihavoidut();

function haeLihavoidut() {
    lihavoidut = document.getElementsByTagName('strong');
}

function korosta() {
    for (var i = 0; i < lihavoidut.length; i++) {
        lihavoidut[i].style.color = "green";
    }
}

function palaaNormaaliin() {
    for (var i = 0; i < lihavoidut.length; i++) {
        lihavoidut[i].style.color = "black";
    }
}



function haeKoko() {
    var leveys = document.documentElement.clientWidth;
    var korkeus = document.documentElement.clientHeight;
    document.getElementById("eka").innerHtML = "<h1>Leveys:" + leveys + "Korkeus:" + korkeus + "</h1>"
}


