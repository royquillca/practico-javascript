/**Metodo sort()  */
// Arreglo de numeros: Ordenando de mayor a menor
const arreglo = [75, 49, 23, 23,  10, 110];

// Usando un callbak
arreglo.sort((a, b) => {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1
    }
    return 1
});
console.log(arreglo);


/** Otra forma: */

let l = [2, 4, 20, 19, 11];
function compare(a,b) {
    return a-b;
}
l.sort(compare);
console.log(l);

// Arreglo de strings

arrayAlphabet = ["Eva", "roy", "Roy" ,"abelito", "Abelito", "Zamuel"];

// Usando un callbak
arrayAlphabet.sort((a, b) => {
    // Para evitar los inputs del Array con mayusculas lo convertimos a y b en minusculas
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1
    }
    return 1
});

console.log(arrayAlphabet);

/** */