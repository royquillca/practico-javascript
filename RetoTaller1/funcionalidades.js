//Calculo de la Altura del Triángulo
function alturaTriangulo(ladoIgual, base) {
    return Math.sqrt((ladoIgual*ladoIgual)-((base*base)/4));
}
function areaTriangulo(ladoIgual, base) {
    const altura = alturaTriangulo(ladoIgual, base);
    return base*altura*0.5;
}
function calcularAlturaTriangulo() {
    const ladoIgual = parseFloat(document.getElementById("InputLado").value);
    const base = parseFloat(document.getElementById("InputBase").value);
    const altura = alturaTriangulo(ladoIgual, base);
    alert(altura);
}
function calcularAreaTriangulo() {
    const ladoIgual = parseFloat(document.getElementById("InputLado").value);
    const base = parseFloat(document.getElementById("InputBase").value);
    const area = areaTriangulo(ladoIgual, base);
    alert(area);
}

// CONDICION DE VALIDACIÓN

function validacion(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {
        const altura = Math.sqrt((lado1**2)-((base**2)/4));
        alert("El triangulo es isóceles y su altura mide " + altura);
    } else {
        alert("El triángulo no es isósceles");
    }
}