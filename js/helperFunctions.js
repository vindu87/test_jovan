//save
export const save = (item, value) => {
  localStorage.setItem(item, value);
};

//get saved item value
export const getValue = (item) => {
  if (window.localStorage) {
    var storage = window.localStorage;
    var value = storage.getItem(item);
    // localStorage.removeItem(item);
    return value ? value : 'novalue';
  } else return 'novalue';
};

const sr_links = [
  { name: 'О Аутору', link: '/biography.html' },
  { name: 'Поезија', link: '/poetry.html' },
  { name: 'Књиге', link: '/books.html' },
  { name: 'Интервјуи', link: '/interview.html' },
  { name: 'Догађаји', link: '/events.html' },
  { name: 'Видео', link: '/video.html' },
];

const en_links = [
  { name: 'Biography', link: '/biography.html' },
  { name: 'Poetry', link: '/poetry.html' },
  { name: 'Books', link: '/books.html' },
  { name: 'Video', link: '/video.html' },
];

const fr_links = [
  { name: 'Biographie', link: '/biography.html' },
  { name: 'Livres', link: '/books.html' },
];
const ru_links = [
  { name: 'Biografie', link: '/biography.html' },
  { name: 'Cărți', link: '/books.html' },
];

const links = new Object();
links['sr'] = sr_links;
links['en'] = en_links;
links['fr'] = fr_links;
links['ru'] = ru_links;

//main menu change
export const loadMainMenu = (language) => {
  var navigation = document.getElementById('navigation');
  var sandwich = document.getElementById('sandwichcontent');

  if (navigation && sandwich) {
    navigation.innerHTML = '';
    sandwich.innerHTML = '';
    var lngLinks = links[language.toLowerCase()];
    lngLinks.forEach((e) => {
      navigation.innerHTML += `<li><a onclick="goTo('${e.link}')">${e.name}</a></li>`;
      sandwich.innerHTML += `<a onclick="goTo('${e.link}')">${e.name}</a>`;
    });
  }
};

export const hideLngDropdown = () => {
  var el = document.getElementById('languagedroprown');
  //el.classList.add('dropdown-content-hidden');
};

const page_lngs = new Object();
page_lngs['biography'] = ['sr', 'en', 'fr', 'ru'];
page_lngs['poetry'] = ['sr', 'en'];
page_lngs['books'] = ['sr', 'en', 'fr', 'ru'];
page_lngs['events'] = ['sr'];
page_lngs['interview'] = ['sr'];
page_lngs['video'] = ['sr', 'en'];

export const loadLnguages = (page) => {
  var currentValue = getValue('currentLanguage');
  const lngs = page_lngs[page];
  var btn = document.getElementById('language');
  var dropdown = document.getElementById('languagedroprown');

  btn.innerText = currentValue === 'novalue' ? 'SR' : currentValue;

  if (dropdown && btn) {
    dropdown.innerHTML = '';
    lngs.forEach((l) => {
      if (btn.innerText.toLowerCase() !== l.toLowerCase()) {
        dropdown.innerHTML += `<a onclick=toggleLanguage("${l.toLowerCase()}","${page}")>${l.toUpperCase()}</a>`;
      }
    });
  }
};

export const goTo = (page) => {
  var value = getValue('currentLanguage');
  $('#includeContent').load(
    `./${value === 'novalue' ? 'sr' : value.toLowerCase()}${page}`
  );

  loadLnguages(page.replace('.html', '').replace('/', ''));
};
