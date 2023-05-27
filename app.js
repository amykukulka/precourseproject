var hockey = {
    name: "NHL",
    age: 106,
    teams: 32,
    address: {
        street: "50 Bay Street",
        city: "Toronto",
        state: "Ontario",
        zip: "M5J 2X8",
        country: "Canada"
    }
}

console.log(hockey.address.country)

var hockeyTeams = ["Ducks", "Blackhawks", "Blue Jackets", "Coyotes", "Penguins", "Sabres"]

console.log(hockeyTeams[2])

function bestodds(){
    let team = "Ducks"
    if (team === 'Ducks'){
        alert("Anaheim Ducks have the best odds of first round pick!")
    } else {alert("First round pick is yet to be decided.")}
} 

function lotterypick(){
    const myTeams = ['Ducks', 'Blue Jackets', 'Blackhawks', 'Sharks', 'Canadiens', 'Coyotes', 'Flyers', 'Capitals', 'Red Wings', 'Blues', 'Canucks', 'Senators', 'Sabres', 'Penguins', 'Predators', 'Flames']
    for (i = 0; i < myTeams.length; i++){
        console.log[i]
        alert(myTeams[i])
    }
}

var element = document.getElementById("button1");

element.addEventListener("click", function() { 
    alert("Random Team")
});