// // Solución #2: legibilidad, error first y muerte al switch

// /**
//  * Error first con array.includes
// La función array.includes() nos permite validar si un elemento ha sido 
// almacenado en el array. Vamos a usar esta función para ejecutar un error
// si el cupón de los usuarios es inválido (no fue guardado en el array coupons):
 
//  */

// const coupons = [
//     "royquillca",
//     "royandy",
//     "quillcapacco",
// ];

// if (!coupons.includes(couponValue)) {
//     alert(`El cupon ${couponValue} no es válido`);
// } else if (couponValue === "royquillca") {
//     descuento = 15;
// } else if (couponValue === "royandy") {
//     descuento = 30;
// } else if (couponValue === "quillcapaco") {
//     descuento = 25;
// };

// SOLUCION #3:
/**METODO: Convertiremos nuestro array de strings a un array de objetos */

const coupons = [
    {
        name: "royquillca",
        discount: 15,
    },
    {
        name: "royandy",
        discount: 30,
    },
    {
        name: "quillcapacco",
        discount: 25,
    },
];

/** Validadremos si el input del usuario està guardado en la propiedad name de alguno delos objetos en la lista de coupons */

const isCouponValueValid = function (coupon) {
     return coupon.name === couponValue;
};


const userCoupon = coupons.find(isCouponValueValid);

if (!isCouponValueValid) {
    alert(`El cupón de descuento ${userCoupon} no es válido`);
}


/**
 Ahora ya tenemos nuestro cupón (con nombre y descuento) disponible en la nueva variable userCoupon.
 Podemos aprovechar esta variable para elimar nuestras condicinales else if (de la solucion #2) y 
 y cambiarlos por la condicional else que nos proporcione el descuento automáticamente, sin importar
 el cupón (válido) que estén usando nuestros usuarios.
 */

if (!userCoupon) {
    alert(`El cupón ${userCoupon} no es válido`);
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento son $${precioConDescuento}`
}