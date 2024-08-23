const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

let usuariosMayores = []
let usuariosMenores = []

for (const age of users) {
  if (age.years >= 18) {
    usuariosMayores.push(age)
  } else {
    usuariosMenores.push(age)
  }
}

console.log(
  'Usuarios menores de edad: ' + JSON.stringify(usuariosMenores, null, 2)
)
console.log(
  'Usuarios mayores de edad: ' + JSON.stringify(usuariosMayores, null, 2)
)
