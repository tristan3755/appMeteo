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
    "http://api.openweathermap.org/data/2.5/weather?q=Nancy&appid=28da2799b73f06513b062e2b6178e72d",
    true
  );
  xhttp.send();
}

maRequeteNancy();

function nomVille(nomVille) {
  let ville = document.getElementById("ville");
  let bG = document.getElementById("background");
  let nomDeVille = document.createElement("h1");
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
    }
  }

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

  let humidite=document.createElement('p')
  humidite.style.fontFamily = " meteo";
  humidite.style.fontSize = "1.8vw";
  humidite.style.color = "whitesmoke";
  humidite.style.fontWeight = "bold";

  blocTemps.appendChild(descriptionTemps);
  blocTemps.appendChild(imageTemps);
  blocTemps.appendChild(vent);
  blocTemps.appendChild(humidite);

  for (let i in donnees.weather) {
    let meteorologie = donnees.weather[i].main;

    if (meteorologie === "Drizzle" || meteorologie === "Mist") {
      descriptionTemps.innerHTML = "Temps brumeux et pleuvieux";
      imageTemps.src = "./ressources/images/nuage.png";
    } else if (meteorologie === "Clouds") {
      descriptionTemps.innerHTML = "Temps nuageux";
      imageTemps.src = "./ressources/images/nuage.png";
    }

    console.log(meteorologie);
  }

  for (let i in donnees.wind) {
    vent.innerHTML ="le vent souffle à : " + Math.round(donnees.wind.speed * 3.6) + " km/h";
  }


  let blocTemperature=document.querySelector('.temperature')
  let maTemp=document.createElement('p')
  maTemp.innerHTML="Température"
  maTemp.style.fontFamily = " meteo";
  maTemp.style.fontSize = "1.8vw";
  maTemp.style.color = "whitesmoke";
  maTemp.style.fontWeight = "bold";
  let maTemperature=document.createElement('p')
  maTemperature.innerHTML="Température"
  maTemperature.style.fontFamily = " meteo";
  maTemperature.style.fontSize = "1.8vw";
  maTemperature.style.color = "whitesmoke";
  maTemperature.style.fontWeight = "bold";
  let minMax=document.createElement('p')
  minMax.style.fontFamily = " meteo";
  minMax.style.fontSize = "1.2vw";
  minMax.style.color = "whitesmoke";
  minMax.style.fontWeight = "bold";

  let pascal=document.createElement('p')
  pascal.style.fontFamily = " meteo";
  pascal.style.fontSize = "1.8vw";
  pascal.style.color = "whitesmoke";
  pascal.style.fontWeight = "bold";

 

  blocTemperature.appendChild(maTemp)
  blocTemperature.appendChild(maTemperature)
  blocTemperature.appendChild(minMax)
  blocTemperature.appendChild(pascal)

  for(let i in donnees.main){
maTemperature.innerHTML=Math.round(donnees.main.temp-273,15) + "°c"
minMax.innerHTML="min : "+" "+ Math.round(donnees.main.temp_min-273,15)+ "°c" +"&nbsp"+"&nbsp"+"&nbsp"+" max : "+" "+  Math.round(donnees.main.temp_max-273,15)+ "°c" 
pascal.innerHTML= "pression : "+"&nbsp"+ donnees.main.pressure + "&nbsp"+"hPa"
humidite.innerHTML= "humidité : "+"&nbsp"+ donnees.main.humidity + "&nbsp"+"%"
}




}