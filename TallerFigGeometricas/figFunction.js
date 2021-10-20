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

/**CUADRADO */
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); //Llamando al valor que escribirán los usuarios desde el html
    const value = input.value; //Solo se necesita su valor por ello se usa el input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const entrada = document.getElementById("InputCuadrado")
    const value = entrada.value;
    const area = areaCuadrado(value);
    alert(area);
}

/**TRIANGULO */
function calcularPerimetroTriangulo() {
    const value1 = parseFloat(document.getElementById("InputLado1").value);
    const value2 = parseFloat(document.getElementById("InputLado2").value);
    const value3 = parseFloat(document.getElementById("InputLado3").value);
    const perimeter = perimetroTriangulo(value1, value2, value3);
    alert(perimeter);
}

function calcularAreaTriangulo() {
    const base = parseFloat(document.getElementById("InputBase").value);
    const altura = parseFloat(document.getElementById("InputAltura").value);
    const area = areaTriangulo(base, altura);
    alert(area);
}

/** CIRCULO */
function calcularPerimetroCirculo() {
    const radio = parseFloat(document.getElementById("InputRadio").value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro)
}
function calcularAreaCirculo() {
    const radio = parseFloat(document.getElementById("InputRadio").value);
    const area = areaCirculo(radio);
    alert(area);
}