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

  const publicationIds = [
    
    'skola',
    'cestar',
    'brodar',
    'cekrk',
    'napev',
    'izvestaj',
    'cegrtus',
  ];

  const classClosed = 'fa-caret-right';
  const classOpen = 'fa-caret-down';

  const closeElement = (element, id) => {
    if (element.childElementCount > 0) {
      const icon = document.getElementById(`${id}icon`);
      if (icon) {
        icon.classList.remove(classOpen);
        icon.classList.add(classClosed);
      }
      element.innerHTML = '';
    }
  };

  const closeMulty = (ids) => {
    ids.forEach((id) => {
      const el = document.getElementById(id);
      closeElement(el, id);
    });
  };

  expandPoems = (id) => {
    debugger;
    var el = document.getElementById(id);

    if (el && el.childElementCount === 0) {
      closeMulty(publicationIds.filter((x) => x !== id));
    }

    if (el && el.childElementCount > 0) {
      closeElement(el, id);
    } else if (el) {
      const icon = document.getElementById(`${id}icon`);
      if (icon) {
        icon.classList.remove(classClosed);
        icon.classList.add(classOpen);
      }
      el.innerHTML += `<div onclick=loadPoem("huk_mrtve_sove")>Huk mrtve sove</div>`;
      el.innerHTML += `<div onclick=loadPoem("uzlece_sismis")>Uzlece sismis</div>`;
      el.innerHTML += `<div onclick=loadPoem("huk_mrtve_sove")>Huk Mrtve sove</div>`;
    }
  };

  loadPoem = (page) => {
    $('#includePoem').load(`./sr/poetry/${page}.html`);
  };
})();
