// De retour avec nos équipes de gymnastique : Les Dauphins et les Koalas ! Il y’a une nouvelle discipline qui fonctionne différemment.

// Chaque équipe joue 3 fois, ensuite la moyenne des 3 scores est calculée (donc une moyenne par équipe).

// Une équipe gagne seulement si elle a au moins le double de la moyenne de score de l’autre équipe. Sinon, personne ne gagne !

// Tâches :
// Créer une arrow function “calcAverage” qui calcule la moyenne des 3 scores.
// Utiliser la fonction pour calculer la moyenne de chaque équipe.
// Créer une fonction “checkWinner” qui prend les 2 moyennes de scores et qui log dans la console l’équipe gagnante : “L’équipe Koala gagne (30 vs 13)”.
// Utiliser la fonction “checkWinner”.
// Ignorer l’égalité cette fois-ci.

// Données de test :
// Score Dauphins : 44, 23, 71 / Score Koalas : 65, 54, 49
// Score Dauphins : 85, 54, 41 / Score Koalas : 23, 34, 27


let scoreD = [44, 23, 71];
let scoreK = [65, 54, 49];

// function calcAverage(array) 
// {
//     initValue = 0;
//     let sumScore = array.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue; 
//     }, initValue);

//     let averageScore = sumScore / array.length;
//     return averageScore;
// }


//avec arrow fonction

function calcAverage(array) 
{
    initValue = 0;
    let sumScore = array.reduce((accumulator, currentValue) => accumulator + currentValue + initValue);

    let averageScore = sumScore / array.length;
    return averageScore;
}


let averageScoreD = calcAverage(scoreD);
let averageScoreK = calcAverage(scoreK);

console.log(averageScoreD);
console.log(averageScoreK);


function checkWinner(averageScoreD, averageScoreK) 
{
    if (averageScoreD >= (averageScoreK *2)) {
        console.log(`Léquipe Dauphins gagne (${averageScoreD} VS ${averageScoreK}).`);
    } else if (averageScoreD <= (averageScoreK *2)) {
        console.log(`Léquipe Koalas gagne (${averageScoreK} VS ${averageScoreD}).`);
    } else {
        console.log(`Aucune équipe n'a gagné.`);
    }
}

checkWinner(averageScoreD, averageScoreK);


scoreD = [ 85, 54, 41];
scoreK = [23, 34, 27];

averageScoreD = calcAverage(scoreD);
averageScoreK = calcAverage(scoreK);

checkWinner(averageScoreD, averageScoreK);