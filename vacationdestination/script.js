var detailsForm = document.querySelector("#destination_details_form")

detailsForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault();

    var destName = e.target.elements["name"].value;
    var destLocation = e.target.elements['location'].value;
    var destPhoto = e.target.elements['photo'].value;
    var destDesc = e.target.elements['description'].value;

    for (let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }

    var destCard = createCard(destName, destLocation, destPhoto, destDesc)

    var wishListContainer = document.getElementById('destinations_container')

    if (wishListContainer !== 0) {
        document.getElementById('title').innerHTML = "My wish list"
    }

    document.querySelector('#destinations_container').appendChild(destCard)
}

function createCard(name, location, photo, description) {
    var card = document.createElement('div')
    card.className = 'card'

    var img = document.createElement('img')
    img.setAttribute('alt', name)
    var constantPhotoUrl = "images/signpost.jpg";
    if ( photo.length === 0) {
        img.setAttribute('src', constantPhotoUrl)                     
    }
    else {
        img.setAttribute('src', photo)
    }

    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    var cardTitle = document.createElement('h3')
    cardTitle.innerText = name
    cardBody.appendChild(cardTitle)

    var cardSubtitle = document.createElement('h4')
    cardSubtitle.innerText = location
    cardBody.appendChild(cardSubtitle)

    if (description.length !== 0) {
        var cardText = document.createElement('p')
        cardText.className = "card-text"
        cardText.innerText = description
        cardBody.appendChild(cardText)
    }

    var cardDeleteBtn = document.createElement("button")
    cardDeleteBtn.innerText = "Remove"
    
    cardDeleteBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(cardDeleteBtn)

    card.appendChild(cardBody)

    return card;


}

function removeDestination(e) {
    var card = e.target.parentElement.parentElement;
    card.remove()
}