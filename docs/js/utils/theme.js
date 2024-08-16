import nightCss from '../lib/constants/night-css.js';

function theme() {
  let theme = localStorage.getItem('theme');

  const themeIcon = document.querySelector('.theme-switcher i');
  if (!themeIcon) return;

  if (theme != 'night') {
    theme = 'day';
    themeIcon.classList.add('fa-sun-o');
  } else {
    theme = 'night';
    themeIcon.classList.add('fa-moon-o');
  }
  setTheme(theme);

  const themeButton = document.querySelector('.theme-switcher');
  if (!themeButton) return;

  themeButton.setAttribute('data-mode', theme);

  let rotate = true;
  themeButton.addEventListener('click', function () {
    if (!themeButton || !themeIcon) return;

    const mode = themeButton.getAttribute('data-mode');
    if (mode == 'day') {
      themeButton.setAttribute('data-mode', 'night');
      themeIcon.classList.remove('fa-sun-o');
      themeIcon.classList.add('fa-moon-o');
    } else if (mode == 'night') {
      themeButton.setAttribute('data-mode', 'day');
      themeIcon.classList.remove('fa-moon-o');
      themeIcon.classList.add('fa-sun-o');
    }

    if (rotate) {
      themeIcon.classList.add('rotate');
    } else {
      themeIcon.classList.remove('rotate');
    }

    rotate = !rotate;
    setTheme(this.dataset.mode);
  });

  /**
   * Set theme
   * @param {string | undefined} mode
   */
  function setTheme(mode) {
    if (!mode) return;

    const themeStyle = document.getElementById('theme-style');
    if (!themeStyle) {
      const themeStyle = document.createElement('style');
      themeStyle.id = 'theme-style';
      document.getElementsByTagName('head')[0].appendChild(themeStyle);
      setTheme(mode);
      return;
    }

    /**
     * Insert style
     * @param {string} value
     */
    function insertStyle(value) {
      if (mode == 'day') {
        themeStyle.innerHTML = '';
      } else if (mode == 'night') {
        themeStyle.innerHTML = value;
      }
    }

    insertStyle(nightCss);
    localStorage.setItem('theme', mode);
  }
}

export default theme;
