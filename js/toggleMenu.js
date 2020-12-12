(function () {
  const conventActive = 'sandwich-content-active';
  const backActive = 'spread-header-active';
  const pushContent = 'pushContent';

  expandMenu = () => {
    var back = document.getElementById('spreadheder');
    var content = document.getElementById('sandwichcontent');
    var push = document.getElementById('pushDiv');
    const childrenCount = content.childElementCount;

    if (childrenCount) {
      if (!back.className.includes(backActive)) {
        back.classList.add(backActive);
        back.style.height = `${childrenCount * 53}px`;
        content.classList.add(conventActive);
        content.style.height = `${childrenCount * 50}px`;
        push.classList.add(pushContent);
        push.style.height = `${childrenCount * 55}px`;
      } else {
        back.classList.remove(backActive);
        back.style.height = `0px`;
        content.classList.remove(conventActive);
        content.style.height = `0px`;
        push.classList.remove(pushContent);
        push.style.height = `0px`;
      }
    }
  };
})();
