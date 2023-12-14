const allCards = document.querySelector('.cards');

const animalsToAdopt = [
{
    nameCat: "Lucky",
    picture: "https://placekitten.com/200/287"
},
{
    nameCat: "Symba",
    picture: "https://placekitten.com/200/139"
},
{
    nameCat: "Léo",
    picture: "https://placekitten.com/200/90"
},
{
    nameCat: "Milo",
    picture: "https://placekitten.com/200/194"
},
{
    nameCat: "Charly",
    picture: "https://placekitten.com/200/179"
}
];

console.log(animalsToAdopt);


function createCard(title, imageUrl) {

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    allCards.appendChild(cardElement);

    const carHeader = document.createElement('div');
    carHeader.classList.add('card-header');
    cardElement.appendChild(carHeader);

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.src = imageUrl;
    cardElement.appendChild(cardImg);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardElement.appendChild(cardBody);

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('title');
    cardTitle.innerHTML = title;
    cardBody.appendChild(cardTitle);

    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.innerHTML="Adopt Now";
    cardBody.appendChild(cardButton);

}



for (let i = 0; i < animalsToAdopt.length; i++) {
    createCard(animalsToAdopt[i].nameCat, animalsToAdopt[i].picture);
}
