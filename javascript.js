
function nomVille(nomVille) {
  let ville = document.getElementById("ville");
  let bG = document.getElementById("background");
  let nomDeVille = document.createElement("p");
  nomDeVille.classList = "titreVille";

  for (let i in nomVille) {
    let lieu = nomVille.name;
    //console.log(lieu);

    if (lieu == "Arrondissement de Nancy") {
      bG.style.backgroundImage = "url('./ressources/images/nancy.jpg')";
      bG.style.backgroundSize = "cover";
      bG.style.backgroundPosition = "center";
      bG.style.backgroundAttachment = "fixed";

      window.addEventListener("scroll", (event) => {
        let valeur = scrollY / 75;

        bG.style.filter = "blur(" + valeur * 1 + "px)";
      });

      nomDeVille.innerHTML = "Nancy";
    } else if (lieu === "Arrondissement de Reims") {
      bG.style.backgroundImage = "url('./ressources/images/reims.jpg')";
      bG.style.backgroundSize = "cover";
      bG.style.backgroundPosition = "center";
      bG.style.backgroundAttachment = "fixed";

      window.addEventListener("scroll", (event) => {
        let valeur = scrollY / 75;

        bG.style.filter = "blur(" + valeur * 1 + "px)";
      });
      nomDeVille.innerHTML = "Reims";
    } else if (lieu === "Strasbourg") {
      bG.style.backgroundImage = "url('./ressources/images/strasbourg.jpg')";
      bG.style.backgroundSize = "cover";
      bG.style.backgroundPosition = "center";
      bG.style.backgroundAttachment = "fixed";

      window.addEventListener("scroll", (event) => {
        let valeur = scrollY / 75;

        bG.style.filter = "blur(" + valeur * 1 + "px)";
      });
      nomDeVille.innerHTML = "Strasbourg";
    } else if (lieu === "Metz") {
      bG.style.backgroundImage = "url('./ressources/images/metz.jpg')";
      bG.style.backgroundSize = "cover";
      bG.style.backgroundPosition = "center";
      bG.style.backgroundAttachment = "fixed";

      window.addEventListener("scroll", (event) => {
        let valeur = scrollY / 75;

        bG.style.filter = "blur(" + valeur * 1 + "px)";
      });
      nomDeVille.innerHTML = "Metz";
    }
  }

  ville.innerHTML = "";
  ville.appendChild(nomDeVille);
}

function temps(donnees) {
  let blocTemps = document.querySelector(".ciel");
  let descriptionTemps = document.createElement("p");
  descriptionTemps.style.fontFamily = " meteo";
  descriptionTemps.style.fontSize = "1.8vw";
  descriptionTemps.style.color = "whitesmoke";
  descriptionTemps.style.fontWeight = "bold";

  let imageTemps = document.createElement("img");
  imageTemps.style.width = "300px";
  imageTemps.style.maxWidth = "100%";
  imageTemps.style.height = "auto";

  let vent = document.createElement("p");
  vent.style.fontFamily = " meteo";
  vent.style.fontSize = "1.8vw";
  vent.style.color = "whitesmoke";
  vent.style.fontWeight = "bold";

  let humidite = document.createElement("p");
  humidite.style.fontFamily = " meteo";
  humidite.style.fontSize = "1.8vw";
  humidite.style.color = "whitesmoke";
  humidite.style.fontWeight = "bold";

  blocTemps.innerHTML = "";

  blocTemps.appendChild(descriptionTemps);
  blocTemps.appendChild(imageTemps);
  blocTemps.appendChild(vent);
  blocTemps.appendChild(humidite);

  for (let i in donnees.weather) {
    let meteorologie = donnees.weather[i].main;

    if (
      meteorologie === "Drizzle" ||
      meteorologie === "Mist" ||
      meteorologie === "Fog"
    ) {
      descriptionTemps.innerHTML = "Temps brumeux et pleuvieux";
      imageTemps.src = "./ressources/images/nuage.png";
    } else if (meteorologie === "Clouds") {
      descriptionTemps.innerHTML = "Temps nuageux";
      imageTemps.src = "./ressources/images/nuage.png";
    } else if (meteorologie === "Thunderstorm") {
      descriptionTemps.innerHTML = "Temps orageux";
      imageTemps.src = "./ressources/images/orage.png";
    } else if (meteorologie === "Rain") {
      descriptionTemps.innerHTML = "Temps pluvieux";
      imageTemps.src = "./ressources/images/pluie.png";
    } else if (meteorologie === "Snow") {
      descriptionTemps.innerHTML = "Temps neigeux";
      imageTemps.src = "./ressources/images/neige.png";
    } else if (meteorologie === "Clear") {
      descriptionTemps.innerHTML = "Temps ensoleillé";
      imageTemps.src = "./ressources/images/soleil.png";
    }

    console.log(meteorologie);
  }

  for (let i in donnees.wind) {
    vent.innerHTML =
      "le vent souffle à : " + Math.round(donnees.wind.speed * 3.6) + " km/h";
  }

  let blocTemperature = document.querySelector(".temperature");
  let maTemp = document.createElement("p");
  maTemp.innerHTML = "Température";
  maTemp.style.fontFamily = " meteo";
  maTemp.style.fontSize = "1.8vw";
  maTemp.style.color = "whitesmoke";
  maTemp.style.fontWeight = "bold";
  let maTemperature = document.createElement("p");
  maTemperature.innerHTML = "Température";
  maTemperature.style.fontFamily = " meteo";
  maTemperature.style.fontSize = "1.8vw";
  maTemperature.style.color = "whitesmoke";
  maTemperature.style.fontWeight = "bold";
  let minMax = document.createElement("p");
  minMax.style.fontFamily = " meteo";
  minMax.style.fontSize = "1.2vw";
  minMax.style.color = "whitesmoke";
  minMax.style.fontWeight = "bold";

  let pascal = document.createElement("p");
  pascal.style.fontFamily = " meteo";
  pascal.style.fontSize = "1.8vw";
  pascal.style.color = "whitesmoke";
  pascal.style.fontWeight = "bold";

  blocTemperature.innerHTML = "";

  blocTemperature.appendChild(maTemp);
  blocTemperature.appendChild(maTemperature);
  blocTemperature.appendChild(minMax);
  blocTemperature.appendChild(pascal);

  for (let i in donnees.main) {
    maTemperature.innerHTML = Math.round(donnees.main.temp - 273, 15) + "°c";
    minMax.innerHTML =
      "min : " +
      " " +
      Math.round(donnees.main.temp_min - 273, 15) +
      "°c" +
      "&nbsp" +
      "&nbsp" +
      "&nbsp" +
      " max : " +
      " " +
      Math.round(donnees.main.temp_max - 273, 15) +
      "°c";
    pascal.innerHTML =
      "pression : " + "&nbsp" + donnees.main.pressure + "&nbsp" + "hPa";
    humidite.innerHTML =
      "humidité : " + "&nbsp" + donnees.main.humidity + "&nbsp" + "%";
  }
}

