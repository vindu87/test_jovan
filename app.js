import {
  save,
  loadLanguages,
  loadMainMenu,
  goTo,
} from './js/helperFunctions.js';

const lngContentActive = 'language-droprown-active';
const pushContent = 'pushLanguage';

window.expandLanguage = function expandLanguage() {
  var content = document.getElementById('languagedroprown');
  var push = document.getElementById('pushDiv');

  if (!content.className.includes(lngContentActive)) {
    content.classList.add(lngContentActive);
    push.classList.add(pushContent);
  } else {
    content.classList.remove(lngContentActive);
    push.classList.remove(pushContent);
  }
};

// (function () {
window.toggleLanguage = function toggleLanguage(lng, page) {
  save('currentLanguage', lng.toUpperCase());
  loadLanguages(page);
  loadMainMenu(lng);
  $('#includeContent').load(`./${lng.toLowerCase()}/${page}.html`);
  expandLanguage();
};

window.goTo = goTo;

//show/hide element
window.toggleDisplay = function toggleDisplay(id) {
  var x = document.getElementById(id);
  if (x) {
    if (x.style.visibility === 'hidden') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
};

// window.scrollTop = function scrollTop() {
//   window.scrollTo(50, 0);
// };

window.toTheTop = function toTheTop() {
  console.log('test');
  window.scrollTo(50, 0);
};

// })();
// export { toggleLanguage, toggleDisplay };
// window.toggleLanguage = toggleLanguage;
// window.toggleDisplay = toggleDisplay;
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
