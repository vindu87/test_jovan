import { getValue } from '../js/helperFunctions.js';

(function () {
  var value = getValue('currentLanguage');
  $('#includePoetry').load(
    `../pages/${value === 'novalue' ? 'sr' : value.toLowerCase()}/poetry.html`
  );
})();