/************************************menu************************************/

let bouton = document.getElementById("boutonMenu");
let section2=document.getElementById("sect2")
let croix = document.getElementById("croix");
let menu = document.getElementById("menu");

bouton.addEventListener("click", (event) => {
  ouvreMenu();
});

function ouvreMenu() {
  menu.style.display = "flex";
  menu.style.width = "100%";
  menu.style.opacity = "1";
}

croix.addEventListener("click", (event) => {
  fermeMenu();
});

function fermeMenu() {
  menu.style.display = "none";
}

function ouvreSection() {
  section2.style.display = "flex";
}

let menuNancy = document.createElement("p");
menuNancy.classList = "nomMenu";
let nomNancy = (menuNancy.innerHTML = "Nancy");

let menuReims = document.createElement("p");
menuReims.classList = "nomMenu";
let nomReims = (menuReims.innerHTML = "Reims");

let menuStrasbourg = document.createElement("p");
menuStrasbourg.classList = "nomMenu";
let nomStrasbourg = (menuStrasbourg.innerHTML = "Strasbourg");

let menuMetz = document.createElement("p");
menuMetz.classList = "nomMenu";
let nomMetz = (menuMetz.innerHTML = "Metz");

menu.appendChild(menuNancy);
menu.appendChild(menuReims);
menu.appendChild(menuStrasbourg);
menu.appendChild(menuMetz);

/************************************switch************************************/

function maRequeteNancy() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let infoMeteoNancy = JSON.parse(this.response);
      nomVille(infoMeteoNancy);
      temps(infoMeteoNancy);
      console.log(infoMeteoNancy);
    }
  };
  xhttp.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=Nancy&appid=28da2799b73f06513b062e2b6178e72d",
    true
  );

  xhttp.send();
}

function maRequeteReims() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let infoMeteoNancy = JSON.parse(this.response);
      nomVille(infoMeteoNancy);
      temps(infoMeteoNancy);
      console.log(infoMeteoNancy);
    }
  };
  xhttp.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=Reims&appid=28da2799b73f06513b062e2b6178e72d",
    true
  );

  xhttp.send();
}

function maRequeteStrasbourg() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let infoMeteoNancy = JSON.parse(this.response);
      nomVille(infoMeteoNancy);
      temps(infoMeteoNancy);
      console.log(infoMeteoNancy);
    }
  };
  xhttp.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&appid=28da2799b73f06513b062e2b6178e72d",
    true
  );

  xhttp.send();
}

function maRequeteMetz() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let infoMeteoNancy = JSON.parse(this.response);
      nomVille(infoMeteoNancy);
      temps(infoMeteoNancy);
      console.log(infoMeteoNancy);
    }
  };
  xhttp.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=Metz&appid=28da2799b73f06513b062e2b6178e72d",
    true
  );

  xhttp.send();
}

menuNancy.addEventListener("click", (event) => {
  maRequeteNancy();
  ouvreSection()
  fermeMenu();
});

menuReims.addEventListener("click", (event) => {
  maRequeteReims();
  ouvreSection()
  fermeMenu();
});

menuStrasbourg.addEventListener("click", (event) => {
  maRequeteStrasbourg();
  ouvreSection()
  fermeMenu();
});

menuMetz.addEventListener("click", (event) => {
  maRequeteMetz();
  ouvreSection()
  fermeMenu();
});
