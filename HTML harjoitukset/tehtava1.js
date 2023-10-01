function jarjesta() {
    var numero1, numero2, numero3;
    numero1 = parseInt(document.getElementById('eka').value);
    numero2 = parseInt(document.getElementById('toka').value);
    numero3 = parseInt(document.getElementById('kolmas').value);
    document.write("Annoit numerot: " + numero1 + ' ' + numero2 + ' ' + numero3 + "<br>");

    if (numero1 < numero2 && numero1 < numero3) {
        k
        if (numero2 < numero3) {
            document.write("Numerojen järjestys: " + numero1 + ' ' + numero2 + ' ' + numero3);
        }
        else {
            document.write("Numerojen järjestys: " + numero1 + ' ' + numero3 + ' ' + numero2);
        }
    }

    else if (numero2 < numero1 && numero2 < numero3) {
        if (numero1 < numero3) {
            document.write("Numerojen järjestys: " + numero2 + ' ' + numero1 + ' ' + numero3);
        }
        else {
            document.write("Numerojen järjestys: " + numero2 + ' ' + numero3 + ' ' + numero1);
        }
    }

    else if (numero3 < numero1 && numero3 < numero2) {
        if (numero1 < numero2) {
            document.write("Numerojen järjestys: " + numero3 + ' ' + numero1 + ' ' + numero2);
        }
        else {
            document.write("Numerojen järjestys: " + numero3 + ' ' + numero2 + ' ' + numero1);

        }
    }
}
function etsi() {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById("1").value);
    l2 = parseInt(document.getElementById("2").value);
    l3 = parseInt(document.getElementById("3").value);
    l4 = parseInt(document.getElementById("4").value);
    l5 = parseInt(document.getElementById("5").value);

    if (l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2) {
        suurin = l2;
    }

    else if (l1 < l3 && l4 < l3 && l5 < l3) {
        suurin = l3;
    }

    else if (l1 < l4 && l5 < l4) {
        suurin = l4;
    }

    else if (l1 < l5) {
        suurin = l5;
    }

    else {
        suurin = l1;
    }

    document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
    document.write("<br>Suurin niistä on: " + suurin);
}
function paritonParillinen() {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    document.write("Antamasi luku: " + arvo);

    if (arvo % 2 == 0) {
        document.write("<br>Antamasi luku on pariton");
    }

    else {
        document.write("<br>Antamasi luku on parillinen");
    }
}
function ajoneuvo() {
    var age = parseInt(document.getElementById('ika').value);

    if (age < 16) {
        document.write("Voit ajaa polkupyörää");
    }

    else if (age < 18) {
        document.write("Voit ajaa mopoa");
    }

    else {
        document.write("Voit ajaa autoa");
    }
}
function kaanna() {
    var lang = document.getElementById('kieli').value;

    if (lang == 'eng') {
        document.write("Hello World!");
    }

    else if (lang == 'swe') {
        document.write("Hej Världen!");
    }

    else {
        document.write("Hola Mundo!");
    }
}