import maatje from '../media/maatje.svg';
import delivar from '../media/delivar.png';

window.onload=function(){    

    const mobileNav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle-mobile');

    navToggle.addEventListener('click', (e) => {
        const visibility = mobileNav.getAttribute('data-visible');
        

        if (visibility === 'false') {
            mobileNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
            navToggle.innerText = 'CLOSE';
        } else if (visibility === 'true') {
            mobileNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
            navToggle.innerText = 'MENU';
        }
    });

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