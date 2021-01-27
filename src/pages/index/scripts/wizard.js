import { saveToStorage } from './login';

console.log('wizard');


// Решение


// Войти в школу -> Кто ты? (кнопка Зарегестрироваться)

document.getElementById('regBtn').addEventListener('click', function() {
    document.getElementById('loginBlock').style.display = 'none';
    document.getElementById('step1Block').style.display = 'flex';
    document.getElementById('regBlock').style.display = 'none';
});


// Кто ты? -> Войти в школу (кнопка Назад)

document.getElementById('toLoginSvg').addEventListener('click', function() {
    document.getElementById('step1Block').style.display = 'none';
    document.getElementById('loginBlock').style.display = 'flex';
    document.getElementById('regBlock').style.display = 'none';
});


// Кто ты? -> Зарегестрироваться сейчас (кнопка Продолжить и пагинация)

function toStep2 () {
    document.getElementById('step1Block').style.display = 'none';
    document.getElementById('regBlock').style.display = 'flex';
    document.getElementById('loginBlock').style.display = 'none';
};
    
document.getElementById('from1to2').addEventListener('click', toStep2);
document.getElementById('toStep2Btn').addEventListener('click', toStep2);


// Зарегестрироваться сейчас -> Кто ты? (кнопка Назад и пагинация)

function toStepBack () {
    document.getElementById('step1Block').style.display = 'flex';
    document.getElementById('regBlock').style.display = 'none';
    document.getElementById('loginBlock').style.display = 'none';
};
    
document.getElementById('from2to1').addEventListener('click', toStepBack);
document.getElementById('from3to2Svg').addEventListener('click', toStepBack);
