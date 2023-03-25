// let fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// for (const fruit of fruits) {
//     console.log(fruit)
// }

// const numbers = [1, 2, 3, 4, 5, 6]
// // for (let i=0; i < numbers.length; i++) {
// //   console.log(numbers[i])
// // }

// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number * 2)
//     }

//     return result
// }

// console.log(double([1, 2, 3, 4, 5, 6]))

// [2, 4, 6, 8, 10, 12]

// const howManyLetters = (phrase) => {
//     // counter
//     let result = 0;

//     for (const index in phrase) {
//         console.log(Number(index) + 1)
//         result = Number(index) + 1
//     }

//     return { result }
// }

// const phrase = prompt('write your phrase')

// console.log(howManyLetters(phrase))

// [1, 2, 3, 4] // 10
// result = 0
// result = 1
// result = 3
// result = 6
// result = 10

// const sumArray = (numbers) => {
//     let result = 0;
//     // for loop
//     for (const number of numbers) {
//         console.log(number)
//         result += number
//     }
//     return { result }
// }

// const nums = [1, 2, 3, 4, 5]
// console.log(sumArray(nums))
// sum up all numbers in array

// const max = (numbers) => {
//     let result = numbers[0]

//     // loop
//     for (const number of numbers) {
//         if (number > result) {
//             result = number
//         }
//     }

//     return { result }
// }

// console.log(max([1, 2, 3, 4, 5]))

// const letterFrequency = (phrase) => {
//     // letterFrequency('haha') 👉 {'h': 2, 'a': 2}
//     console.log(phrase)
//     // make a `frequency` object {}
//     let frequency = {}
//     for (const letter of phrase) {
//         // check if letter exists in frequency
//         if (letter in frequency) {
//             // increment the value by +1
//             frequency[letter] += 1
//             // otherwise, set the value to 1
//         } else {
//             frequency[letter] = 1
//         }
//     }
//     return frequency
// }

// console.log(letterFrequency('lol, what are you doing later tonight lol, haha!'))

// wordFrequency('lol what lol') 👉 { 'lol': 2, 'what': 1 }
const wordFrequency = (phrase) => {
    const words = phrase.split(' ')
    return letterFrequency(words)
}

// const userInput = prompt('Write your sentence')
// console.log(wordFrequency(userInput))
// incremental operators
// ++, --, +=
