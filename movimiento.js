const slider = document.querySelector(".slider-container");

const pantallas = document.querySelectorAll(".pantalla");

let posicionActual = 0;

let moviendo = false;


/* =========================
   CREAR BOTÓN ANTERIOR
========================= */

const botonAnterior = document.createElement("button");

botonAnterior.className = "slider-anterior";

botonAnterior.innerHTML = "‹";

document.body.appendChild(botonAnterior);


/* =========================
   CREAR BOTÓN SIGUIENTE
========================= */

const botonSiguiente = document.createElement("button");

botonSiguiente.className = "slider-siguiente";

botonSiguiente.innerHTML = "›";

document.body.appendChild(botonSiguiente);


/* =========================
   CREAR INDICADORES
========================= */

const indicadores = document.createElement("div");

indicadores.className = "slider-indicadores";

document.body.appendChild(indicadores);


for (let i = 0; i < pantallas.length; i++) {

    const indicador = document.createElement("button");

    indicador.className = "indicador";

    indicador.addEventListener("click", function() {

        irASeccion(i);

    });

    indicadores.appendChild(indicador);
}


/* =========================
   INDICADOR ACTIVO
========================= */

function actualizarIndicadores() {

    const todos = document.querySelectorAll(".indicador");

    todos.forEach(function(indicador, indice) {

        if (indice === posicionActual) {

            indicador.classList.add("activo");

        } else {

            indicador.classList.remove("activo");

        }

    });

}


/* =========================
   MOVER SLIDER
========================= */

function irASeccion(numero) {

    if (numero < 0) {

        numero = 0;

    }


    if (numero >= pantallas.length) {

        numero = pantallas.length - 1;

    }


    posicionActual = numero;


    slider.scrollTo({

        left: window.innerWidth * posicionActual,

        behavior: "smooth"

    });


    actualizarIndicadores();

}


/* =========================
   BOTÓN ANTERIOR
========================= */

botonAnterior.addEventListener("click", function() {

    if (posicionActual > 0) {

        irASeccion(posicionActual - 1);

    }

});


/* =========================
   BOTÓN SIGUIENTE
========================= */

botonSiguiente.addEventListener("click", function() {

    if (posicionActual < pantallas.length - 1) {

        irASeccion(posicionActual + 1);

    }

});


/* =========================
   RUEDA DEL MOUSE
========================= */

slider.addEventListener("wheel", function(evento) {

    if (moviendo) {

        return;

    }


    if (evento.deltaY > 0) {

        if (posicionActual < pantallas.length - 1) {

            evento.preventDefault();

            moviendo = true;

            irASeccion(posicionActual + 1);

        }

    }


    else if (evento.deltaY < 0) {

        if (posicionActual > 0) {

            evento.preventDefault();

            moviendo = true;

            irASeccion(posicionActual - 1);

        }

    }


    setTimeout(function() {

        moviendo = false;

    }, 700);

}, {
    passive: false
});


/* =========================
   TECLADO
========================= */

document.addEventListener("keydown", function(evento) {

    if (evento.key === "ArrowRight") {

        if (posicionActual < pantallas.length - 1) {

            irASeccion(posicionActual + 1);

        }

    }


    if (evento.key === "ArrowLeft") {

        if (posicionActual > 0) {

            irASeccion(posicionActual - 1);

        }

    }

});


/* =========================
   ACTUALIZAR AL CAMBIAR TAMAÑO
========================= */

window.addEventListener("resize", function() {

    slider.scrollTo({

        left: window.innerWidth * posicionActual,

        behavior: "instant"

    });

});


/* =========================
   INICIAR
========================= */

actualizarIndicadores();