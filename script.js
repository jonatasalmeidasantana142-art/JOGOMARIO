const mario = document.querySelector('.mario');

const pulo = () => {
    if (mario.classList.contains('pulo')) return;

    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
};

document.addEventListener('keydown', pulo);