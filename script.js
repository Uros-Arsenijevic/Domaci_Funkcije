let button = document.querySelector("button");

button.addEventListener("click", () => {
    let price = document.querySelector("p");
    price = +price.innerText.slice(6, 9)

    alert(`Cena sa PDV-om je ${price + (price * 0.20)} Evra`) // PDV 20%
})