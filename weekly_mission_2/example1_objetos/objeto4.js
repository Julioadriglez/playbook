const pet = {
    name: "Bob",
    //Esta es la funcion que se guarda como propiedad
    sayHello: function(){
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español!`)
    }
}
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()
