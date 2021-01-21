import {
  save,
  loadLanguages,
  loadMainMenu,
  goTo,
  focusElement,
} from './js/helperFunctions.js';

window.toTheTop = function toTheTop() {
  window.scrollTo(50, 0);
};

const lngContentActive = 'language-droprown-active';
const pushContent = 'pushLanguage';

window.expandLanguage = function expandLanguage() {
  var content = document.getElementById('languagedroprown');
  var push = document.getElementById('pushDiv');
  const childrenCount = content.childElementCount;
  const isPushContent = childrenCount > 0 && window.innerWidth < 800;
  if (childrenCount > 0) {
    if (!content.className.includes(lngContentActive)) {
      content.classList.add(lngContentActive);
      if (isPushContent) {
        push.classList.add(pushContent);
        push.style.height = `${childrenCount * 33}px`;
      }
    } else {
      content.classList.remove(lngContentActive);
      if (isPushContent) {
        push.classList.remove(pushContent);
        push.style.height = `0px`;
      }
    }
  }
};

window.colapse = function colapse() {
  var content = document.getElementById('languagedroprown');
  content.classList.remove(lngContentActive);
  var push = document.getElementById('pushDiv');
  push.classList.remove(pushContent);
  push.style.height = `0px`;
};

// (function () {
window.toggleLanguage = function toggleLanguage(lng, page) {
  save('currentLanguage', lng.toUpperCase());
  loadLanguages(page);
  loadMainMenu(lng);
  $('#includeContent').load(`./${lng.toLowerCase()}/${page}.html`);
  expandLanguage();
  focusElement(`/${page}.html`);
  toTheTop();
};

window.goTo = goTo;

window.toTheItem = function toTheItem(id, minus = 0, plus = 0) {
  let el = document.getElementById(id);
  if (el) {
    window.scroll(0, el.offsetTop - minus + plus);
  }
};
