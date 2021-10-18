console.log('planed lessons');

(function(){
    let checkLessons = JSON.parse(localStorage.getItem('lessons'));
    if (checkLessons){
        showBookedLessons();
    }
})();

function showBookedLessons(){
    let wrap = document.getElementById('block__scheduled-lessons__id');
    let checkLessons = JSON.parse(localStorage.getItem('lessons'));

    checkLessons.forEach((lesson)=>{
        let block = document.createElement('div');
        block.setAttribute('class', 'card-box');
        wrap.appendChild(block);

        let imageBlock = document.createElement('div');
        imageBlock.setAttribute('class', 'card-illustration');
        block.appendChild(imageBlock);

        
        let image = document.createElement('img');
        image.setAttribute('src', './images/user_03.png');
        imageBlock.appendChild(image);

        let infoBlock = document.createElement('div');
        infoBlock.setAttribute('class', 'info');
        block.appendChild(infoBlock);

        let pSub = document.createElement('p');
        pSub.setAttribute('class', 'sub-title');
        if(lesson.tommorow === true){
            pSub.textContent = `Завтра, ${lesson.time}:00`;
            infoBlock.appendChild(pSub);
        } else {
            pSub.textContent = `Сегодня, ${lesson.time}:00`;
            infoBlock.appendChild(pSub);
        }

        let pTitle = document.createElement('p');
        pTitle.setAttribute('class', 'info-title');
        pTitle.textContent = `${lesson.name}`;
        infoBlock.appendChild(pTitle);

        let pDesc = document.createElement('p');
        pDesc.setAttribute('class', 'info-desc');
        pDesc.textContent = `${lesson.title}`;
        infoBlock.appendChild(pDesc);
    });
    
};