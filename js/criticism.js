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
    'simljanska'
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

  loadCritic();
})();
