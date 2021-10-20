
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