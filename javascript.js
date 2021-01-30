function maRequeteNancy() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let infoMeteoNancy = JSON.parse(this.response);
      nomVille(infoMeteoNancy);
      //console.log(infoMeteoNancy)
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
  let nomDeVille = document.createElement("h1");
  nomDeVille.classList= ('titreVille')

  for (let i in nomVille) {
    nomDeVille.innerHTML = nomVille.name;
    console.log(nomVille.name);
  }

  ville.appendChild(nomDeVille);
}
