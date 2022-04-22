const informacion = {
    nombre: "julio Glez",
    empleo: "Desarrollador",
    universidad: "Esime Zacatenco",
    secundaria: "secundaria No. 98",
    residencia: "Ciudad de México",
    ciudad: "México",
    situacionSentimental:"Soltero",
    telefono: 5512378946,
    correo: "coreo@hotmail.com",
    sitioWeb: "https://github.com/Julioadriglez",
    getinfoGeneral: function(){
        return ` Empleo\n  ${this.empleo} \n Estudio en\n  ${this.universidad} \n Vive en \n  ${this.ciudad} \n  ${this.telefono} \n` 
    },
    getempleoYformacion: function(){
        return ` Empleo\n  ${this.empleo} \n Universidad \n  ${this.universidad} \n Escuela secundaria\n  ${this.secundaria} \n`
        
    },
    getlugarDeResidencia: function(){
        return `  ${this.residencia} \n`
    },
    getinformacionBasica: function(){
        return ` Informacion de contacto \n  ${this.telefono} \n  ${this.correo}\n Sitio web \n  ${this.sitioWeb}`
    },

}
console.log("Informacion general")
console.log(informacion.getinfoGeneral())
console.log("Empleo y formación")
console.log(informacion.getempleoYformacion())
console.log("Lugar de residencia")
console.log(informacion.getlugarDeResidencia())
console.log("Información básica")
console.log(informacion.getinformacionBasica())
