function customHome() {
    var navHomeButton = document.querySelector('.js-nav-home-btn');
    if (navHomeButton) {
      navHomeButton.removeAttribute('data-event');
      navHomeButton.addEventListener('click', function (event) {
        event.preventDefault();
        history.replaceState(null, '', '/');
        window.location.href = '../../index.html';
      });
    }
  }