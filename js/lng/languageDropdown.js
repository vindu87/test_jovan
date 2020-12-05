const sr_links = [{ name: 'home', link: '' }];

export const loadMenu = (language) => {
  var btn = document.getElementById('language');
  var dropdown = document.getElementById('languagedroprown');
  if (dropdown && btn) {
    dropdown.innerHTML = '';

    btn.innerText = language;
    if (language !== 'SR') {
      dropdown.innerHTML += '<a href="./pages/sr/biography.html">SR</a>';
    }
    if (language !== 'EN') {
      dropdown.innerHTML += '<a onclick=loadText("en")>EN</a>';
    }
    if (language !== 'FR') {
      dropdown.innerHTML += '<a href="./pages/fr/biography.html">FR</a>';
    }
    if (language !== 'RU') {
      dropdown.innerHTML += '<a href="./pages/ru/biography.html">RU</a>';
    }
    if (language !== 'DE') {
      dropdown.innerHTML += '<a onclick=loadText()>test</a>';
    }
  }
};
