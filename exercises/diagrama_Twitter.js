const users = {
    user: "Julio",
    username: "julioglez",
    bio: "...",
    age: 34,
    pais: "México",
    genero: "Hombre",
    getInfo: function(){
        return `usuario: ${this.user} edad: ${this.age} pais: ${this.pais} `
    }
}

console.log(users.getInfo())

const notificaciones = {
    numNotificaciones: 23,
    remitente: "lllJuan",
    mensaje: "...",
    fechaDeEnvio: "21 abr. 2021",
    getStatus: function(){
        return `Notificaciones: ${this.numNotificaciones}`
    },
    getMensaje: function(){
         return `${this.remitente} ${this.mensaje} ${this.fechaDeEnvio}`
     }
}
console.log(notificaciones.getStatus())
console.log(notificaciones.getMensaje())

const mensaje = {
    usuario: "julio",
    nombreUsuario: "@julioGlez",
    fechaCheacion: Date(),
    mensaje: "efrwfcedrf fewrew rfdsfewr trwe",
    getEncabezadoMensaje: function(){
        return `${this.usuario} ${this.nombreUsuario} ${this.fechaCheacion}`
    },
    getMensaje: function(){
        return `${this.mensaje}`
    }

} 

console.log(mensaje.getEncabezadoMensaje())
console.log(mensaje.getMensaje())