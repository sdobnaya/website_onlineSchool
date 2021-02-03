import { saveToStorage } from './login';

console.log('wizard');


// Решение Задача 1


// Войти в школу -> Кто ты? (кнопка Зарегестрироваться)

document.getElementById('regBtn').addEventListener('click', () => {
    document.getElementById('loginBlock').style.display = 'none';
    document.getElementById('step1Block').style.display = 'flex';
    document.getElementById('regBlock').style.display = 'none';
});


// Кто ты? -> Войти в школу (кнопка Назад)

document.getElementById('toLoginSvg').addEventListener('click', () => {
    document.getElementById('step1Block').style.display = 'none';
    document.getElementById('loginBlock').style.display = 'flex';
    document.getElementById('regBlock').style.display = 'none';
});


// Кто ты? -> Зарегестрироваться сейчас (кнопка Продолжить и пагинация)

let toStep2 = () => {
    document.getElementById('step1Block').style.display = 'none';
    document.getElementById('regBlock').style.display = 'flex';
    document.getElementById('loginBlock').style.display = 'none';
};
    
document.getElementById('from1to2').addEventListener('click', toStep2);
document.getElementById('toStep2Btn').addEventListener('click', toStep2);


// Зарегестрироваться сейчас -> Кто ты? (кнопка Назад и пагинация)

let toStepBack = () => {
    document.getElementById('step1Block').style.display = 'flex';
    document.getElementById('regBlock').style.display = 'none';
    document.getElementById('loginBlock').style.display = 'none';
};
    
document.getElementById('from2to1').addEventListener('click', toStepBack);
document.getElementById('from3to2Svg').addEventListener('click', toStepBack);


// Решение Задача 2

{
    let user = {};

    document.getElementById('toStep2Btn').addEventListener('click', () => {                        // при нажатии на кнопку 'Продолжить'
        let studentBtn = document.getElementById('user_student');                                  // присваиваем кнопку студента переменной

        if (studentBtn.checked === true) {                                                          // если аттрибут кнопки студента тру
            user.type = 'student';                                                                 // то записываем - студент
        } else {
            user.type = 'teacher';                                                                 // иначе записываем - учитель
        }
    });

    document.getElementById('createAccount').addEventListener('click', () => {                     // при нажатии на кнопку 'Создать аккаунт'
        let name = document.getElementById('name').value;                                          // присваиваем значение инпута имени переменной

        if (typeof name !== 'string'){                                                             // проверяем, является ли имя строкой
            document.getElementById('name').classList.add('error');
            return alert ('Укажите реальное имя пользователя');
        }

        let nameArr = name.split(' ');                                                          // разбиваем строку по пробелу на две строки

        if (nameArr[0].length >= 3 && nameArr[1].length >= 3) {                                    // проверяем длину имени и фамилии
            user.name = document.getElementById('name').value;                                     // если все ок, записывсаем значение инпута в объект
        } else {
            document.getElementById('name').classList.add('error');
            return alert ('Укажите реальное имя пользователя');
        }

        let email = document.getElementById('email').value;                                        // присваиваем значение инпута почты переменной 

        if (email.includes('@') === true) {                                                         // проверяем формат почты
            user.email = document.getElementById('email').value;                                   // если все ок, кидаем значение почты в общий объект
        } else {
            document.getElementById('email').classList.add('error');
            return alert ('Укажите реальный почтовый адрес');
        }

        if (document.getElementById('password').value !== document.getElementById('password_next').value) {          // проверяем, совпадают ли пароли
            document.getElementById('password').classList.add('error');
            document.getElementById('password_next').classList.add('error');
            return alert ('Пароли не сопадают');
        } else {
            user.password = document.getElementById('password').value;                             // если все ок, записываем в объект
        }

        //формируем локал сторидж

        localStorage.setItem('login', JSON.stringify(user));

        if (user.type === "student") {
            const source = localStorage.getItem("students");
            const localStorageUsers = source ? JSON.parse(source) : [];  
            
            if (localStorageUsers.length) {
                localStorageUsers.push(user);
                localStorage.setItem("students", JSON.stringify(localStorageUsers));
            } else {
                const users = [user];
                localStorage.setItem("students", JSON.stringify(users));
            }   
            
            window.location.href = "student.html";
        } else {
            const isTeacherNotExists = localStorage.getItem("teacher") === null;  
                
            if (isTeacherNotExists) {
                localStorage.setItem("teacher", JSON.stringify(user));
                window.location.href = "teacher.html";
            } else {
                alert("Учитель уже есть");
            }
        }  
    });                                      
}







//document.getElementByClassName("form-login").reset();                                     // отчистили форму

