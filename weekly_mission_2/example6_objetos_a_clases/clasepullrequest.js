class pullrequest {
    constructor(author, title, brachName, dateCreated, status, repositoryNameAssociated, ){
        this.author = author
        this.title = title
        this.brachName = brachName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated


    }
    get getStatus(){
        return `Status: ${this.status}`
    }
    get titleAndAuthor(){
        return `titulo: ${this.title} Author: ${this.author}` 
    }
}

let pullrequest1 = new pullrequest("julio", "pasteleria", "origin", "22-02-2022", "public", "practica_Html")
console.log(pullrequest1.getStatus)
console.log(pullrequest1.titleAndAuthor)