export const user = JSON.parse(localStorage.getItem('login')) || {
    email: 'ivan@ivan.ru',
    name: 'Иван Иванов'
};

const headerTitle = document.getElementById('headerTitle');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

headerTitle.innerHTML = user.name;
userName.innerHTML = user.name;
userEmail.innerHTML = user.email;