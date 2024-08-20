const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function calcularSumaMezclado(arr) {
  let sumaNumeros = 0
  let sumaLongitudes = 0

  arr.forEach((element) => {
    if (typeof element === 'number') {
      sumaNumeros += element
    } else if (typeof element === 'string') {
      sumaLongitudes += element.length
    }
  })

  return {
    sumaNumeros,
    sumaLongitudes
  }
}

const resultado = calcularSumaMezclado(mixedElements)
console.log('Suma de numeros: ', resultado.sumaNumeros)
console.log('Suma longitudes de strings: ', resultado.sumaLongitudes)
