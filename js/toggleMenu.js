(function () {
  const conventActive = 'sandwich-content-active';
  const backActive = 'spread-header-active';
  const pushContent = 'pushContent';

  expandMenu = () => {
    var back = document.getElementById('spreadheder');
    var content = document.getElementById('sandwichcontent');
    var push = document.getElementById('pushDiv');

    if (!back.className.includes(backActive)) {
      back.classList.add(backActive);
      content.classList.add(conventActive);
      push.classList.add(pushContent);
    } else {
      back.classList.remove(backActive);
      content.classList.remove(conventActive);
      push.classList.remove(pushContent);
    }
  };
})();
