// Il y’a 2 équipes de gymnastique : les Dauphines et les Koalas. Ils s’affrontent 3 fois. L’équipe avec la meilleure moyenne gagne le trophée !

// Tâches :
// Calculer la moyenne de score de chacune des équipes, en utilisant les données tests en dessous.
// Comparer ces moyennes pour déterminer le gagnant de la compétition et l’écrire dans la console. N’oubliez pas qu’il peut y avoir égalité !
// Inclure une nouvelle règle : une équipe ne peut gagner seulement si son score est supérieur à 100. Sinon, il n’y a pas de gagnant.

// Données de test :
// Score Dauphins : 96, 108, 89 / Score Koalas : 88, 91, 110
// Score Dauphins : 97, 112, 101 / Score Koalas : 109, 95, 123
// Score Dauphins :97, 112, 101 / Score Koalas : 109, 95, 106


const scoreD =[
    [96, 100, 89], // 0 =>  0 , 1 , 2  
    [97, 112, 101], // 1 =>  0 , 1 , 2
    [97, 112, 101] // 2 => 0 , 1 , 2
];
console.log(scoreD);

const scoreK = [
    [88, 91, 110],
    [109, 95, 123],
    [109, 95, 106]
];

console.log(scoreK);

function calcAverage(array) {
    let sumScore = 0;

    for (let i = 0; i < array.length; i++) {
        let score = 0;
        for (let j = 0; j < array[i].length; j++) {
            score += array[i][j];
        }
        sumScore += score;
        console.log(`Score du match ${i + 1} : ${score}`);
    }

    console.log("Somme totale des scores :", sumScore);
    return sumScore / array.length;
}

const averageKoala = calcAverage(scoreK);
console.log(`Moyenne des scores des Koalas : ${averageKoala.toFixed(2)} pts`);

const averageDauphins = calcAverage(scoreD);
console.log(`Moyenne des scores des Dauphines : ${averageDauphins.toFixed(2)} pts`);


if (averageDauphins > averageKoala) {
    console.log("Les gagnantes de la compétition sont les Dauphins !");
} else if (averageDauphins < averageKoala) {
    console.log("Les gagnantes de la compétition sont les Koalas !");
} else {
    console.log("Les équipes sont à égalité !");
}
