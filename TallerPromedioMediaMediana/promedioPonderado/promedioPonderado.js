/** Promedio ponderado en javascript */

/** Definir el conjunto de números junto al peso de cada elemento */

const notes =  [
    {
        course: "Matemática",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

/**Multiplicar cada número de la lista por su peso */

const notesWithCredit = notes.map(
    function(noteObject) {
        return noteObject.note * noteObject.credit;
    }
);


/**Sumar todos los elementos del arreglo de elementos multiplicados por su peso */
// La funcion reduce recibe dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con cero) y el nuevo elemento de los arrays

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

/** Sumar todos los pesos (créditos) */

const credits = notes.map(
    function (noteObject) {
        return noteObject.credit;
    }
);

// Usamos reduce: Aplica la función pasada como parámetro a un acumulador y a cada valor del array, que se recorre de izquierda a derecha, para reducirlo a un único valor.
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

/** Hacer la división entre ambas “sumas” */
// Ahora lo que nos falta es dividir nuestra variable sumOfNotesWithCredit sobre la variable sumOfCredits.

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;


