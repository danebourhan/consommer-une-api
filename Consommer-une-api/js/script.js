
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

