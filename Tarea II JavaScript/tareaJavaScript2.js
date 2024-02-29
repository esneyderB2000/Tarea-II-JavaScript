const arreglo1 = (callback) => {
    const array = [1, 2, 3, 4, 5];
    return callback ? callback(array) : array;
};
// Metodo 1: Invertir el arreglo
const invertirArreglo = (arreglo) => arreglo.reverse();


const arreglo2 = (callback) => {
    const array = ["a", "b", "c", "d", "e"];
    return callback ? callback(array) : array;
};
// Metodo 2: Obtener el primer elemento del arreglo
const primerElemento = (arreglo) => arreglo[0];


const arreglo3 = (callback) => {
    const array = [true, false, 5, 6, 22, 2];
    return callback ? callback(array) : array;
};
// Metodo 3: Filtrar los elementos "true" y numeros mayores que 5 
const filtrarMayoresQue5 = (arreglo) => arreglo.filter(elemento => elemento > 5 || elemento == true);


const arreglo4 = (callback) => {
    const array = [10, 20, 30, 40, 50];
    return callback ? callback(array) : array;
};
// Metodo 4: Sumar todos los elementos del arreglo
const sumarElementos = (arreglo) => arreglo.reduce((total, elemento) => total + elemento, 0);


const arreglo5 = (callback) => {
    const array = ["apple", "banana", "orange", "grape", "kiwi"];
    return callback ? callback(array) : array;
};
// Metodo 5: Convertir los elementos del arreglo a mayúsculas
const convertirAMayusculas = (arreglo) => arreglo.map(elemento => elemento.toUpperCase());


const arreglo6 = (callback) => {
    const array = [5, 10, 15, 20, 25];
    return callback ? callback(array) : array;
};
// Metodo 6: Multiplicar cada elemento por 2
const multiplicarPor2 = (arreglo) => arreglo.map(elemento => elemento * 2);


const arreglo7 = (callback) => {
    const array = [0, 1, 1, 2, 3, 5, 8, 13];
    return callback ? callback(array) : array;
};
// Metodo 7: Ordenar el arreglo de forma descendente
const ordenarDescendente = (arreglo) => arreglo.sort((a, b) => b - a);


const arreglo8 = (callback) => {
    const array = ["red", "green", "blue", "yellow", "purple"];
    return callback ? callback(array) : array;
};
// Metodo 8: Contar la cantidad de elementos impares en el arreglo
const contarImpares = (arreglo) => arreglo.filter(elemento => elemento % 2 !== 0).length;


const arreglo9 = (callback) => {
    const array = [100, 200, 300, 400, 500];
    return callback ? callback(array) : array;
};
// Metodo 9: Encontrar el índice del elemento "yellow" en el arreglo
const indiceDeYellow = (arreglo) => arreglo.indexOf("yellow");


const arreglo10 = (callback) => {
    const array = [2.5, 5.0, 7.5, 10.0, 12.5];
    return callback ? callback(array) : array;
};
// Metodo 10: Crear un nuevo arreglo con elementos que sean la mitad de los originales
const mitadDeElementos = (arreglo) => arreglo.map(elemento => elemento / 2);

// Imprimir resultados
const imprimirArreglo = (nombre, arreglo) => {
    console.log(`${nombre}: [${arreglo.join(", ")}]`);
};
imprimirArreglo("Arreglo 1 invertido", arreglo1(invertirArreglo));
console.log("Primer elemento del Arreglo 2:", arreglo2(primerElemento));
imprimirArreglo("Arreglo 3 filtrado (true y mayores que 5)", arreglo3(filtrarMayoresQue5));
console.log("Suma de elementos del Arreglo 4:", arreglo4(sumarElementos));
imprimirArreglo("Arreglo 5 en mayusculas", arreglo5(convertirAMayusculas));
imprimirArreglo("Arreglo 6 multiplicado por 2", arreglo6(multiplicarPor2));
imprimirArreglo("Arreglo 7 ordenado de forma descendente", arreglo7(ordenarDescendente));
console.log("Cantidad de elementos impares en el Arreglo 8:", arreglo8(contarImpares));
console.log("Índice del elemento 'yellow' en el Arreglo 9:", arreglo9(indiceDeYellow));
imprimirArreglo("Arreglo 10 con elementos a la mitad", arreglo10(mitadDeElementos));