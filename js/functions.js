// Lista de acciones posibles
const bolasParaSorteo = [
    "Cambia con quien está a tu derecha.",
    "Cambia con quien está a tu izquierda.",
    "Cambia con el que esté al frente.",
    "Todos cambian con quien está a tu derecha.",
    "Todos cambian con quien está a tu izquierda.",
    "Todos cambian con el que esté al frente.",
    "Cambiar con quien tú quieras.",
    "Reordenar los regalos.",
    "Todos cambian con quien quieran.",
    "No pasa nada.",
    "Tú y tu pareja reorganizan.",
    "Todos toman un shot.",
    "El de tu derecha toma shot.",
    "Elige quién toma un shot.",
    "Tú y tu pareja cambian.",
    "Tú y tu pareja toman shot.",
    "Elige qué pareja cambia.",
    "Tú tomas shot.",
    "Tu pareja toma shot."
];

// Lista de acciones ya sorteadas
const bolasSorteadas = [];

// Función para mostrar la bolita
function mostrarBolita() {
    if (bolasParaSorteo.length === 0) {
        document.getElementById("topic").innerHTML = "¡No quedan más bolitas!";
        return;
    }
    
    // Sacar una bolita aleatoria
    const bolaEnJuego = agarraLaBolita();
    
    // Mostrar la bolita
    document.getElementById("topic").innerHTML = bolaEnJuego;
    
    // Guardar la bolita sorteada
    bolasSorteadas.push(bolaEnJuego);
}

// Función para agarrar una bolita aleatoria
function agarraLaBolita() {
    const cantidadDisponible = bolasParaSorteo.length;
    const indiceAleatorio = Math.floor(Math.random() * cantidadDisponible);
    return bolasParaSorteo.splice(indiceAleatorio, 1)[0];
}
