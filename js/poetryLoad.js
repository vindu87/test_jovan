import { getValue } from './helperFunctions.js';

(function () {
  var value = getValue('currentLanguage');
  $('#includePoetry').load(
    `../pages/${value === 'novalue' ? 'sr' : value}/poetry.html`
  );
})();
