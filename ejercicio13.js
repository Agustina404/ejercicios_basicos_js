const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, name) {
  let nameExist = nameList.includes(name)

  return nameExist
}
let nameTofind = 'Peter'
let result = nameFinder(names, nameTofind)

console.log(result)

if (result) {
  let index = names.indexOf(nameTofind)
  console.log(`Found at index: ${index}`)
} else {
  console.log('Not found')
}
