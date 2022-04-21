const pullrequest = {
    author: "Julio",
    title: "pasteleria",
    branchName: "origin", 
    dateCreated: "22-02-2022",
    status: "public",
    repositoryNameAssociated: "Practica_Html",
    getStatus: function(){
        return `Status: ${this.status}`
    },
    getTitleAndAutor: function(){
        return `titulo: ${this.title} Autor: ${this.author}`
    }
}

console.log(pullrequest.getStatus())
console.log(pullrequest.getTitleAndAutor())