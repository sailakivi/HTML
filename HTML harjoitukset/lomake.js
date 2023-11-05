function laheta() {
    let enimi = document.getElementById("enimi").value;
    let snimi = document.getElementById("snimi").value;
    kouluun = document.quarySelector('input[name="kouluun"]:checked')
    let lempitunti = document.getElementById("lempitunti").value;

    if (enimi == "") {
        alert("Anna etunimesi");
    }
    else if (snimi == "") {
        alert("Anna sukunimesi");
    }
    else if (!kouluun) {
        alert("Kerro millä tulit kouluun");
    }
    else if (lempitunti == "") {
        alert("Valitse lempituntisi");
    }
    else {
        alert("Kiitos vastauksestasi");
    }
}