// Cuenta regresiva al 14 de febrero 2026
const fechaObjetivo = new Date("February 14, 2026 00:00:00").getTime();

const intervalo = setInterval(function () {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    if (diferencia < 0) {
        clearInterval(intervalo);
        document.getElementById("countdown").innerHTML = "¡Es 14 de febrero! 💘";
    }
}, 1000);


// Botón Sí
function respuestaSi() {
    document.getElementById("mensaje").innerHTML =
        "Sabía que dirías que sí, Deliany 😘💖";

    lanzarCorazones();
}


// Botón No que se mueve
function moverNo(boton) {
    const x = Math.random() * 250;
    const y = Math.random() * 250;

    boton.style.position = "absolute";
    boton.style.left = x + "px";
    boton.style.top = y + "px";
}


// Función para lanzar corazones
function lanzarCorazones() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

