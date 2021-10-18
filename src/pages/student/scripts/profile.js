export const user = JSON.parse(localStorage.getItem('login')) || {
    email: 'ivan@ivan.com',
    name: 'Иван Иванов'
};

const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const greeting = document.getElementById('greeting');

greeting.innerHTML = user.name;
profileName.innerHTML = user.name;
profileEmail.innerHTML = user.email;