function tema() {
    document.body.classList.toggle("escuro");
}

let tamanho = 16;

function maisFonte() {
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
}

function menosFonte() {
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
}

function abrir() {
    const texto = document.getElementById("texto1");

    if (texto.style.display == "block") {
        texto.style.display = "none";
    }
    else {
        texto.style.display = "block";
    }
}