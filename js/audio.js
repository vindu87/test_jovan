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

  // poemsAudioToIdMapper = (id) => {
  //   switch (id) {
  //     case 1:
  //       return 'huk_mrtve_sove';
  //     default:
  //       break;
  //   }
  // };

  const publicationIds = [
    'brodar',
    // 'skola',
    // 'cestar',
    'tronozac',
    'cekrk',
    'napev',
    // 'izvestaj',
    'cegrtusa',
    'ostrvo',
    'gajde',
    'nove',
  ];

  const sr_brodar = [
    { name: 'Благост линија', link: 'blagost_linija' },
    { name: 'Ноћне звери', link: 'nocne_zveri' },
  ];

  const sr_skola = [];
  const sr_cestar = [];
  const sr_tronozac = [
    { name: 'Радосно за догађај везан', link: 'radosno_za_dogadjaj_vezan' },
    { name: 'Преслишавам се', link: 'preslisavam_se' },
  ];
  const sr_cekrk = [
    { name: 'Осветлјенје је слабо', link: 'osvetljenje_je_slabo' },
    { name: 'Узлеће шишмиш', link: 'uzlece_sismis' },
  ];
  const sr_napev = [
    { name: 'Зимски извештај', link: 'zimski_izvestaj' },
    { name: 'Црни синко', link: 'crni_sinko' },
  ];
  const sr_izvestaj = [];
  const sr_cegrtusa = [
    { name: 'Твор', link: 'tvor' },
    { name: 'Обретење', link: 'obretenje' },
    { name: 'Краљ гусака', link: 'kralj_gusaka' },
  ];
  const sr_ostrvo = [
    { name: 'Поводац', link: 'povodac' },
    { name: 'Острво', link: 'ostrvo' },
    { name: 'Окрећем се богу', link: 'okrecem_se_bogu' },
  ];
  const sr_gajde = [
    { name: 'Гвоздене вилице', link: 'gvozdene_vilice' },
    { name: 'Тег', link: 'teg' },
    { name: 'Савиј се', link: 'savij_se' },
    { name: 'Доушник', link: 'dousnik' },
    { name: 'Битанга', link: 'bitanga' },
    { name: 'Брехтове куће', link: 'brehtove_kuce' },
    { name: 'Под облацима', link: 'pod_oblacima' },
  ];
  const sr_nove = [
    { name: 'Поседи', link: 'posedi' },
    { name: 'О. речи', link: 'o_reci' },
  ];

  const srpoems = new Object();
  srpoems['brodar'] = sr_brodar;
  // srpoems['skola'] = sr_skola;
  // srpoems['cestar'] = sr_cestar;
  srpoems['tronozac'] = sr_tronozac;
  srpoems['cekrk'] = sr_cekrk;
  srpoems['napev'] = sr_napev;
  // srpoems['izvestaj'] = sr_izvestaj;
  srpoems['cegrtusa'] = sr_cegrtusa;
  srpoems['ostrvo'] = sr_ostrvo;
  srpoems['gajde'] = sr_gajde;
  srpoems['nove'] = sr_nove;

  const classClosed = 'fa-caret-right';
  const classOpen = 'fa-caret-down';

  const closeElement = (element, id) => {
    const icon = document.getElementById(`${id}icon`);
    if (icon) {
      icon.classList.remove(classOpen);
      icon.classList.add(classClosed);
    }
    element.innerHTML = '';
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

    const icon = document.getElementById(`${id}icon`);
    if (icon.classList.contains(classOpen)) {
      closeElement(el, id);
    } else {
      if (icon) {
        icon.classList.remove(classClosed);
        icon.classList.add(classOpen);
      }
      const poems = srpoems[id];
      poems.forEach((p) => {
        el.innerHTML += `<div onclick=loadPoem("${p.link}")>${p.name}</div>`;
      });
    }
  };

  loadPoem = (page) => {
    let el = document.getElementById('includePoem');
    el.style.opacity = 0;
    setTimeout(() => {
      $('#includePoem').load(`./sr/poetry/${page}.html`);
      el.style.opacity = 1;
    }, 500);
  };
})();
