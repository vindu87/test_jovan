import { loadMainMenu, loadLnguages } from './helperFunctions.js';

const initialLoad = () => {
  loadLnguages('biography');
  loadMainMenu('SR');
};

window.addEventListener('load', function () {
  initialLoad();
});
