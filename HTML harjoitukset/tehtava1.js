function jarjesta() {
    var numero1, numero2, numero3;
    numero1 = parseInt(document.getElementById("eka").value);
    numero2 = parseInt(document.getElementById("toka").value);
    numero3 = parseInt(document.getElementById("kolmas").value);
    document.write("Annoit numerot: " + numero1 + " " + numero2 + " " + numero3 + "<br>");

    if (numero1 < numero2 && numero1 < numero3) {
        
        if (numero2 < numero3) {
            document.write("Numerojen järjestys: " + numero1 + " " + numero2 + "" + numero3);
        }
        else {
            document.write("Numerojen järjestys: " + numero1 + " " + numero3 + " " + numero2);
        }
    }

    else if (numero2 < numero1 && numero2 < numero3) {
        if (numero1 < numero3) {
            document.write("Numerojen järjestys: " + numero2 + " " + numero1 + " " + numero3);
        }
        else {
            document.write("Numerojen järjestys: " + numero2 + " " + numero3 + " " + numero1);
        }
    }

    else if (numero3 < numero1 && numero3 < numero2) {
        if (numero1 < numero2) {
            document.write("Numerojen järjestys: " + numero3 + " " + numero1 + " " + numero2);
        }
        else {
            document.write("Numerojen järjestys: " + numero3 + " " + numero2 + " " + numero1);

        }
    }
}
function etsi() {
    var luku1, luku2, luku3, luku4, luku5, suurin;
    luku1 = parseInt(document.getElementById("1").value);
    luku2 = parseInt(document.getElementById("2").value);
    luku3 = parseInt(document.getElementById("3").value);
    luku4 = parseInt(document.getElementById("4").value);
    luku5 = parseInt(document.getElementById("5").value);

    if (luku1 < luku2 && luku3 < luku2 && luku4 < luku2 && luku5 < luku2) {
        suurin = luku2;
    }

    else if (luku1 < luku3 && luku4 < luku3 && luku5 < luku3) {
        suurin = luku3;
    }

    else if (luku1 < luku4 && luku5 < luku4) {
        suurin = luku4;
    }

    else if (luku1 < luku5) {
        suurin = luku5;
    }

    else {
        suurin = luku1;
    }

    document.write("Annoit luvut: " + luku1 + " " + luku2 + " " + luku3 + " " + luku4 + " " + luku5);
    document.write("<br>Suurin niistä on: " + suurin);
}
function paritonParillinen() {
    var arvo;
    arvo = parseInt(document.getElementById("luku").value);
    document.write("Antamasi luku: " + arvo);

    if (arvo % 2 == 0) {
        document.write("<br>Antamasi luku on pariton");
    }

    else {
        document.write("<br>Antamasi luku on parillinen");
    }
}
function ajoneuvo() {

    var ikä = parseInt(document.getElementById("ikä").value);

    if (ikä < 16) {
        document.write("Voit ajaa polkupyörää");
    }

    else if (ikä < 18) {
        document.write("Voit ajaa mopoa");
    }

    else {
        document.write("Voit ajaa autoa");
    }
}
function kaanna() {
    var lang = document.getElementById("kieli").value;

    if (lang == "eng") {
        document.write("Hello World!");
    }

    else if (lang == "swe") {
        document.write("Hej Världen!");
    }

    else if (lang == "esp"){
        document.write("Hola Mundo!");
    }
}