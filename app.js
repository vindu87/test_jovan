$(document).ready(() => {
  $('a[href^="#"]').on('click', function (e) {
    if (this.hash === '') {
    }
    e.preventDefault();

    var target = this.hash === '' ? '#start' : this.hash,
      $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        'swing',
        function () {
          window.location.hash = target;
        }
      );
  });

  $('.button').click(function () {});

  changeLanguage = (val) => {
    $('#language')[0].innerText = val;
  };

  var playing = 0;

  anyAudioPlaying = (id) => {
    if (playing != 0 && playing != id) {
      return true;
    } else {
      return false;
    }
  };

  playAudio = (id) => {
    if (anyAudioPlaying(id)) {
      return;
    }
    var element = document.getElementById(`poem${id}`);
    var play = 'fa-play-circle';
    var pause = 'fa-pause-circle';
    var color = 'audio-playing';
    var audio = document.getElementById(id);

    if (element.className.includes(play)) {
      element.classList.remove(play);
      element.classList.add(pause, color);
      audio.play();
      playing = id;
    } else {
      element.classList.remove(pause, color);
      element.classList.add(play);
      audio.pause();
      audio.currentTime = 0;
      playing = 0;
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

  toggleDisplay = (id) => {
    var x = document.getElementById(id);
    if (x.style.visibility === 'hidden') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  };
});
