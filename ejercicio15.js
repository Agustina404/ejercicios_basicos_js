const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

function recognition() {
  const foundProducts = products.filter((product) =>
    product.toLowerCase().includes('camiseta')
  )
  if (foundProducts.length > 0) {
    console.log('Se encontraron los siguientes productos: ')
    foundProducts.forEach((product) => console.log(product))
  } else {
    console.log('Not found')
  }
}

recognition()
