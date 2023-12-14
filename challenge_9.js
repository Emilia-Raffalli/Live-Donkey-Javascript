// Exercice 1
// Ici, nous avons un tableau avec beaucoup de string différentes. Ta mission est d’utiliser une boucle pour ignorer la lettre “X” (en utilisant une condition) et console.log pour révéler le message.

//  Exercice 2
// Maintenant, nous avons une très longue chaîne de caractère qui contient le code secret.
// Pour la décoder, tu dois d’abord trouver un moyen de convertir cette chaîne en un tableau, puis utiliser une boucle pour enlever la lettre “X” (en utilisant une condition) et les nombres pairs.



// EX 01 -  Use a loop to remove the 'X' and use console.log to reveal the message 
const hiddenMessage = ["X", "X", "X", "X", "W", "X", "E",  "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", " ","X", "X", "X", "X", "X", "X", "X", "X", "D", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "N", "X", "X", "X", "X", "E", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ",", "X", " ", "X"]



let filterCode = hiddenMessage.filter(function(element) {  // je crée une variable 'filterCode' et applique mon filtre au tableau hiddenMessage (fonction qui renvoie les éléments étant différents de X);
    return element !== 'X';
});
console.log(filterCode);

let message1 = filterCode.join('');
console.log(message1);




// EX 02 - Remove the 'X' and the even numbers
// Hint: As this is a string you should find a way to convert into an array.

let hiddenCode = "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";


hiddenCode = hiddenCode.split(''); // Je transforme ma chaîne de caractères en tableau
console.log(hiddenCode); // je vérifie

let filterCode2 = []; // je prépare mon tableau qui recevra les résultats de mon filtrage

hiddenCode.forEach(function(element) { // je créé un fonction foreach avec des conditions pour ne selectionner que selon ddeux critères
    if ((element !== 'X') && (element%2 !== 0)) { // condition: si l 'élément est différent de 'X' et si le modulo n'est pas égal à 0 (si le resultat est pair)
        filterCode2.push(element); // j'insère le résultat (element), dans lon nouveau tableau prédéfini en dehors de ma fonction
    }
});

console.log(filterCode2);

let message2 = filterCode2.join(''); // je concatène les éléments du tableau
console.log(message2);

