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

// menu functions
export const loadLngMenu = (language) => {
  var btn = document.getElementById('language');
  var dropdown = document.getElementById('languagedroprown');
  if (dropdown && btn) {
    dropdown.innerHTML = '';
    btn.innerText = language;
    if (language !== 'SR') {
      dropdown.innerHTML += '<a onclick=toggleLanguage("sr")>SR</a>';
    }
    if (language !== 'EN') {
      dropdown.innerHTML += '<a onclick=toggleLanguage("en")>EN</a>';
    }
    if (language !== 'FR') {
      dropdown.innerHTML += '<a onclick=toggleLanguage("fr")>FR</a>';
    }
    if (language !== 'RU') {
      dropdown.innerHTML += '<a onclick=toggleLanguage("ru")>RU</a>';
    }
  }
};

const sr_links = [
  { name: 'О Аутору', link: './biography.html' },
  { name: 'Поезија', link: './poetry.html' },
  { name: 'Књиге', link: './books.html' },
  { name: 'Интервјуи', link: '#' },
  { name: 'Догађаји', link: '#' },
  { name: 'Видео', link: './video.html' },
];

const en_links = [
  { name: 'Biography', link: './biography.html' },
  { name: 'Poetry', link: '#' },
  { name: 'Books', link: './books.html' },
  { name: 'Interview', link: '#' },
  { name: 'Events', link: '#' },
  { name: 'Video', link: './video.html' },
];

const links = new Object();
links['sr'] = sr_links;
links['en'] = en_links;

//main menu change
export const loadMainMenu = (language) => {
  var navigation = document.getElementById('navigation');
  var sandwich = document.getElementById('sandwichcontent');

  if (navigation && sandwich) {
    navigation.innerHTML = '';
    sandwich.innerHTML = '';
    var lngLinks = links[language.toLowerCase()];
    lngLinks.forEach((e) => {
      navigation.innerHTML += `<li><a href="${e.link}">${e.name}</a></li>`;
      sandwich.innerHTML += `<a href="${e.link}">${e.name}</a>`;
    });
  }
};
