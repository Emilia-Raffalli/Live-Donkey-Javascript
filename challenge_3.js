//EXERCICE 1 
// Bernard et Marcel essayent de comparer leur IMC (Indice de Masse Corporelle), qui est calculé par cette formule :

// IMC = poids / taille² = poids / (taille * taille)

// Votre tâche :

// Stocker la taille et le poids de Bernard et Marcel dans des variables.
// Calculer leur IMC en utilisant la formule.
// Créer un booléen ‘bernardHigherIMC’ disant si oui ou non Bernard a un IMC plus grand que celui de Marcel.
// Données de test :
// – Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
// – Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m.



//Données 1

let weightMarcel = 92;
let heightMarcel = 1.95;

let weightBernard = 78;
let heightBernard = 1.69;

function calculateIMC(weight, height) {
    return weight / (height * height);
}

let imcMarcel = calculateIMC(weightMarcel, heightMarcel);
console.log("IMC Marcel = ", imcMarcel.toFixed(2));

// Calcul de l'IMC pour Bernard
let imcBernard = calculateIMC(weightBernard, heightBernard);
console.log("IMC Bernard  = ", imcBernard.toFixed(2));

let bernardHigherIMC = imcBernard > imcMarcel;
console.log("Bernard a un IMC plus grand que Marcel :", bernardHigherIMC);

//Données 2


weightMarcel = 85;
heightMarcel = 1.76;

weightBernard = 95;
heightBernard = 1.88;

imcMarcel = calculateIMC(weightMarcel, heightMarcel);
console.log("IMC Marcel = ", imcMarcel.toFixed(2));

imcBernard = calculateIMC(weightBernard, heightBernard);
console.log("IMC Bernard  = ", imcBernard.toFixed(2));

bernardHigherIMC = imcBernard > imcMarcel;

console.log("Bernard a un IMC plus grand que Marcel :", bernardHigherIMC);






// EXERCICE 2 

// Utilise le code de l’exercice 1 et améliore-le !

// Affiche un joli texte dans la console écrivant qui a l’IMC le plus élevé. Le message est :
// “Bernard a un IMC plus élevé que Marcel” OU “Marcel a un IMC plus élevé que Mark”
// Affiche l’IMC dans le texte de sortie :
// “Bernard a un IMC (28,3) plus élevé que Marcel (22)”

if (bernardHigherIMC) {
    console.log(`Bernard a un IMC (${imcBernard.toFixed(2)}) plus élevé que Marcel (${imcMarcel.toFixed(2)})`);
} else {
    console.log(`Marcel a un IMC (${imcMarcel.toFixed(2)}) plus élevé que Bernard (${imcBernard.toFixed(2)}).`);
}



if (imcBernard < 18.5) {
    console.log("Bernard : insuffisance pondérale");
} else if (imcBernard >= 18.5 && imcBernard < 25) {
    console.log("Bernard : poids normal");
} else if (imcBernard >= 25 && imcBernard < 30) {
    console.log("Bernard : surpoids");
} else {
    console.log("Bernard : obésité");
}

if (imcMarcel < 18.5) {
    console.log("Marcel : insuffisance pondérale");
} else if (imcMarcel >= 18.5 && imcMarcel < 25) {
    console.log("Marcel : poids normal");
} else if (imcMarcel >= 25 && imcMarcel < 30) {
    console.log("Marcel : surpoids");
} else {
    console.log("Marcel : obésité");
}