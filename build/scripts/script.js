const player = document.querySelector('.player');
const loader = document.querySelector('.loader');
const volumeSlider = document.querySelector('.slider');
const buttonRecord = document.querySelector('.btn-record');
const buttonStick = document.querySelector('.btn-stick');
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
    loader.classList.add('hidden');
    player.classList.remove('hidden');
};
audio.addEventListener('canplay', init);
buttonRecord.addEventListener('click', handleTogglePlayer);
buttonStick.addEventListener('click', handleTogglePlayer);
volumeSlider.addEventListener('input', changePlayerVolume);
//# sourceMappingURL=script.js.map