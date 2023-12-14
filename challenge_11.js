// Rappel : IMC = poids / taille² = poids / (taille * taille)

// Tâches :
// Pour chacun, créer un objet avec des propriétés pour leurs prénom, poids et taille.
// Créer une méthode ‘calcBMI’ dans chacun des objets permettant de calculer l’IMC. Stockez la valeur calculée dans une propriété de l’objet et aussi la retourner dans la méthode.
// Afficher dans la console qui a l’IMC le plus élevé de cette manière : “L’IMC de Bernard (20,2) est plus élevé que celui de Marcel (19,3)”
// Données de test :
// Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
// Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m.




// Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.

function createPerson(firstName, weight, height) { // je créé une fonction qui créé des personnes (comme les informations pour chacun sont amenées à varier.)
    return {
        firstName: firstName,
        weight: weight,
        height: height,
        bMi: 0, // je définis le bmi à 0 pour que la propriété soit présente dans chaque objet dès sa création
        calcBMI: function () { // fonction qui calcule l'imc en fonction des informations saisies
            return this.weight / (this.height * this.height);
        },
        updateBMI: function () { // fonction qui met à jour l'imc en cas de changement d'arguments
            this.bMi = this.calcBMI().toFixed(2);
        }
    };
}

// Données 1
let person1 = createPerson("Bernard", 78, 1.69);
let person2 = createPerson("Marcel", 92, 1.95);

person1.updateBMI();
person2.updateBMI();

console.log(person1);
console.log(person2);

if (person1.bMi > person2.bMi) {
    console.log(`${person1.firstName} a un IMC (${person1.bMi}) plus élevé que celui de ${person2.firstName} (${person2.bMi}).`);
} else if (person1.bMi < person2.bMi) {
    console.log(`${person2.firstName} a un IMC (${person2.bMi}) plus élevé que celui de ${person1.firstName} (${person1.bMi}).`);
} else {
    console.log(`${person1.firstName} et ${person2.firstName} ont le même IMC (${person1.bMi})`);
}

// Données 2
person1 = createPerson("Bernard", 95, 1.88);
person2 = createPerson("Marcel", 85, 1.76);

person1.updateBMI();
person2.updateBMI();

console.log(person1);
console.log(person2);

if (person1.bMi > person2.bMi) {
    console.log(`${person1.firstName} a un IMC (${person1.bMi}) plus élevé que celui de ${person2.firstName} (${person2.bMi}).`);
} else if (person1.bMi < person2.bMi) {
    console.log(`${person2.firstName} a un IMC (${person2.bMi}) plus élevé que celui de ${person1.firstName} (${person1.bMi}).`);
} else {
    console.log(`${person1.firstName} et ${person2.firstName} ont le même IMC (${person1.bMi})`);
}
