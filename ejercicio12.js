const list = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(list) {
  return [new Set(list)]
}

let newList = removeDuplicates(list)

console.log(newList)
