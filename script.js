const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const backgroundMusic = document.querySelector('.background-music');

const startBackgroundMusic = () => {
    backgroundMusic.muted = false;
    backgroundMusic.play().catch(() => {});
};

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


    if (pipePosition <= 243 && pipePosition > 100 && marioPosition <214) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    
    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
    mario.style.height = '75px';

    animation: none;

    clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulo);
document.addEventListener('keydown', startBackgroundMusic, { once: true });
document.addEventListener('pointerdown', startBackgroundMusic, { once: true });