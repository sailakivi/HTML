function posiNega() {
    var luku;
    luku = parseInt(document.getElementById("luku").value);
    document.write("Antamasi luku" > 0 );

    if (luku > 0) {
        document.write("Antamasi luku on positiivinen");
    }

    else {
        document.write("Antamasi luku on negatiivinen");
    }
}

function paiva() {
    var paiva = parseInt(document.getElementById("paiva").value);
    

    if (paiva == 1) {
        document.write("Maanantai");
    }

     if (paiva == 2) {
        document.write("Tiistai");
    }

     if (paiva == 3) {
        document.write("Keskiviikko");
    }

     if (paiva == 4) {
        document.write("Torstai");
    }

     if (paiva == 5) {
        document.write("Perjantai");
    }

     if (paiva == 6) {
        document.write("Lauantai");
    }

    else {
        document.write("Sunnuntai");
    }
   
}
