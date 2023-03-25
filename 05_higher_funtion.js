//     higher order functions
// map - loops and returns an array
// filter - loops and returns an array with matching conditions
// reduce

// MAP
// const doubleMap = (numbers) => {
//     return numbers.map(number => number * 2)
// }

// console.log(doubleMap([1, 2, 3]))

// filter([1, 2, 3, 4, 5, 6], 3) 👉[4, 5, 6]
// const filter = (numbers, greaterThan) => {
//     let result = []
//     for (const number of numbers) {
//         if (number > greaterThan) {
//             result.push(number)
//         }
//     }
//     return result
// }

// console.log(filter([1, 2, 3, 4, 5, 6], 2))
// const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(num => num > 4 || num < 2))

// const actors = [
//     { name: 'johnny', netWorth: 2000000 },
//     { name: 'amber', netWorth: 10 },
//     { name: 'matt', netWorth: 170000000 },
//     { name: 'brad', netWorth: 300000000 },
//     { name: 'leonardo', netWorth: 10000000 },
// ]

// let result = actors.filter(actor => actor.netWorth > 10)
// console.log(result)
// let names = result.map(actor => actor.name).join(', ')
// console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))

// playground.innerHTML = `<h1>${names}</h1>`

// const nums = [1, 2, 3, 4]
// const result = nums.reduce((a, b) => a + b, 0)

// console.log(result)

// select a random element from an array
// randomFruit([1, 2]) 👉 2
// randomFruit([1, 2]) 👉 1
// const randomFruit = (fruits) => {
//     const randomNumber = Math.floor(Math.random() * fruits.length)

//     console.log(randomNumber)

//     return fruits[randomNumber]
// }

// fruits = ['🍌', '🍎', '🍊', '🍐']
// console.log(randomFruit(fruits))

// if else if else
//     rainy(1), sunny(-1), overcast(0)
// const weatherScorer = (weather, weather2) => {
//     let score

//     if (weather == 'rainy' && weather2 == 'overcast') {
//         score = 2
//     } else if (weather == 'rainy') {
//         score = 1
//     } else if (weather == 'sunny') {
//         score = -1
//     } else {
//         score = 0
//     }

//     return score
// }