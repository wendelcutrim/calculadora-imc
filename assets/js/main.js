console.log("Start JS");

const form = document.querySelector("form");
const inputWeight = document.querySelector("input[name='weight']");
const inputHeigth = document.querySelector("input[name='height']");
const divError = document.querySelector("div.alert-error");
const modal = document.querySelector("#modal");
const modalCard = document.querySelector("#modal .card");
const btnCloseModal = document.querySelector("#modal .close");


form.addEventListener("submit", handleSubmit);
inputWeight.addEventListener("keypress", verifyInputValue);
inputHeigth.addEventListener("keypress", verifyInputValue);
btnCloseModal.addEventListener("click", toggleModal);
modal.addEventListener("keypress", closeModal);

function handleSubmit(event) {
    event.preventDefault();
    calcularImc();
}

function calcularImc() {
    let peso = parseFloat(inputWeight.value);
    let altura = parseFloat(inputHeigth.value);

    let resultado = peso / (altura * altura)

    if(resultado == 'NaN') {
        return alert("Error")
    }

    toggleModal()

    console.log(peso, altura)
    console.log(resultado);
    

    inputHeigth.value = "";
    inputWeight.value = "";

    return modalCard.querySelector('.title').innerText = `O seu IMC é de ${resultado.toFixed(2)}`;
}

function verifyInputValue(event) {
    const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ",", "Enter"];
    console.log(event.key);

    numberKeys.includes(event.key) ? divError.classList.remove("open") : divError.classList.add("open")

    /* if (numberKeys.includes(event.key)) {
        divError.classList.remove("open");
        return
    } else {
        event.preventDefault();
        divError.classList.add("open");
    } */

    return;
}

function toggleModal() {
    modal.classList.toggle("open");
}

function closeModal(event){
    console.log(event.key);

    if(event.key === "Escape" || event.key === "Enter") { 
        if(modal.classList.contains("open")) {
            return modal.classList.remove("open");
        }
    }
}