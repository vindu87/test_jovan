import { loadMainMenu, loadLanguages } from './helperFunctions.js';

const initialLoad = () => {
  loadLanguages('biography');
  loadMainMenu('SR');
};

window.addEventListener('load', function () {
  initialLoad();
});
