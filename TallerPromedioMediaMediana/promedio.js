// const lista1 = [100, 200, 300, 400, 500];

// let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++) {
    //     sumaLista1 += lista1[i];
    // }
    
    // const promedioLista1 = sumaLista1 / lista1.length;
    
const lista1 = [600, 200, 400];

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

document.write(calcularMediaAritmetica(lista1));