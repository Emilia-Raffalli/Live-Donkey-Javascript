// Challenge13 : football app
// On va créer une app de paris foot !

// Supposons que nous récupérons les données d’un service web à propos d’un certain jeu (variable ‘game’ dans le code en dessous). Dans ce challenge, on va travailler avec ces données.

// 🏁 Exercice 1
// Tâches :
// Créer un tableau de joueurs pour chaque équipe (variables ‘players1’ et ‘players2’).
// Le premier joueur dans un tableau de joueurs est le gardien et les autres sont des joueurs de terrain. Pour l’équipe 1 (le Bayern de Munich), créer une variable ‘gk’ avec le nom du gardien et un tableau ‘fieldPlayers’ avec le reste des joueurs de l’équipe.
// Créer un tableau ‘allPlayers’ qui contient les joueurs de chaque équipe (22 joueurs).
// Pendant le match, le Bayern utilise 3 joueurs remplaçants. Créer un autre tableau ‘players1Final’ contenant tous les joueurs de l’équipe originelle ainsi que ‘Thiago’ ‘Coutinho’ et ‘Perisic’.
// Basé sur l’objet game.odds, créer une variable pour chaque probabilité (appelés ‘team1’, ‘draw’ et ‘team2’).
// Écrire une fonction ‘printGoals’ qui prends un nombre arbitraire de joueurs et qui écrit chacun d’eux dans la console , ainsi que le nombre total de buts.
// L’équipe avec la probabilité la plus basse est celle la plus susceptible de gagner. Écrire dans la console quelle équipe a le plus de chance de gagner.


// 🏁 Exercice 2
// Tâches :
// Faire une boucle sur le tableau game.scored et afficher dans la console chaque nom de butteur ainsi que le numéro du but : (Exemple : “But 1 : Lewanoski”).
// Faire une boucle qui calcule la moyenne des probabilités et l’écrire dans la console.
// Afficher les 2 probabilités dans la console, mais dans un joli format comme ceci :
// Probabilité de victoire pour Bayern Munich : 1,33
// Probabilité d’égalité : 3,25
// Probabilité de victoire de Borussia Dortmund : 6,5
// Bien récupérer les noms des équipes depuis l’objet ‘game’, ne pas les “hardcoder”.
// Créer un objet appelé ‘scorers’ qui contient le nom des joueurs qui ont marqué en propriété et le nombre de buts qu’ils ont marqué en value. Exemple :


// //🏁 Exercice 3
// Cette fois-ci, nous avons un tableau à 2 dimensions appelé ‘gameEvents’ (voir en dessous) avec le log de tous les évènements qui se sont passés pendant le match. La première case d’un sous-tableau correspond à la minute de l’évènement, la 2ème case correspond au type d’évènement.

// Tâches :
// Créer un tableau ‘events’ des différents évènements qui se sont déroulés (pas de doublon !).
// Après que le jeux soit fini, on a décidé que le carton jaune de la minute 64 n’était pas juste, Le supprimer du log d’évènements.
// Calculer et afficher ce texte dans la console : “Un évènement est apparu en moyenne toutes les 9 minutes”. (Un jeu de foot dure 90 minutes).
// Faire une boucle sur ‘gameEvents’ et afficher pour chaque élément dans la console s’il s’est déroulé dans la première ou deuxième moitié du jeu :
// [PREMIÈRE MOITIÉ] 17 . ⚽️ GOAL



const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],
    ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
},
};


// EXERCICE 1


players1 = game.players[0];
game.gk1 = game.players[0][0];
players2 = game.players[1];
game.gk2 = game.players[1][0];
game.fieldPlayers1 = game.players[0].slice(1);
game.fieldPlayers2 = game.players[1].slice(1);
game.allPlayers = [players1,...players2];
game.playersFinal = [players1,'Thiago', 'Coutinho', 'Perisic'];

console.log(game);


