(function () {
  const articles = [
    'smitran',
    'lepen',
    'ralf',
    'zeitung',
    'vojceh',
    'prole',
    'cistel',
    'gvozden',
    'radojcic',
    'stojanovic',
    'simljanska',
    'caslav'
  ];

  loadCritic = () => {
    let el = document.getElementById('content');
    el.style.opacity = 0;
    setTimeout(() => {
      articles.forEach((a) => {
        $(`#${a}`).load(`./sr/criticism/${a}.html`);
      });

      el.style.opacity = 1;
    }, 500);
  };

  addStyle = (id) => {
    removeStyleMultiple(articles.filter(x => x !== id));
    let el = document.getElementById(id);
    el.classList.add('activebckg');
  };

  removeStyleMultiple = (ids) => {
    ids.forEach((id) => {
      let el = document.getElementById(id);
      el.classList.remove('activebckg');
    });
  };

  loadCritic();
})();
