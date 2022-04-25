class information {
    constructor(nombre, empleo, universidad, secundaria, residencia, ciudad, situacionSentimental, telefono, correo, sitioWeb){
        this.nombre = nombre
        this.universidad = universidad
        this.secundaria = secundaria
        this.residencia = residencia
        this.ciudad = ciudad
        this.situacionSentimental = situacionSentimental
        this.telefono = telefono
        this.correo = correo
        this.sitioWeb = sitioWeb
    }
    get infogeneral(){
        return ` Empleo\n  ${this.empleo} \n Estudio en\n  ${this.universidad} \n Vive en \n  ${this.ciudad} \n  ${this.telefono} \n`
    }
    get empleoYFormacion(){
        return ` Empleo\n  ${this.empleo} \n Universidad \n  ${this.universidad} \n Escuela secundaria\n  ${this.secundaria} \n`
    }
    get lugarDeResidencia(){
        return `  ${this.residencia} \n`
    }
    get informacionBasica(){
        return ` Informacion de contacto \n  ${this.telefono} \n  ${this.correo}\n Sitio web \n  ${this.sitioWeb}`
    }
}
let information1 = new information("Julio Glez", "Desarrollador", "ESIME Zacatenco", "secundaria no. 98", "Ciudad de México", "México", "Soltero", 5513345648, "correo@hotmail.com", "https://github.com/Julioadriglez")
console.log(information1.infogeneral)
console.log(information1.empleoYFormacion)
console.log(information1.lugarDeResidencia)
console.log(information1.informacionBasica)