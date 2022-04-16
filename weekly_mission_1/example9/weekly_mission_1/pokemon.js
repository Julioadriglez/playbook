class Pokemon {
    constructor (name) {
        this.name = name
    }
    sayHello (message) {
        console.log(`[${this.name}] ${message}`)
    }
    sayMessage(message) {
        console.log(`[${this.name}] ${message}`)
    }
    
}

module.exports.Pokemon = Pokemon;