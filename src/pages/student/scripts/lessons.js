console.log('lessons form');

import { timeSlots , lessons } from './constants';



let lesson = {};
let login = JSON.parse(localStorage.login);
lesson.name = login.name;

   
document.getElementById('formLessons').addEventListener('submit', () => {  
    //Длительность и тип занятия

    if (document.getElementById('type_01').checked === true) {
        lesson.title = lessons.type_01.title;
        lesson.duration = lessons.type_01.duration;
    }

    if (document.getElementById('type_02').checked === true) {
        lesson.title = lessons.type_02.title;
        lesson.duration = lessons.type_02.duration;
    }

    if (document.getElementById('type_03').checked === true) {
        lesson.title = lessons.type_03.title;
        lesson.duration = lessons.type_03.duration;
    }

    if (document.getElementById('type_04').checked === true) {
        lesson.title = lessons.type_04.title;
        lesson.duration = lessons.type_04.duration;
    }

    // Время и день занятия

    if (document.getElementById('time_01').checked === true) {
        lesson.time = timeSlots.time_01;
        lesson.tommorow = false;
    }

    if (document.getElementById('time_02').checked === true) {
        lesson.time = timeSlots.time_02;
        lesson.tommorow = false;
    }

    if (document.getElementById('time_03').checked === true) {
        lesson.time = timeSlots.time_03;
        lesson.tommorow = false;
    }
    
    if (document.getElementById('time_04').checked === true) {
        lesson.time = timeSlots.time_04;
        lesson.tommorow = true;
    }

    if (document.getElementById('time_05').checked === true) {
        lesson.time = timeSlots.time_05;
        lesson.tommorow = true;
    }

    if (document.getElementById('time_06').checked === true) {
        lesson.time = timeSlots.time_06;
        lesson.tommorow = true;
    }

    const source = localStorage.getItem("lessons");
    const localStorageLessons = source ? JSON.parse(source) : [];

    if (localStorageLessons.length) {
        localStorageLessons.push(lesson);
        localStorage.setItem("lessons", JSON.stringify(localStorageLessons));
    } else {
        const lessons = [lesson];
        localStorage.setItem("lessons", JSON.stringify(lessons));
    }   

});
    









    //   const source = localStorage.getItem("students");
    //   const localStorageUsers = source ? JSON.parse(source) : [];
