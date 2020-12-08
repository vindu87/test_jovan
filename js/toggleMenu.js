(function () {
  const conventActive = 'sandwich-content-active';
  const backActive = 'spread-header-active';

  expandMenu = () => {
    var back = document.getElementById('spreadheder');
    var content = document.getElementById('sandwichcontent');

    if (!back.className.includes(backActive)) {
      back.classList.add(backActive);
      content.classList.add(conventActive);
    } else {
      back.classList.remove(backActive);
      content.classList.remove(conventActive);
    }
  };
})();
