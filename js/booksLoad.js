import { getValue } from './helperFunctions.js';

(function () {
  var value = getValue('currentLanguage');
  $('#includeBooks').load(
    `../pages/${value === 'novalue' ? 'sr' : value}/books.html`
  );
})();
