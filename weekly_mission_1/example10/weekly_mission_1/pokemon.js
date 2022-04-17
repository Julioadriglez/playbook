export default class Pokemon { // Declaramos la Clase Pokemon
    constructor (name) { //Se crea un contructor nonde se le pasara name 
        this.name = name //name pasa this.mame para crear el nombre del objeto
    }

    sayHello () { //se crea el metodo  sin resivir nada por eso esta vacio en los parentesis
        console.log(`Mi pokemon [${this.name}] te saluda!!! `) //imprime  con [${this.name}] el nombre del objeto o objetos que se le pasaron
    }

    sayMessage(message) { //se crea el metodo en este casa no esta vacio y recibira una variable message
        console.log(`Mi pokemon [${this.name}] dice: ${message}`) //imprime  con [${this.name}] el nombre del objeto o objetos que se le pasaron
    }                                                              //y con ${message} imprime la variable que se le paso

}