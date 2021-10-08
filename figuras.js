//CÓDIGO DEL CUADRADO

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado  = 4*ladoCuadrado;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm^2");

const areaCuadrado  =  Math.pow(areaCuadrado, 2);
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// CODIGO DEL TRIÁNGULO

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 5;
console.log(
    "Los lado del triángulo miden: "
    + ladoTriangulo1
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo
    + "cm "
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm^2");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2; // Primero ejecuta las operaciones dentro de los paréntesis
console.log("El area del triángulo es:" + areaTriangulo + "cm^2");

console.groupEnd();
// CODIGO DEL CIRCULO
console.group("Circulo");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = 2*radioCirculo;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// PI
// const PI  = 3.1415;
const PI = Math.PI;
console.log("PI tiene un valor de: " + PI);
//circunferencia
const perimetroCirculo = 2*PI*radioCirculo;
console.log("El perímetro de la circunferencia/circulo es: " +  perimetroCirculo + "cm");
//Area
const areaCirculo = PI*Math.pow(radioCirculo, 2);
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.group();

