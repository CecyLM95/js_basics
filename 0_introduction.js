console.log("0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios básicos introductorios a Javascript");

//Crear una variable para almacenar tu nombre
var nombre = "Cecilia";
//Crear una variable para almacenar tus apellidos
var apellido1 = "López";
var apellido2 = "Muñiz";
//Crear una variable para almacenar tu edad
var edad=26;
//Almacenar en una constante tu nombre y apellidos
const NOMBREYAPELLIDOS = "Cecilia López Muñiz";
//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
console.log("Hola, mi nombre es: " + NOMBREYAPELLIDOS);
console.log('Hola, mi nombre es: $ {NOMBREYAPELLIDOS}');
//Muestra por pantalla el valor de una constante vacía
const vacio=null;
console.log (vacio);
//Muestra por pantalla el valor de una constante sin definir
//console.log (NOEXISTE);
//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla
//NOMBREYAPELLIDOS="Reescrito";
//console.log (NOMBREYAPELLIDOS);
//Comprueba el tipo de dato de la variable con tu edad
console.log (typeof (edad));
//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorDeEdad = false;
if (edad>=18) {
    let mayorDeEdad=true;
}
console.log (mayorDeEdad);
//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
//var mayorDeEdad= false;
var mayorDeEdad1= false;
if (edad>=18) {
   var mayorDeEdad1=true;
}
console.log (mayorDeEdad1);
//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
var num1=2;
var num2= 4;

var suma= num1 + num2;
console.log("Suma" + suma);

var resta = num1 - num2;
console.log("Resta" + resta);

var multiplicación = num1 * num2;
console.log("Multiplicacion" + multiplicación);

var division= num1/num2;
console.log ("Division" + division);

var resto = num2%num1;
console.log ("Resto" + resto);

//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
var Operaciones=['+','-','*','/'];
console.log (Operaciones[0]);//Para sacar posiciones del array
var resultado ="";
for (elemento of Operaciones){
    switch (elemento) {
        case '+':
            resultado='SUMA: ' + (num1+num2);
            break;
        case '-':
            resultado='RESTA: ' + (num1-num2);
        break;
        case '*':
            resultado='MULTIPLICACION: ' + (num1*num2);
            break;
        case '/':
            resultado='DIVISION: ' + (num1/num2);
        break;
        default:
            break;
    }
    console.log('resultado: ' + resultado);
}
//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
var altura= 9;
var base = 8;
var area= base * altura/2;
console.log ("El area del triangulo es: " + area);

//Calcular el área de una circunferencia para un radio dado
var radio=9;
var areaCircunferencia= Math.PI * Math.pow (radio,2);
console.log ("El area de la circunferencia es: " + areaCircunferencia);

//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores
var masa=9;
var altura=6;
const GRAVEDAD= 9.8;

var tiempoDeCaidaLibre = Math.sqrt(2*altura/GRAVEDAD);
console.log ("El tiempo de caida libre es: " + tiempoDeCaidaLibre);
//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
var DIAMETROTIERRA=12742000;
var volumenTierra=4/3 * Math.PI * Math.pow(DIAMETROTIERRA/2,3);
const DIAMETROLUNA = 3478800;
var volumenLuna= 4/3 * Math.PI * Math.pow (DIAMETROTIERRA/2,3);


let string= "Esto es un cadena "
console.log (string[1]);
//Recorre la cadena