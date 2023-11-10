function syötä() {
    const syöttöAvain = document.getElementById("syöttöAvain");
    const syöttöArvo = document.getElementById("syöttöArvo");
    const avain = syöttöAvain.value;
    const arvo = syöttöArvo.value;

    if (avain && arvo) {
        localStorage.setItem(avain, arvo);
        luettele();
    }
}

function luettele() {
    for (let i = 0; i < localStorage.length; i++) {
        const avain = localStorage.key(i);
        const arvo = localStorage.getItem(avain);
        localSyöttö.innerHTML += "<table><tr><td><b>"
            + avain + "</td><td>" + arvo + "</td><td><button type='button' id="
            + avain + " onclick='poista(this)'>Poista tieto</button>" + "<br/></td></tr></table>";
        document.getElementById("syöttöArvo").value = "";
        document.getElementById("syöttöAvain").value = "";
        setTimeout(function () { localSyöttö.innerHTML = ""; }, 10000);
        
       
    }
}

function poista(tieto) {
    const avain = tieto.id;
    localStorage.removeItem(avain);
    location.reload();
}