const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  let suma = 0
  numberList.forEach(function (number) {
    suma += number
  })
  return suma / 7
}

console.log(average(numbers))
