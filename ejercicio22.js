const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

const usedFruits = new Set()

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    let fruitIndex = 0
    while (usedFruits.has(fruits[fruitIndex])) {
      fruitIndex++
    }
    foodSchedule[i].name = fruits[fruitIndex]
    usedFruits.add(fruits[fruitIndex])
  }
}

console.log(foodSchedule)
