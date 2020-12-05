// import { loadMenu } from './js/lng/languageDropdown.js';

// export const toggleDisplay = (id) => {
//   var x = document.getElementById(id);
//   if (x.style.visibility === 'hidden') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// };

// export const loadText = (lng) => {
//   loadMenu(lng);
//   if (lng === 'EN') {
//     $('#includeBiography').load(`./${lng}/biography.html`);
//   }
// };

(function () {
  // $('a[href^="#"]').on('click', function (e) {
  //   if (this.hash === '') {
  //   }
  //   e.preventDefault();

  //   var target = this.hash === '' ? '#start' : this.hash,
  //     $target = $(target);

  //   $('html, body')
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $target.offset().top,
  //       },
  //       900,
  //       'swing',
  //       function () {
  //         window.location.hash = target;
  //       }
  //     );
  // });

  // $('.button').click(function () {});

  // changeLanguage = (val) => {
  //   $('#language')[0].innerText = val;
  //  };
  loadLngMenu = (language) => {
    var btn = document.getElementById('language');
    var dropdown = document.getElementById('languagedroprown');
    if (dropdown && btn) {
      dropdown.innerHTML = '';

      btn.innerText = language;
      if (language !== 'SR') {
        dropdown.innerHTML += '<a href="./pages/sr/biography.html">SR</a>';
      }
      if (language !== 'EN') {
        dropdown.innerHTML += '<a onclick=loadText("en")>EN</a>';
      }
      if (language !== 'FR') {
        dropdown.innerHTML += '<a href="./pages/fr/biography.html">FR</a>';
      }
      if (language !== 'RU') {
        dropdown.innerHTML += '<a href="./pages/ru/biography.html">RU</a>';
      }
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

  loadText = (lng) => {
    loadLngMenu(lng.toUpperCase());
    if (lng.toLowerCase() === 'en') {
      $('#includeBiography').load(`./${lng}/biography.html`);
    }
  };
})();
