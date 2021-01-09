import { loadMainMenu, loadLanguages, getValue } from './helperFunctions.js';

const initialLoad = () => {
  loadLanguages('biography');

  var currentValue = getValue('currentLanguage');
  loadMainMenu(currentValue === 'novalue' ? 'SR' : currentValue);

  const firstFocus = document.getElementById('/biography.html');
  if (firstFocus) {
    firstFocus.classList.add('active');
  }

};

$(function () {
  initialLoad();
});
