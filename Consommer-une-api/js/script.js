
// let nb = 12;
// let url = 'https://reqres.in/api/users?per_page=+nb'


document.addEventListener('DOMContentLoaded', getUsers);

function getUsers() {
    const nb = 12;
    const url = `https://reqres.in/api/users?per_page=${nb}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            data.data.forEach(user => {
                const userCard = createUserCard(user);
                userList.appendChild(userCard);
            });
        })
        .catch(error => console.log(error));
}

function createUserCard(user) {
    const card = document.createElement('li');
    card.classList.add('card');
    card.addEventListener('click', () => showUserDetails(user));

    const img = document.createElement('img');
    img.src = user.avatar;
    card.appendChild(img);

    const details = document.createElement('div');
    details.classList.add('details');

    const name = document.createElement('h2');
    name.textContent = `${user.first_name} ${user.last_name}`;
    details.appendChild(name);

    const email = document.createElement('p');
    email.textContent = user.email;
    details.appendChild(email);

    card.appendChild(details);

    return card;
}

function showUserDetails(user) {
    alert(`ID: ${user.id}\nNom: ${user.first_name} ${user.last_name}\nEmail: ${user.email}`);
}



// function showDetails(personId) {
//     var detailsContainer = document.getElementById("details");
  
//     // Efface le contenu précédent
//     detailsContainer.innerHTML = "";
  
//     // Simule la récupération des données du serveur pour obtenir la description détaillée
//     var personData = getPersonData(personId);
  
//     // Crée la card de détails
//     var detailsCard = document.createElement("div");
//     detailsCard.classList.add("person");
//     detailsCard.innerHTML = `
//       <img src="${personData.avatar}" alt="Avatar ${personId}">
//       <h3>${personData.firstName} ${personData.lastName}</h3>
//       <p>${personData.email}</p>
//       <p>${personData.description}</p>
//     `;
  
//     // Ajoute la card de détails à la page
//     detailsContainer.appendChild(detailsCard);
  
//     // Affiche les détails
//     detailsContainer.style.display = "block";
//   }
  
//   // Fonction de simulation de récupération des données du serveur
//   function getPersonData(personId) {
//     // Exemple de données pour deux personnes
//     var peopleData = {
//       1: {
//         firstName: "John",
//         lastName: "Doe",
//         email: "john.doe@example.com",
//         avatar: "avatar1.jpg",
//         description: "Description détaillée de John Doe."
//       },
//       2: {
//         firstName: "Jane",
//         lastName: "Smith",
//         email: "jane.smith@example.com",
//         avatar: "avatar2.jpg",
//         description: "Description détaillée de Jane Smith."
//       }
//     };
  
//     // Renvoie les données de la personne correspondant à l'ID
//     return peopleData[personId];
//   }
  