const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pulo = (evento) => {

    if (evento.key !== 'ArrowUp') return;
    if (mario.classList.contains('pulo')) return;

    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
};

const loop = setInterval(() => {
    
    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace
    ('px', '');


    if (pipePosition <= 243 && pipePosition > 0 && marioPosition < 130) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    
    }

}, 10);

document.addEventListener('keydown', pulo);