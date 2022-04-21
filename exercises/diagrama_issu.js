const Issues = {
    title: "pasteleria html",
    repositoryNameAssociated: "html",
    status: "public",
    labels: 10,
    numberOfCommnets: 100,
    author: "Julio Adrian",
    dateCreated:10-05-2021,
    lastUpdate: 10-05-2021,
    getTitleAndAuthor(){
        return `Titulo: ${this.title}  Autor: ${this.author}` 
    },
    getGeneralInfo(){
        return  `El repositorio ${this.repositoryNameAssociated} de ${this.author} fue creado ${this.dateCreated}y se modifico ${this.lastUpdate}`
    }

}
console.log(Issues.getTitleAndAuthor())
console.log(Issues.getGeneralInfo())