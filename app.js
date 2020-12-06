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

import { save, loadLngMenu, loadMainMenu } from './js/helperFunctions.js';

// (function () {
window.toggleLanguage = function toggleLanguage(lng) {
  save('currentLanguage', lng.toUpperCase());
  loadLngMenu(lng.toUpperCase());
  loadMainMenu(lng);
  $('#includeBiography').load(`./${lng.toLowerCase()}/biography.html`);
};

//show/hide element
window.toggleDisplay = function toggleDisplay(id) {
  var x = document.getElementById(id);
  if (x.style.visibility === 'hidden') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
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
