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

  /*---------------
  SERBIAN PUBLICATIONS
  ----------------*/
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

  /*---------------
  END SERBIAN PUBLICATIONS
  ----------------*/

  /*---------------
  ENGLISH PUBLICATIONS
  ----------------*/
  const publicationEnIds = ['ninepoets'];

  const en_ninepoets = [
    { name: 'As I am informed', link: 'as_i_am_informed' },
    { name: 'Examin myself', link: 'examin_myself' },
    { name: 'Ha', link: 'ha' },
    { name: 'Haystack', link: 'haystack' },
    { name: 'I turn around in god', link: 'i_turn_around_in_god' },
    { name: 'In the dusk', link: 'in_the_dusk' },
    { name: 'Iron jaws', link: 'iron_jaws' },
    { name: 'Joyfull bound to the event', link: 'joyfull' },
    { name: 'Little tongue', link: 'little_tongue' },
    { name: 'Ode', link: 'ode' },
    { name: 'Oh sad sack sonny', link: 'oh_sad_sack_sonny' },
    { name: 'Revelation', link: 'revelation' },
    { name: 'The bend', link: 'the_bend' },
    { name: "Brecht's House", link: 'the_brecthst_house' },
    { name: 'The gender king', link: 'the_gender_king' },
    { name: 'The island', link: 'the_island' },
    { name: 'The leash', link: 'the_leash' },
    { name: 'The lighting is week', link: 'the_lighting_is_week' },
    { name: 'The tomcat', link: 'the_tomcat' },
    { name: 'The wicked guest', link: 'the_wicked_guest' },
    { name: 'The winter report', link: 'the_winter_report' },
    { name: 'Weight', link: 'weight' },
  ];

  const enpoems = new Object();
  enpoems['ninepoets'] = en_ninepoets;

  /*---------------
  END ENGLISH PUBLICATIONS
  ----------------*/

  /*---------------
  SPANISH PUBLICATIONS
  ----------------*/
  const publicationEsIds = ['informe'];

  const es_informe = [
    { name: 'Desgraciado hijo mio', link: 'desgraciado' },
    { name: 'Informe invernal', link: 'informe' },
    { name: 'Doblegate', link: 'doblegate' },
    { name: 'Isla', link: 'isla' },
    { name: 'El gato', link: 'gato' },
    { name: 'Casas de brecht', link: 'casas' },
    { name: 'Dentro de casas', link: 'dentro' },
    { name: 'Almiar', link: 'almiar' },
    { name: 'Plomo', link: 'plomo' },
    { name: 'Propiedades', link: 'propiedades' },
  ];

  const espoems = new Object();
  espoems['informe'] = es_informe;

  /*---------------
  END SPANISH PUBLICATIONS
  ----------------*/

  /*---------------
  FRENCH PUBLICATIONS
  ----------------*/
  const publicationFrIds = ['leroi'];

  const fr_leroi = [
    { name: 'Joyeusement a un événement lié', link: 'joyeusement' },
    { name: 'La descente', link: 'la_descente' },
    { name: 'La laisse', link: 'la_laise' },
    { name: 'Le chat', link: 'le_chat' },
    { name: 'Le poids', link: 'le_poids' },
    { name: 'Le roi des oies', link: 'le_roi' },
    { name: 'Les bosquets', link: 'les_bousqets' },
    { name: 'Les mâchoires de fer', link: 'les_machoires' },
    { name: 'Les maisons de brecht', link: 'les_maisons' },
    { name: 'L’île', link: 'lile' },
    { name: 'Mal invité', link: 'mal_invite' },
    { name: 'Mon pauvre fils', link: 'mon_pavre' },
    { name: 'Propriétés', link: 'propreties' },
    { name: '***', link: 'star' },
  ];

  const frpoems = new Object();
  frpoems['leroi'] = fr_leroi;

  /*---------------
  END FRENCH PUBLICATIONS
  ----------------*/

  /*---------------
  РУСКИ PUBLICATIONS
  ----------------*/
  const publicationRusIds = ['зимски'];

  const rus_зимски = [
    { name: 'Зимний отчет', link: 'отчет' },
    { name: 'Злой гость', link: 'гост' },
    { name: 'Поводок', link: 'поводок' },
    { name: 'Oстров', link: 'остров' },
    { name: 'Дома брехта', link: 'дома' },
    { name: 'Освещение слабое ', link: 'слабое' },
    { name: 'Я поворачиваюсь к богу', link: 'богу' },
    { name: 'Железные челюсти', link: 'челости' },
    { name: 'О. слова', link: 'слова' },
    { name: 'Имения', link: 'имениа' },
  ];

  const ruspoems = new Object();
  ruspoems['зимски'] = rus_зимски;

  /*---------------
  END РУСКИ PUBLICATIONS
  ----------------*/ getPublicationIds = () => {
    const lng = window.localStorage.getItem('currentLanguage');
    switch (lng.toLowerCase()) {
      case 'sr':
        return publicationIds;
      case 'en':
        return publicationEnIds;
      case 'es':
        return publicationEsIds;
      case 'fr':
        return publicationFrIds;
      case 'rus':
        return publicationRusIds;
      default:
        return publicationIds;
    }
  };

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

  const closeMulty = (id) => {
    const ids = getPublicationIds();
    const closeIds = ids.filter((x) => x !== id);
    closeIds.forEach((id) => {
      const el = document.getElementById(id);
      // el.style.opacity = 0;
      // setTimeout(() => {
      //   closeElement(el, id);
      //   el.style.opacity = 1;
      // }, 500);
      closeElement(el, id);
    });
  };

  expandPoems = (id) => {
    var el = document.getElementById(id);

    if (el && el.childElementCount === 0) {
      closeMulty(id);
    }

    const icon = document.getElementById(`${id}icon`);
    if (icon.classList.contains(classOpen)) {
      closeElement(el, id);
    } else {
      if (icon) {
        icon.classList.remove(classClosed);
        icon.classList.add(classOpen);
      }

      const poems = getPoems();
      const publication = poems[id];
      // el.style.opacity = 0;
      // setTimeout(() => {
      //   poems.forEach((p) => {
      //     el.innerHTML += `<div onclick=loadPoem("${p.link}")>${p.name}</div>`;
      //   });
      //   el.style.opacity = 1;
      // }, 500);
      publication.forEach((p) => {
        el.innerHTML += `<div class="poem" onclick=loadPoem("${p.link}")>${p.name}</div>`;
      });
    }
  };

  getPoems = () => {
    const lng = window.localStorage.getItem('currentLanguage');
    switch (lng.toLowerCase()) {
      case 'sr':
        return srpoems;
      case 'en':
        return enpoems;
      case 'es':
        return espoems;
      case 'fr':
        return frpoems;
      case 'rus':
        return ruspoems;
      default:
        return srpoems;
    }
  };

  loadPoem = (page) => {
    const lng = window.localStorage.getItem('currentLanguage');

    let el = document.getElementById('includePoem');
    el.style.opacity = 0;
    setTimeout(() => {
      $('#includePoem').load(`./${lng.toLowerCase()}/poetry/${page}.html`);
      el.style.opacity = 1;
    }, 500);
  };
})();
