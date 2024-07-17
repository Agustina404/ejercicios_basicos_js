const jedi = { nombre: 'Luke Skywalker', edad: 19 }

jedi.edad = 25

console.log(jedi)

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

const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

let total = sable1.precio + sable2.precio
console.log('El precio total de los dos sables es: ' + total)
