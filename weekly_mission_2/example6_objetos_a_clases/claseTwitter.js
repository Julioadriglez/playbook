class users {
    constructor(user, username, bio, age, pais, genero){
        this.user = user
        this.username = username
        this.bio = bio
        this.age = age
        this.pais = pais
        this.genero = genero
    }
    get info(){
        return `usuario: ${this.user} edad: ${this.age} pais: ${this.pais} `
    }
}

let users1 = new users("julio", "julioglez", "...", 34, "México", "Hombre" )
console.log(users1.info)

class Notificaciones{
    constructor(numNotificaciones, remitente, mensaje, fechaDeEnvio){
        this.numNotificaciones = numNotificaciones
        this.remitente = remitente
        this.mensaje = mensaje
        this.fechaDeEnvio = fechaDeEnvio
    }
    get status(){
        return `Notificaciones: ${this.numNotificaciones}`
    }
    get getMensaje(){
        return `${this.remitente} ${this.fechaDeEnvio} \n ${this.mensaje} `
    }
}

let notificacion1 = new Notificaciones(23, "llJuan", "...", "21 abr. 2021")
console.log(notificacion1.status)
console.log(notificacion1.getMensaje)

class mensaje {
    constructor(usuario, nombreUsuario, fechaCreacion, mensaje){
        this.usario = usuario
        this.nombreUsuario = nombreUsuario
        this.fechaCreacion = fechaCreacion
        this.mensaje = mensaje
    }
    get encabezadoMensaje(){
        return `${this.usuario} ${this.nombreUsuario} ${this.fechaCreacion}`
    }
    get getmensaje(){
        return `${this.mensaje}`
    }
  
}

let mensaje1 = new mensaje("julio", "@julioGlez", Date(), "sdfsd fdsfsd fsd fsdf sdfsd fsfsf sdf sd fsd" )
console.log(mensaje1.encabezadoMensaje)
console.log(mensaje1.getmensaje)