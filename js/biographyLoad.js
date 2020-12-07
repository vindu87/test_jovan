import { getValue } from './helperFunctions.js';

(function () {
  var value = getValue('currentLanguage');
  $('#includeContent').load(
    `./${value === 'novalue' ? 'sr' : value.toLowerCase()}/biography.html`
  );
})();
