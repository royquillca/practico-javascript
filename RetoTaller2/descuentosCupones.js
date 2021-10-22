// var cantidad, precio, desc, compra, pagar;
// precio = parseFloat(prompt("Ingresa Precio: "));
// cantidad = parseFloat(prompt("Ingresa Cantidad: "));
// compra = precio*cantidad;
// desc = compra*0.15;
// pagar = compra - desc;
// document.write("El descuento es: "+ desc);
// document.write("El monto total a pagar es: " + pagar);

/**PROBLEMATICA: Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.
 * PASOS PARA SOLUCIONAR:
 * Creacion de un array con cada cupón
 * Cambair el input de descuento en html por un input de cupones
 * Uso del condicional switch para aplicar cierto % de descuento en los producto dependiendo del cupon que hayan elegido al preisonar el boton del formulario
 */


/************************************ CREACION DE UN ARRAY **************************************/
const coupons = [
    "royquillca",
    "royandy",
    "quillcapacco",
];
/**************************************CAMBIAR EL INPUT DE DESCUENTO POR UNOS CUPONES */
const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

/**Crear una variable descuento y asignarle un valor distinto con un switch */

function onClickButtonPrice() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    function calcularPrecioConDescuento(precio, descuento) {
        const precioConDescuento = precio * ((100-descuento) / 100);
        return precioConDescuento
    };
    
    switch (couponValue) {
        case coupons[0]: //royquillca
            descuento = 15;
        break;
        case coupons[1]://royandy
            descuento = 30;
        break;
        case coupons[2]://quillcapacco
            descuento = 25;
        break;
    };
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con el MEJOR DESCUENTO es: $" + precioConDescuento+ " APROVECHA QUE ESPERAS ";
};

// THE END :) 🐛🦆🤔
 



/**Solución #2: legibilidad, error first y muerte al switch */
/**
 * Legibilidad es la facilidad que ofrece nuestro código para entenderlo sin tropiezos cuando lo leemos. Mejorar la legibilidad es mucho más importante que reducir la cantidad de líneas de código.
 * Además, error-first es un patrón de programación donde atrapamos los errores antes de escribir el resto de la lógica de nuestros programas. Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro código (es completamente válido tener otra opinión, no te preocupes, cuéntame en los comentarios).
 */
 // Error first con array.includes
if (!coupons.includes(couponValue)){
    alert("El cupón " + couponValue + " no es válido");
}

/**Ya que estamos usando un condicional if, podemos reescribir el resto del condicional switch, pero en este caso usaremos condicionales else if: */

if (!couponsincludes(couponValue)) {
    alert("El cupón " + couponValue + " no es válido")
} else if (couponValue == "royquillca") {
    descuento = 15;   
} else if (couponValue == "royandy"){
    descuento = 30;
} else if(couponValue == "quillcapacco"){
    descuento = 25;
}


/**Ya usamos uno de los muchos métodos de los arrays para aplicar error first. Pero podemos usar algunos más para simplificar aún más nuestro código.
 * Recuerda que mejorar la legibilidad no (necesariamente) significa reducir líneas de código.
 * Array de cupones 2.0: ahora también con los descuentos
 * Por ahora tenemos muy separada la lógica de nuestros cupones. Por un lado tenemos la lista de cupones, pero en otro lugar distinto definimos el descuento de cada cupón.
 * Vamos a cambiar eso convirtiendo nuestro array de strings en un array de objetos (con el nombre y descuento de cada cupón en el mismo lugar): */

const coupons  = [
    { name: "royquillca", discount = 15,},
    { name: "royandy", discount = 30, },
    { name: "quillcapacco", discount = 25,},
];

/**Ahora la función array.includes dejó de funcionar, pero podemos reemplazarla por la función array.find() para validar si el cupón que escribió el usuario está guardado en la propiedad name de alguno de los objetos en la lista de cupones.
 * Vamos a crear una variable isUserCouponValueValid con una función que valide si su parámetro coupon es igual a nuestra variable userCouponValue. Y esta variable la vamos a enviar como parámetro a nuestra función array.find(). */

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};
const userCoupon = coupons.find(isCouponValueValid);
if (!userCoupon){
    alert("El cupon " + userCouponValue + "no es válido !")
};
/** Pero fíjate que ya tenemos nuestro cupón (con nombre y descuento) disponible en la nueva variable userCoupon.
 * Podemos aprovechar esta variable para eliminar todos nuestros condicionales else if y cambiarlos por un condicional else que nos proporcione el porcentaje de descuento automáticamente, sin importar el cupón (válido) que estén usando nuestros usuarios.
 */
if(!userCoupon) {
    alert("El cupon " + userCouponValue + " no es vállido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de $" + precioConDescuento;
}