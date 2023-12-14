// J’ai un tableau avec les températures maximum des prochains jours en entrée de mon programme. Pour chaque température ex [17, 21], je veux afficher dans la console “17 degrés dans 1 jour”, “21 degrés dans 2 jours”.

// Données de test :
// [17, 21, 23]
// [12, 5, -5, 0, 4]



//Données 1
let temperaturesMax = [17, 21, 23];

function weather() 
{
    for (let i = 0 ; i < temperaturesMax.length ; i ++ ) {
        console.log( `Dans ${i + 1} jour(s), la température maximum sera de ${temperaturesMax[i]} degrés.`);
    }
}

weather();

//Données 2
temperaturesMax = [12, 5, -5, 0, 4];
weather();
