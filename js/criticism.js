(function () {
  loadCritic = (critic) => {
    let el = document.getElementById('critic');
    el.style.opacity = 0;
    setTimeout(() => {
      $('#critic').load(`./sr/criticism/${critic}.html`);
      el.style.opacity = 1;
    }, 500);
  };

  loadCritic('lepen');
})();
