const player = document.querySelector('.player');
const volumeSlider = document.querySelector('.slider');
const controlButton = document.querySelector('.btn-control');
const audio = document.querySelector('#audio');
const handleTogglePlayer = () => {
    player.classList.toggle('on');
    if (!player.classList.contains('on')) {
        audio.pause();
        return;
    }
    setTimeout(() => {
        audio.play();
    }, 1000);
};
const changePlayerVolume = () => {
    audio.volume = +volumeSlider.value;
};
const init = () => {
    player.classList.add('on');
    controlButton.addEventListener('click', handleTogglePlayer);
    volumeSlider.addEventListener('input', changePlayerVolume);
};
audio.addEventListener('canplay', init);
//# sourceMappingURL=script.js.map