function random() {
    let pohja;
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {

            pohja = data.results[0];
            console.log(pohja);

            document.getElementById("random").innerHTML =
                "<br/> <img src='" + pohja.picture.large + "' id='vasen'>" + "<p>Nimi:" + " " + pohja.name.title + " " + pohja.name.first + " " + pohja.name.last + "</p>" +
                "<p>Osoite:" + " " + pohja.location.street.name + " " + pohja.location.street.number + " " + pohja.location.city + " " + pohja.location.postcode +
                +"</p>" + "<br/> <p>S�hk�posti: " + " " + pohja.email + "</p>" + " <p>Puhelin: " + " " + pohja.cell + " / " + pohja.phone + "</p>" +
                "<p> Maa: " + " " + pohja.location.country + "</p>" + "<p>K�ytt�j�tunnus: " + " " + pohja.login.username + "</p>" + "<p>Salasana: " + " " + pohja.login.password + "</p>"
        });
}