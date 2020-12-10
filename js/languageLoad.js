import { loadMainMenu, loadLanguages } from './helperFunctions.js';

const initialLoad = () => {
  loadLanguages('biography');
  loadMainMenu('SR');
};

$(function () {
  initialLoad();
});
