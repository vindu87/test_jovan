import { getValue, loadLngMenu, loadMainMenu } from './helperFunctions.js';

(function () {
  var value = getValue('currentLanguage');
  if (value === 'novalue') {
    loadLngMenu('SR');
    loadMainMenu('SR');
  } else {
    loadLngMenu(value);
    loadMainMenu(value);
  }
})();
