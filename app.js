const faker = require('faker')


let voters = []
let democrat_candidates = []
let republican_candidates = []
let independent_candidtates = []

class Person{
    constructor(name){
    this.name = name
    }
}

class Voter extends Person{
    constructor(name, ideology){
    super(name)
    this.ideology = ideology.toLowerCase()
    }
}
class Candidate extends Person{
    constructor(name, party){
        super(name)
        this.party = party
        this.votes = 0

        if(party === "democrat") {
            democrat_candidates.push(this)
        }
        else if(party === "republican") {
            republican_candidates.push(this)
        }
        else if(party === "independent"){
            independent_candiditates.push(this)
        }
    } 
}
let candidate1 = new Candidate("Obama","democrat")
let candidate2 = new Candidate("Trump", "republican")
console.log(democrat_candidates);
console.log(republican_candidates)

$("#voter-form form").submit((e)=>{
    e.preventDefault()
    let name = $("#voter-name").val()
    let ideology = $("#voter-ideology").val()
   
    new Voter(name, ideology);
   
    $("#voter-list ul").append(`<li>${name}: ${ideology}</li>`
    )
   })
   
   $("#candidate-form form").submit((e)=>{
    e.preventDefault()
    let name = $("#candidate-name").val()
    let party = $("#candidate-party").val()
   
    new Candidate(name, party);
   
    $("#candidate-list ul").append(`<li>${name}: ${party}</li>`
    )
   })

const vote = (voters) => {
        voters.forEach(function(v){
        if(v.ideology === "Liberal"){
            return pickCandidate(partyVote(.6,.8));
        } else if (v.ideology === "Neutral") {
            return pickCandidate(partyVote(.5,.75));
        } else {
            return pickCandidate(partyVote(.2,.4));
        }
});
const partyVote = (a,b) => {
    let randomNumber = Math.random();
    if (randomNumber < a){
        return 'Democrat'
    }        
    else if (randomNumber < b) {
        return 'Independent'
    }        
    else {return 'Republican'}