team1 = game.odds.team1;
team2 = game.odds.team2;
draw = game.odds.x;


//Je créé une fonction qui calcule le nombre de fois qu'un joueur est cité dans le tableau 'scored', ce qui correspond au nombre de fois qu'il a marqué dans la partie.
function countOccurrence(array, target) { 
    return array.reduce(function(count, element) {
        if (element === target) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);
}

// Création de la fonction printGoals, qui traite les joueurs saisis en argument, et qui dit : pour chacun des joueurs passés en argument, applique la fonction précédente, qui determine le nombre de but marqué dans la partie. si le nombre de but est supérieur à 1 affiche le nom du joueur et son nombre de buts, sinon affiche n'a pas marqué.
function printGoals(...players) {
    players.forEach(function(player) {
        const nbGoals = countOccurrence(game.scored, player);
        if (nbGoals > 1) {
            console.log(`${player} a marqué ${nbGoals} buts.`);
        } else {
            console.log(`${player} n'a pas marqué.`);
        }
    });
}

printGoals('Pavard','Lewandowski','Alaba','Davies','Kimmich','Goretzka');


if (team1 < team2) {
    console.log(`L'équipe ${game.team1} a le plus de chance de ganger face à l'équipe ${game.team2}.`)
} else if (team1 > team2){
    console.log(`L'équipe ${game.team2} a le plus de chance de ganger face à l'équipe ${game.team1}.`)
} else {
    console.log(`Les deux équipes ${game.team1} et ${game.team2} ont les mêmes chances de gagner.`)
}





// EXERCICE 2 

for ( let i = 0 ; i < game.scored.length ; i ++) {
    console.log (`But ${i+1} : ${game.scored[i]}`);
};

let averageProbabilities = (team1 + team2 + draw) / 3;
console.log (`La moyenne des probabilités pour le match est de ${averageProbabilities.toFixed(2)}.`);


arrayOdds = [team1, team2, draw];
console.log(arrayOdds);

let sumOdds = 0 ; 
for (let i = 0; i < arrayOdds.length; i++) {
    sumOdds = sumOdds + arrayOdds[i];
}

let averageOdds = sumOdds / arrayOdds.length;
console.log(`La moyenne des probabilités est de ${averageOdds.toFixed(2)}.`);


console.log(`Probabilité de victoire pour ${game.team1} : ${team1}.`);
console.log(`Probabilité d'égalité : ${draw}.`);
console.log(`Probabilité de victoire pour ${game.team2} : ${team2}.`);



let scorers = {};

game.scored.forEach(player => {     // Je fais une boucle sur les joueurs du tableau game.scored

    if (scorers.hasOwnProperty(player)) {
        scorers[player] += 1;  // Si la prorpiété avec le nom du joueur (passé dans le tableau scored) existe déjà, j'incrémente d'un pour un but de plus.
    } else {
        scorers[player] = 1;   // Sinon, si la propriété avec le nom du joueur n'existe pas déjà, je passe le lnombre de but à un (pour un but.)
    }
});

console.log(scorers);



// EXERCICE 3 


const gameEvents = [
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🟨 Yellow card"],
    [69, "🟥 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🟨 Yellow card"],
];



const events = Array.from(new Set(gameEvents.map((event) => event[1])));
console.log(events);

events.splice(2,1);
console.log(events);



const eventsTime = Array.from(new Set(gameEvents.map((time)=> time[0])));
console.log(eventsTime);


let avergaegeTime = 90 / eventsTime.length;
console.log(`Un évènement est apparu en moyenne toutes les ${avergaegeTime.toFixed(2)} minutes.`);


gameEvents.forEach(event => {
    let eventTime = event[0];
    let eventType = event[1];

    if(eventTime <= 45 ) {
        console.log(`L'évenement ${eventType} s'est déroulé en première partie du match.`)
    } else {
        console.log(`L'évenement ${eventType} s'est déroulé en seconde partie du match.`);
    }
});
