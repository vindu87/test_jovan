import { getValue } from './helperFunctions.js';

(function () {
  var value = getValue('currentLanguage');
  $('#includeBiography').load(
    `../pages/${value === 'novalue' ? 'sr' : value}/biography.html`
  );
})();
