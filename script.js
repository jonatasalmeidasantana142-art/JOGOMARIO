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
    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 130) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    }

}, 10);

document.addEventListener('keydown', pulo);