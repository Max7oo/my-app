import maatje from '../media/maatje.svg';
import delivar from '../media/delivar.png';

window.onload=function(){    

    const workThumbnail = document.querySelector('.work-thumbnail-image');
    const itemOne = document.querySelector('.work-item-1');
    const itemTwo = document.querySelector('.work-item-2');

    itemOne.addEventListener('mouseover', (e) => {
        workThumbnail.setAttribute('src', maatje);
    });

    itemTwo.addEventListener('mouseover', (e) => {
        workThumbnail.setAttribute('src', delivar);
    });
};