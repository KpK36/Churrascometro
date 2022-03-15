let adultsInput = document.getElementById("adults");
let childrenInput = document.getElementById("children");
let durationInput = document.getElementById("duration");

let result = document.getElementById("result");

function calculate() {

    let adults = adultsInput.value;
    let children = childrenInput.value;
    let duration = durationInput.value;

    let quantiCarne = (carnePorPessoa(duration) * adults) + ((carnePorPessoa(duration) / 2) * children);
    let quantiCerveja = (cervejaPorPessoa(duration) * adults);
    let quantiBebidas = (bebidasPorPessoa(duration) * adults) + ((bebidasPorPessoa(duration) / 2) * children);

    result.innerHTML = `<p>${quantiCarne / 1000} Kg de Carne</p>`;
    result.innerHTML += `<p>${Math.ceil(quantiCerveja / 355)} Latas de Cerveja</p>`;
    result.innerHTML += `<p>${Math.ceil(quantiBebidas / 2000)} Garrafas de 2L de Bebida</p>`;
}

function carnePorPessoa(duration) {

    if (duration < 6) {
        return 400
    } else {
        return 650
    }
}

function cervejaPorPessoa(duration) {

    if (duration < 6) {
        return 1200
    } else {
        return 2000
    }
}

function bebidasPorPessoa(duration) {

    if (duration < 6) {
        return 1000
    } else {
        return 1500
    }
}