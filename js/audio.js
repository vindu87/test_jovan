(function () {

var playing = 0;

anyAudioPlaying = (id) => {
  if (playing != 0 && playing != id) {
    return true;
  } else {
    return false;
  }
};

var play = 'fa-play-circle';
var pause = 'fa-pause-circle';
var color = 'audio-playing';

stopAudio = (id) => {
  var audio = document.getElementById(id);
  var element = document.getElementById(`poem${id}`);
  element.classList.remove(pause, color);
  element.classList.add(play);
  audio.pause();
  audio.currentTime = 0;
  playing = 0;
};

playAudio = (id) => {
  if (anyAudioPlaying(id)) {
    stopAudio(playing);
  }

  var element = document.getElementById(`poem${id}`);
  if (element.className.includes(play)) {
    var audio = document.getElementById(id);
    element.classList.remove(play);
    element.classList.add(pause, color);
    audio.play();
    playing = id;
  } else {
    stopAudio(id);
  }
};

poemsAudioToIdMapper = (id) => {
  switch (id) {
    case 1:
      return 'huk_mrtve_sove';
    default:
      break;
  }
};
})();
