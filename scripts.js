const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value-convert")
    const currencyValue = document.querySelector(".currency-value")
    const currencySelect = document.querySelector(".currency-select")
    const dolarToday = 4.97
    const euroToday = 5.35
    const libraToday = 6.26

    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}
    function changeCurrency() {
        const currencyName = document.getElementById("currency-name");
        const currencyImage = document.querySelector(".currency-img");
    
        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar";
            currencyImage.src = "./Assets/eua.png";
        }
    
        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro";
            currencyImage.src = "./Assets/Euro.png";
        }
    
        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra Esterlina";
            currencyImage.src = "./Assets/libra.png";
        }
    
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
