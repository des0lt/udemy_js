'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');


let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0) rotate(0deg)',
             filter: 'opacity(100%)'
            },
            {transform: 'translateY(100px) rotate(180deg)',
             filter: 'opacity(50%)'
            },
            {transform: 'translateY(-100px) rotate(270deg)',
             filter: 'opacity(75%)'
            },
            {transform: 'translateY(0) rotate(360deg)',
             filter: 'opacity(100%)'
            }
        ], {
            duration: 3000,
            iterations: Infinity
        }); 
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
})

let macbookAnimation;
btnMacbook.addEventListener('click', () => {
    if (!macbookAnimation) {
        macbookAnimation = images[1].animate([
            {transform: 'translateX(0) translateY(0) rotate(0deg)'},
            {transform: 'translateX(100%) translateY(-100%) rotate(180deg)'},
            {transform: 'translateX(250%) translateY(0%) rotate(360deg)'},
            {transform: 'translateX(0) translateY(0) rotate(360deg)'}
        ], {    
            duration: 3000,
            iterations: Infinity
        }); 
    } else if (macbookAnimation.playState === 'paused') {
        macbookAnimation.play();
    } else {
        macbookAnimation.pause();
    }
})