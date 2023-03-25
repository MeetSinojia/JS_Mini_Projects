// OBJECTS {}
// key: value pairs
const person = {
    name: 'Leonardo',
    shirt: 'white'
}

// access object: dot notation vs. bracket notation
console.log(person.name)
console.log(person.shirt)

// bracket notation
console.log(person['name'])
console.log(person['shirt'])

// assign object
person['phone'] = '1-222-333-4444'
console.log(person.phone)

console.log(person)


// es6 arrow function (2 arguments)
const introducer = (name, shirt) => {
    // create object inside function
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 50000,
        // Method inside object
        netWorth: function () {
            return this.assets - this.liabilities
        }
    }

    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} 
                    and my net worth is $${person.netWorth()} USD`

    return intro
}

console.log(introducer('Qazi', 'black'))
console.log(introducer('Leonardo', 'white'))