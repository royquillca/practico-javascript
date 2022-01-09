/**Definimos nuestra lista */
const lista1 = [1, 300, 400, 5000, 340, 402];
/** Determinamos la mitad del tamaño de nuestra lista */

const mitadLista1 = parseInt(lista1.length / 2);

/** Validemos que nuestra lista es impar*/

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
/**
 * Preguntamos si lista1 tiene cantida de elementos par o impar
 */

let mediana;
if (esPar(lista1.length)) {
    mediana = (lista1[mitadLista1] + lista1[mitadLista1-1])*0.5;
} else {
    mediana = lista1[mitadLista1]
}
/** */
/** */
