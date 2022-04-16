const Pokemon = require('./pokemon') //Con require se pasa la clase Pokemon del archivo pokemon.js

let pikachu = new Pokemon("pikachu") // Se construye un objeto llamado pikachu
let bulbasaur = new Pokemon("bulbasaur")
let squirtle = new Pokemon("squirtle")
let charmander = new Pokemon("charmander")

pikachu.sayHello() //se manda a llamar al metodo sayHello()
pikachu.sayMessage("Heey!") //se manda a llamar al metodo sayMassage(aqui se le inclulle el mensaje )

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")