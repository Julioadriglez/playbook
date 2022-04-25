class issues {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdate){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.label = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdate = lastUpdate
    }
    get titleAndAuthor(){
        return `Titulo: ${this.title}  Autor: ${this.author}`
    }
    get generalInfo(){
        return  `El repositorio ${this.repositoryNameAssociated} de ${this.author} fue creado ${this.dateCreated}y se modifico ${this.lastUpdate}`
    }
}
const issues2 = new issues("pastelerria html", "html", "publico", 10, 100, "Julio Adrian", "10-mayo-2021", "10-mayo-2021")
console.log(issues2.titleAndAuthor)
console.log (issues2.generalInfo)
