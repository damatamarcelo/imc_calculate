const firstDev = document.querySelector(".first-step")
const secondDev = document.querySelector(".second-step")
const finalDev = document.querySelector(".final-step")

function go(currentStep, nextStep) {
    let dNone, dBlock;

    if (currentStep == 1) {
        dNone = firstDev
    }
    else if (currentStep == 2) {
        dNone = secondDev
    }
    else {
        dNone = finalDev
    }

    dNone.style.display = "none"

    if (nextStep == 1) {
        dBlock = firstDev
    }
    else if (nextStep == 2) {
        dBlock = secondDev
    }
    else {
        dBlock = finalDev
    }

    dBlock.style.display = "block"
}

function validate() {
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")

    peso.style.border = "none"
    altura.style.border = "none"

    if (!peso.value || !altura.value) {
        if (!peso.value && !altura.value) {
            peso.style.border = "1px solid red"
            altura.style.border = "1px solid red"
        }
        else if (!peso.value) {
            peso.style.border = "1px solid red"
        }
        else {
            altura.style.border = "1px solid red"
        }
    }
    else {
        let imc = (peso.value / Math.pow(altura.value, 2))

        const result = document.getElementById("resultado")

        if (imc < 18.5) {
            result.style.color = "yellow"
            result.innerHTML = `IMC: ${Math.round(imc)} | Magreza | Obesidade: 0`
        }
        if (imc >= 18.5 && imc < 25) {
            result.style.color = "green"
            result.innerHTML = `IMC: ${Math.round(imc)} | Normal | Obesidade: 0`
        }
        if (imc >= 25 && imc < 30) {
            result.style.color = "yellow"
            result.innerHTML = `IMC: ${Math.round(imc)} | Sobrepeso | Obesidade: I`
        }
        if (imc >= 30 && imc < 40) {
            result.style.color = "red"
            result.innerHTML = `IMC: ${Math.round(imc)} | Obesidade | Obesidade: II`
        }
        if (imc >= 40) {
            result.style.color = "black"
            result.innerHTML = `IMC: ${Math.round(imc)} | Obesidade grave | Obesidade: III`
        }

        go(2, 3)
    }
}
