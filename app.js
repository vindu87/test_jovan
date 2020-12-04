$(document).ready(() => {
  $('a[href^="#"]').on('click', function (e) {
    if (this.hash === '') {
    }
    e.preventDefault();

    var target = this.hash === '' ? '#start' : this.hash,
      $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        'swing',
        function () {
          window.location.hash = target;
        }
      );
  });

  // $('.button').click(function () {});

  changeLanguage = (val) => {
    $('#language')[0].innerText = val;
  };

  toggleDisplay = (id) => {
    var x = document.getElementById(id);
    if (x.style.visibility === 'hidden') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  };
});
