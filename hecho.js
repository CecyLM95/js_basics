
//sonia?
console.log("1.datatypes: ?? Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var num1 = 5;
var num2 = 5;

 // true  //Comparacion normal, mira solo el valor
 console.log(num1 == num2);
 if (num1 == num2){
     console.log ("Son iguales")
 }else {
     console.log ("No son iguales")
 }

//crear dos variables con el distinto contenido y comparar si ambas son iguales

var num3 = 9;
console.log(num1 == num3);

//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
var cadena ="1";
var numero = 1;

if (cadena==numero) {
    console.log ("Son iguales")
} else {
    console.log ("No son iguales")
}


//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
//comparacion estricta mira el valor y el tipo

//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
var array1 = [1,2,3];
var array2 = [1,2,3];
var cont=0;

if (array1 ==array2) {
    console.log ("Son iguales")
} else {
    console.log ("No son iguales")
}

// crear un objeto "usuario", con tres propiedades
var movil = {
    Marca:"Alcatel",
    Pantalla: "5 pulgadas",
    Color:"Negro",}; //Crear objeto

var movil2 = new Object(); //Otra manera de crear objeto
movil.Marca="Alcatel";
movil.Peso="5 onzas";
movil.Pantalla="5 pulgadas";
movil.Color="Negro";

//Otra manera
const usuario ={
    prop1: "asdf",
    prop2: 123,
};

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
const GRAV = 9.8;
console.log("Gravedad: "+GRAV+ "Redondeo: "+Math.round(GRAV));
//incrementar una variable con otra variable con el operador  +=
console.log(num1+=num2);
num1-=num2;
//eleva un número a otro utilizando **
console.log(num1**num2);
//eleva un número a otro utilizando un bucle
var resultado=1;
for (let index = 0; index < num2; index++) {
    resultado = resultado*num1;
}
console.log(num1 + "^"+ num2+ "="+ resultado);

// generar un número aleatorio del 0 al 100
var aleatorio= Math.random() * 101 + 0;
console.log(aleatorio);
// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo
var arrayNumAleatorio= new Array(10);
var max=0;
var min=0;
for (let index = 0; index < arrayNumAleatorio.length; index++) {
     arrayNumAleatorio[index]= Math.random() * 101 + 0;;
     console.log(arrayNumAleatorio[index]);
     if(min==0){
         min=arrayNumAleatorio[index];
         
     }
     if(max<arrayNumAleatorio[index]){
         max=arrayNumAleatorio[index];
     }

     if(min>arrayNumAleatorio[index]){
        min=arrayNumAleatorio[index];
    }
}
console.log("El numero más grande ha sido: "+ max + " El numero más pequeños ha sido: "+min);

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
var arrayNumAleatorio= new Array(10);
for (let index = 0; index < arrayNumAleatorio.length; index++) {
    arrayNumAleatorio[index]= Math.random() * 101 + 0;;
    console.log( arrayNumAleatorio[index]);
}
var minimo= Math.min(...arrayNumAleatorio); //Sin los puntos suspensivos, devuelve NAN
var maximo= Math.max(...arrayNumAleatorio);
console.log("El numero más grande ha sido: "+ maximo + " El numero más pequeños ha sido: "+minimo);




/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
var cadena1= "Primera cadena de caracteres";
console.log(cadena1.toUpperCase());
console.log(cadena1.toLowerCase());

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
var remplazo= "Pascal es un lenguaje de programación moderno";
console.log(remplazo);
console.log(remplazo.replace("Pascal","JavaSacript"));

//crear una variable con frase/cadena de caracteres y comprobar la longitud
var long="Pascal es un lenguaje de programación moderno";
console.log(long.length);

//eliminar "script" de la palabra Javascript con el método substr
var long="JavaScript";
console.log(long.substring(0,4));

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
var contener= "Espero que esto me sirva para algo";
console.log(contener.includes("algo"));