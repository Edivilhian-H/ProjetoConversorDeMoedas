const buttonC = document.getElementsByTagName("button")[0];
const select = document.getElementById("currency-select");

const Bitcoin = 103334.58;

const convertValues = async () => {
  const inputRs = document.getElementsByTagName("input")[0].value;
  const realValueText = document.getElementById("real-value");
  const dolaValueText = document.getElementById("dolar-value");

  
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high

  const convertedDola = inputRs / dolar;
  const convertedEuro = inputRs / euro;
  const convertedBtc = inputRs / Bitcoin;

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputRs);

  if (select.value === "US$ Dólar americano") {
    dolaValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(convertedDola);
  }

  if (select.value === "€ Euro") {
    dolaValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(convertedEuro);
  }

  if (select.value === "Bitcoin") {

    dolaValueText.innerHTML =  convertedBtc.toFixed(4) + " BTC"
  }
};

const changeCurrency = () => {
  const currencyName = document.getElementById("section-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/Euro.svg";
  }

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/estados-unidos (1) 1.svg";
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/BTC.png";
  }

  convertValues()
};

buttonC.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
