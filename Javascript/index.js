//console.log('hola Mundo')
let miPrimeraVariable = 'Mi primera variable!'
//console.log(miPrimeraVariable);
miPrimeraVariable = 'Esto ha cambiado';
//console.log(miPrimeraVariable);

let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable)

let undef
//console.log(undef);

let nulo = null
//console.log('nulo', nulo);

// objeto vacio no contiene ningun dato
const miPrimerObjeto = {}

// objeto
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}

//console.log (miObjeto.unNumero);

const arrVacio = []
const arr = [1, 2, 'hola', 'mundo', miObjeto]

//console.log(arrVacio, arr);

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('hola')
arrVacio.push(miPrimeraVariable)
//console.log(arrVacio);

//const suma = 1 + 2 
//const resta = 1 - 2 
//const multiplica = 2 * 3 
//const division =  9 / 3

//console.log(suma, resta, multiplica, division)

//const modulo = 10 % 3
//console.log(modulo);

//let num = 5
//num /=2
//console.log(num);
//Igualdad estricta
//const resultado1= 5 === 6
//igualdad no tan estricta
//const resultado2= 5 == '5'
//Estrictamente desigual.
//const resultado6 = 5 !== 6
//Not so strict desigual
//const resultado7 = 5 != '5' 

//console.log(resultado6, resultado7);

//const resultadoOR = false || false || 'hola' || 'mundo'
//const resultadoNot = !true
//console.log(resultadoOR);
//const edad = 5;
//if (edad > 5 && edad < 18) {
//console.log('podes jugar faloperito');
//} else {
    //console.log ('el faloperin no tiene edad')
//}

//let x = false
//while (x) {
    //console.log(x);
    //x++
//}

//function iterar (arg1) {
//for (let i = 0; i < arg1.length; i++) {
    //console.log(arg1[i]);


//const numeros = [1, 2, 3, 4, 5];
//const nombres = ['Pedro', 'juan', 'Felipe', 'Lucas', 'Omar'];


//iterar (numeros)
//iterar (nombres)

//function suma (a, b) {
    //return a + b;
//}

//const resultadoSuma1 = suma(1, 2)
//const resultadoSuma2 = suma(5, 6)
//const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)
//console.log('resultado', resultadoSuma3);

function sumar (a, b, cb)  {
    const r = a + b;
    
    cb(r)
}

function callback (result){
    console.log ('resultado', result);
}

//sumar (2, 3, callback)

const miFatArrowFunction = (a, b) => a + b
const otraFAF = (a, b) => {
    return a + b
}
//const r = otraFAF (1,2)
//console.log(r)

sumar(2, 3, function (r) {
console.log('soy una funcion anonima y mi resultado es', r);
})