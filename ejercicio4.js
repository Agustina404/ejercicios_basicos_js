//EJERCICIO1
const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
let remove1 = 3 //ubicacion del elemento a eliminar
let remove2 = 1 //numero de elementos a eliminar
aldeanos.splice(remove1, remove2)
console.log(aldeanos)

//EJERCICIO2
const aldeanos1 = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
aldeanos1.splice(5, 1, 'Cervasio') // ubicacion 5, elementos que añadiremos 1, lo que añadiremos
console.log(aldeanos1)

//EJERCICIO3
const aldeanos2 = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
aldeanos2.splice(0, 1, 'Bambina') // ubicacion de lo que quitaremos, cantidad de elementos que añadiremos y lo que añadiremos.
console.log(aldeanos2)

//EJERCICIO4
const aldeanos3 = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
aldeanos3.reverse()
console.log(aldeanos3)

//EJERCICIO5
const aldeanos4 = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
const sustitucion = aldeanos4.indexOf('Narciso')
if (sustitucion !== -1) {
  aldeanos4[sustitucion] = 'Canela'
}
console.log(aldeanos4)

//EJERCICIO6

const aldeanos5 = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
const ultimoElemento = aldeanos5[aldeanos5.length - 1] // -1 es referente al ultimo elemento del array
console.log(ultimoElemento)
