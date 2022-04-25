class repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close,){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }   
    get totalIssues(){
        return this.issues_close + this.issues_open
    }
    get generalInformacion(){
        return `this repository ${this.name} was created by ${this.author}`

    }
}
const repo1 = new repo("LaunchX", "carlogilmar", "javaScript", 100, 199, 299, 10, 10)
console.log("Nombre del repo: " + repo1.name )
console.log("Issues totales:" + repo1.totalIssues)
console.log(repo1.generalInformacion) 

