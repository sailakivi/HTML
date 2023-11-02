





function 

function vkp() {
    var vkp = parseInt(document.getElementById("vkp").value);
    switch (vkp) {
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
            console.log("Et antanut oikeaa numeroa. Anna välillä 1-7");
    }
}

function karkaus() {
    let kvuosi = parseInt(document.getElementById("vuosi"));
    if (kvuosi % 4 == 0 && kvuosi % 100! = 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else if (kvuosi % 400 == 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}

function summajaKA() {
    var luku1, luku2, luku3, luku4, luku5, summa;

    luku1 = parseInt(document.getElementById("luku1").value)
    luku2 = parseInt(document.getElementById("luku2").value)
    luku3 = parseInt(document.getElementById("luku3").value)
    luku4 = parseInt(document.getElementById("luku4").value)
    luku5 = parseInt(document.getElementById("luku5").value)
    summa = luku1 + luku2 + luku3 + luku4 + luku5;
    console.log("Lukujen summa on " + summa + " ja keskiarvo on " + summa/5);
}

function kertotaulu() {
    var luku = parseInt(document.getElementById("luku").value);
    var lause = "";
    for = (var i = 1; i <= 10; i++) {
        lause += "luku" + luku + "*" + i + "=" + luku * i + "\n"
    } 
    console.log(lause);
}