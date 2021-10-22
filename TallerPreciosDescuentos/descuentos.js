
// const precioOriginal = 100;
// const descuento = 15;
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}

//Se llama a la funcion creada en el HTML  con onclick() ->   calcPriceWithDiscount()
function calcPriceWithDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;
    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    const resultP = document.getElementById("ResultP"); // No se le coloca se le aplica la funcion .value porque no se trata de un input sino es un párrafo en el HTML
    
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;
    
    console.log(precioConDescuento);

}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });