import { timeSlots , lessons } from './constants';

let lesson = {};
let login = JSON.parse(localStorage.login);
lesson.name = login.name;
   
document.getElementById('formLessons').addEventListener('submit', (event) => {  
    event.preventDefault();
    //Длительность и тип занятия
    if (document.getElementById('type_01').checked) {
        lesson.title = lessons.type_01.title;
        lesson.duration = lessons.type_01.duration;
    }

    if (document.getElementById('type_02').checked) {
        lesson.title = lessons.type_02.title;
        lesson.duration = lessons.type_02.duration;
    }

    if (document.getElementById('type_03').checked) {
        lesson.title = lessons.type_03.title;
        lesson.duration = lessons.type_03.duration;
    }

    if (document.getElementById('type_04').checked) {
        lesson.title = lessons.type_04.title;
        lesson.duration = lessons.type_04.duration;
    }

    // Время и день занятия
    if (document.getElementById('time_01').checked) {
        lesson.time = timeSlots.time_01;
        lesson.tommorow = false;
    }

    if (document.getElementById('time_02').checked) {
        lesson.time = timeSlots.time_02;
        lesson.tommorow = false;
    }

    if (document.getElementById('time_03').checked) {
        lesson.time = timeSlots.time_03;
        lesson.tommorow = false;
    }
    
    if (document.getElementById('time_04').checked) {
        lesson.time = timeSlots.time_04;
        lesson.tommorow = true;
    }

    if (document.getElementById('time_05').checked) {
        lesson.time = timeSlots.time_05;
        lesson.tommorow = true;
    }

    if (document.getElementById('time_06').checked) {
        lesson.time = timeSlots.time_06;
        lesson.tommorow = true;
    }

    const source = localStorage.getItem('lessons');
    const localStorageLessons = source ? JSON.parse(source) : [];

    if (localStorageLessons.length) {
        localStorageLessons.push(lesson);
        localStorage.setItem('lessons', JSON.stringify(localStorageLessons));
    } else {
        const lessons = [lesson];
        localStorage.setItem('lessons', JSON.stringify(lessons));
    }   

    showBookedLessons();

});
    

function showBookedLessons(){
    let bookedLessons = null;
    bookedLessons = JSON.parse(localStorage.getItem('lessons'));
    let userName = JSON.parse(localStorage.getItem('login'));
    userName = userName.name;

    let wrap = document.getElementById('block__notification__id');
    wrap.textContent = null;

    bookedLessons?.forEach((lesson)=>{
        if ( lesson?.name === userName ){
            let block = document.createElement('div');
            block.setAttribute('class', 'card-box');
            wrap.appendChild(block);

            let imageBlock = document.createElement('div');
            imageBlock.setAttribute('class', 'card-illustration _blue');
            block.appendChild(imageBlock);

            let imageSpan = document.createElement('span');
            imageSpan.setAttribute('class', 'svg-notification');
            imageBlock.appendChild(imageSpan);

            let imageSvg = document.createElement('svg');
            imageSvg.textContent = '🔥';
            imageSpan.appendChild(imageSvg);

            let infoBlock = document.createElement('div');
            infoBlock.setAttribute('class', 'info');
            block.appendChild(infoBlock);

            let pTitle = document.createElement('p');
            pTitle.setAttribute('class', 'info-title');
            if (lesson.tommorow){
                pTitle.textContent = `${lesson.title} уже завтра`;
                infoBlock.appendChild(pTitle);
            } else {
                pTitle.textContent = `${lesson.title} уже сегодня`;
                infoBlock.appendChild(pTitle);
            }

            let pDescription = document.createElement('p');
            pDescription.setAttribute('class', 'info-desc');
            pDescription.textContent = ` Начало в ${lesson.time}:00 (${lesson.duration} минут), не опаздывай`;
            infoBlock.appendChild(pDescription);
        }
    });
};

(function(){
    let checkLessons = JSON.parse(localStorage.getItem('lessons'));
    if (checkLessons){
        showBookedLessons();
    }
})();