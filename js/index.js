let ytPlayer;

window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player('ytplayer', {
    height: '0',
    width: '0',
    videoId: '41O_MydqxTU',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};

function onPlayerReady(event) {
  document.getElementById('playButton').addEventListener('click', () => {
    event.target.playVideo();
    event.target.setVolume(100);
    document.getElementById('playButton').style.display = 'none';
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    document.getElementById('playButton').style.display = 'inline-block';
  }
}
