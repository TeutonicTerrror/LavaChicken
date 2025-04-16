document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  const ytPlayer = document.getElementById('ytplayer');

  playButton.addEventListener('click', () => {
    ytPlayer.src += '&autoplay=1';
    playButton.style.display = 'none';
  });
});
