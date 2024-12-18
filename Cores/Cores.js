const btnm = document.getElementById("btnmodo");
const corpo = document.body;
const tit = document.getElementById("tith1");
const desc = document.getElementById("desp");

const darkm = document.getElementById("darkmode");
const lightm = document.getElementById("lightmode");

let estilo = localStorage.getItem("estilo") || "claro";

function clicado() {
    if (estilo === "claro") {
        corpo.style.background = "black";
        tit.style.color = "white";
        desc.style.color = "white";
        darkm.style.display = "none";
        lightm.style.display = "block";
        lightm.style.color = "white";
        lightm.style.background = "black";

        tit.innerHTML = 'Modo Escuro!!!';
        desc.innerHTML = 'Clique no botão para mudar para o modo claro';

        estilo = "escuro";
    } else {
        corpo.style.background = "white";
        tit.style.color = "black";
        desc.style.color = "black";
        lightm.style.display = "none";
        darkm.style.display = "block";
        darkm.style.color = "black";
        darkm.style.background = "white";

        tit.innerHTML = 'Modo Claro!!!';
        desc.innerHTML = 'Clique no botão para mudar para o modo escuro';

        estilo = "claro";
    }

    localStorage.setItem("estilo", estilo);
}

window.onload = () => {
    if (estilo === "escuro") {
        corpo.style.background = "black";
        tit.style.color = "white";
        desc.style.color = "white";
        darkm.style.display = "none";
        lightm.style.display = "block";
        lightm.style.color = "white";
        lightm.style.background = "black";

        tit.innerHTML = 'Modo Escuro!!!';
        desc.innerHTML = 'Clique no botão para mudar para o modo claro';
    } else {
        corpo.style.background = "white";
        tit.style.color = "black";
        desc.style.color = "black";
        lightm.style.display = "none";
        darkm.style.display = "block";
        darkm.style.color = "black";
        darkm.style.background = "white";

        tit.innerHTML = 'Modo Claro!!!';
        desc.innerHTML = 'Clique no botão para mudar para o modo escuro';
    }
}
