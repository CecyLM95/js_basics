console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var num1=2;
var num2=2;
console.log(num1 == num2);

//crear dos variables con el distinto contenido y comparar si ambas son iguales
var num3 = 9;
console.log(num1 == num3);

//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
var str="5";
var num4=5;
console.log(str == num4); 

//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
console.log(str === num4);
//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales
//DESDE AQUI BIEEEEEEEN
var array1 = [1,1,3];
var array2 = [1,2,3];
var cont=0;

if (array1 ==array2) {
    console.log ("Son iguales")
} else {
    console.log ("No son iguales")
}

//ahora comparar el contenido de dichos arrays utilizando un bucle
var sonIguales= false;

for (let i = 0; i < array.length; i++) {
    if(array [i] != array2[i]){
    sonIguales = false;
    break;
    }
}
console.log (sonIguales);

// crear un objeto "usuario", con tres propiedades
var persona = new Object();
persona.colorPelo="Negro";
var usuario = {
    nombre: "Pepe",
    apellido: "Perez",
    email: "example@example.com"
};

console.log (persona.colorPelo);
console.log(usuario.email);
usuario.nombre="Paco";
console.log(usuario.nombre);

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
const gravedad = 9.81;
console.log (Math.round(gravedad));

//incrementar una variable con otra variable o número con el operador  +=, mostrar por pantalla la primera variable (la incrementada)
var variableX= 5;
var variableY= 10;

variableX + variableY;

console.log(variableX);

//eleva un número a otro utilizando **
console.log(variableX ** variableY);

//eleva un número a otro utilizando un bucle
var result=1;
var base=2;
var exponente=4;
for (let i = 0; i< exponente; i++) {
    result *= base;
}
    console.log(result);

// generar un número aleatorio del 0 al 100
var aleatorio = Math.random ()*101;
console.log(aleatorio.toFixed(2));

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo
var arrayAleatorios=[];
var max=0;
var min=0;

for (let index = 0; index < 10; index++) {
    var num = Math.random()*101;
    console.log(num);
    arrayAleatorios[index] = num;
    if (index==0) {
        min=num;
    }
    if (num>max) {
        max=num;
    }
    if (num<min) {
        min=num;
    }
    console.log("El maximo es " + max);
    console.log("El minimo es " + min);
}

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
console.log("El maximo con Math es " + Math.max.apply(null,arrayAleatorios));
console.log("El minimo con Math es " + Math.min.apply(null, arrayAleatorios));h

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
var cadena= "Primera cadena de caracteres";
var cadenamayus = cadena.toUpperCase();
console.log(cadenamayus);
var cadenaminus = cadenamayus.toLocaleLowerCase();
console.log(cadenaminus);

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
var pascal = "Pascal es un lenguaje de programación moderno";
var javaScript=pascal.replace("Pascal", "JavaScript");
console.log(pascal);
console.log(javascript);
var cadena1 = "dam dam dam";
var reempl = cadena1.replaceAll ("dam", "daw");
console.log(cadena1);
console.log(reempl);

//crear una variable con frase/cadena de caracteres y comprobar la longitud
console.log("");
var long = pascal.length;
console.log(long);

//eliminar "script" de la palabra Javascript con el método substr
var subs = javaScript.replace(javaScript.substring(4,10), "");
console.log("");
console.log(subs);

// Comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra algo"
var frase ="Espero que esto me sirva para algo";
console.log(frase.includes("algo"));
