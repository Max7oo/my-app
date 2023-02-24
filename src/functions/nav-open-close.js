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
};