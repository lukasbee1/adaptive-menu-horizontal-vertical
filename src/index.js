import './css/hamburgers.css';
import './css/style.css';


let isOpen = false;

        let menuElement = document.querySelector('.nav__menu');
        let nav = document.querySelector('.nav');
        let btn = document.querySelector('.mobile-switch');

        document.querySelector('.mobile-switch').addEventListener('click', () => {
            if (isOpen) {
                menuElement.classList.remove('open');
                nav.classList.remove('active');
                nav.classList.remove('vertical');
                nav.classList.add('horizontal');
                btn.classList.remove('is-active');
                isOpen = false;
            } else {
                menuElement.classList.add('open');
                nav.classList.add('active');
                nav.classList.remove('horizontal');
                nav.classList.add('vertical');
                btn.classList.add('is-active');
                isOpen = true;
            }
        })
