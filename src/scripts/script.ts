const player = document.querySelector('.player');
const volumeSlider = document.querySelector('.slider') as HTMLInputElement;
const controlButton = document.querySelector('.btn-control') as HTMLButtonElement;
const audio = document.querySelector('#audio') as HTMLAudioElement;

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
