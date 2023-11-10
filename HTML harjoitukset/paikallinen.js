function sy�t�() {
    const sy�tt�Avain = document.getElementById("sy�tt�Avain");
    const sy�tt�Arvo = document.getElementById("sy�tt�Arvo");
    const avain = sy�tt�Avain.value;
    const arvo = sy�tt�Arvo.value;

    if (avain && arvo) {
        localStorage.setItem(avain, arvo);
        luettele();
    }
}

function luettele() {
    for (let i = 0; i < localStorage.length; i++) {
        const avain = localStorage.key(i);
        const arvo = localStorage.getItem(avain);
        localSy�tt�.innerHTML += "<table><tr><td><b>"
            + avain + "</td><td>" + arvo + "</td><td><button type='button' id="
            + avain + " onclick='poista(this)'>Poista tieto</button>" + "<br/></td></tr></table>";
        document.getElementById("sy�tt�Arvo").value = "";
        document.getElementById("sy�tt�Avain").value = "";
        setTimeout(function () { localSy�tt�.innerHTML = ""; }, 10000);
        
       
    }
}

function poista(tieto) {
    const avain = tieto.id;
    localStorage.removeItem(avain);
    location.reload();
}