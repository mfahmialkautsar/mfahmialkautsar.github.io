import nightTheme from '!!raw-loader!@/css/night.module.css';

interface HeadLink extends HTMLElement {
  href: string;
}

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
  themeButton.addEventListener('click', function(this: HTMLElement) {
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

  function setTheme(mode: string | undefined) {
    if (!mode) return;

    const themeStyle = document.getElementById('theme-style') as HeadLink;
    if (!themeStyle) {
      const themeStyle = document.createElement('style');
      themeStyle.id = 'theme-style';
      document.getElementsByTagName('head')[0].appendChild(themeStyle);
      setTheme(mode);
      return;
    }

    function insertStyle(value: string) {
      if (mode == 'day') {
        themeStyle.innerHTML = '';
      } else if (mode == 'night') {
        themeStyle.innerHTML = value;
      }
    }

    insertStyle(nightTheme);
    localStorage.setItem('theme', mode);
  }
}

export default theme;
