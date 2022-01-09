const lista = [1, 1, 2, 2, 3, 4, 5, 2, 5, 2, 7, 89, 89];

const listaCount = {};

lista.map(
    function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
);

// Cnvertimos de nuevo a array

/**
const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
        valorAcumulado[1] - nuevoValor[1]
    }
);

*/

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

//

const moda = listaArray[listaArray.length - 1][0]; // Devuelve el elemento moda como string