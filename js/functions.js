/*const getRandomTopic = function () {
    readTextFile("js/topics.json", function (fileContent) {
        const data = JSON.parse(fileContent)
        document.getElementById("topic").innerHTML = data.topics[ Math.floor((Math.random() * data.topics.length) + 0) ];
    })
}

function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}*/

//crear contenedor de bolitas con las bolitas

const  bolasParaSorteo=
["Cambia con quien esta a tú derecha.",
"Cambia con quien esta a tú izquierda.",
"Cambia con el que este al frente.",
"Todos cambian con quien esta a tú derecha.",
"Todos cambian con quien esta a tú izquierda.",
"Todos cambian con el que este al frente.",
"Cambiar con quien tú quieras.",
"Cambiar con quien tú quieras.",
"Cambiar con quien tú quieras.",
"Cambiar con quien tú quieras.",
"Re ordenar los regalos.",
"Todos cambian con quien quieran.",
"No pasa nada.",
"No pasa nada.",
"No pasa nada.",
"Tú y tú pareja reorganizan.",
"Todos toman un shot.",
"El de tú derecha toma shot.",
"Elije quien toma un shot.",
"Tú y tú pareja cambian.",
"Tú y tú pareja toman Shot.",
"Elige que pareja cambia.",
"Tú tomas shot.",
"Tú tomas shot.",
"Tú tomas shot.",
"Tú tomas shot.",
"Tú y tú pareja toman Shot.",
"Tú y tú pareja toman Shot.",
"Tú pareja toman Shot.",
"Tú pareja toman Shot.",

]

//crear contenedor de bolitas que ya salieron 

const  bolasSorteadas=[]

//mostrar las bolitas

const mostrarBolita = function () {
    //sacar la primera blita de la lista
    const bolaEnJuego = agarraLaBolita()
    //mostrar la bolita
    document.getElementById("topic").innerHTML = bolaEnJuego
    //mandar la bola sorteada a las que ya salieron
    bolasSorteadas.push(bolaEnJuego)
}
//saca aleatoriamente la bolita desde las bolas disponibles para el sorteo
function agarraLaBolita( ) {
    const cantidadDisponible = bolasParaSorteo.length
    const indiceAleatorio = Math.random() * (cantidadDisponible - 0) + 0;
    return bolasParaSorteo.splice(indiceAleatorio,1)[0]
} 
