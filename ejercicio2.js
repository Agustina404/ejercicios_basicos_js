//EJERCICIO 1
const jedi = { nombre: 'Luke Skywalker', edad: 19 }

jedi.edad = 25

console.log(jedi)

//EJERCICIO2

let nombre = 'Leia'
let apellido = ' Organa'
let edad = 20
console.log(
  'Soy ' +
    nombre +
    apellido +
    ', tengo ' +
    edad +
    ' y soy una princesa de Alderaan.'
)

//EJERCICIO 3

const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

let total = sable1.precio + sable2.precio
console.log('El precio total de los dos sables es: ' + total)

//EJERCICIO 4

let precioBaseGlobal = 25000

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

let totalNave1 = precioBaseGlobal + nave1.precioBase
let totalNave2 = precioBaseGlobal + nave2.precioBase
console.log(
  'El precio final de Ala-X es = ' +
    totalNave1 +
    ' y el precio final de Halcón Milenario es = ' +
    totalNave2
)
