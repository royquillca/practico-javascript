// Codigo del Cuadrado
console.group("Cuadrado");

function areaCuadrado(lado){
    // this.areaCuadrado = areaCuadrado;
    return lado*lado;
};

function perimetroCuadrado(lado) {
    // this.perimetroCuadrado=this.perimetroCuadrado;
    return 4*lado;
};
// console.log(`El cuadrado de lado ${this.lado} tiene: \nPerímetro igual a ${this.perimetroCuadrado} \nÁrea igual a: ${this.areaCuadrado}cm^2`);
console.groupEnd();

//Codigo del Triángulo

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base*altura)*0.5;
}

console.groupEnd();

//Codigo del Circulo

console.group("Circulo");

function diametroCirculo(radio) {
    return 2*radio;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro*Math.PI;
}
function areaCirculo(radio) {
     return Math.PI*Math.pow(radio,2);
 }
// console.log("El area del circulo de radio igual a " + radio + ", tiene un perímetro de "+ perimetroCirculo + ", y un área de "+ areaCirculo );
console.groupEnd();


// Aqui empezamos a interactuar con el HTML figuras.html
function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
}
function calcularAreaCuadrado(params) {
    
}