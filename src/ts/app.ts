import '@/scss/style.scss';
import theme from '@/ts/theme';
import animate from '@/ts/animate';
import project from '@/ts/project';

document.addEventListener('DOMContentLoaded', function(this: any) {
  const root = document.getElementById('root');
  if (!root) return;
  root.outerHTML = `
  <div class="theme-switcher">
      <i class="fa fa-2x" title="Theme Switcher" aria-label="Theme Switcher"></i>
  </div>
  <main>
      <section class="greeting-container">
          <h1 class="greet-outer d-none">
              <div class="greet-1"><div style="visibility: hidden;">AAL</div><div class="greet-1-inner">Hi!</div></div>
              <div class="greet-2">I'm <span class="text-highlighted">Fahmi</span>.</div>
              <span class="typewrite" data-texts='["Junior Software Developer."]'><span class="wrap"></span></span>
          </h1>
      </section>
  </main>
  <section class="projects" id="projects-projects">
      <h2>My Open-source Apps</h2>
      <div class="projects-item" id="projects"></div>
  </section>
  <section class="projects" id="projects-designs">
      <h2>My Designs</h2>
      <div class="projects-item" id="designs"></div>
  </section>
  <footer>
      <div class="footer-wrapper">
          <h4>Muhamad Fahmi Al Kautsar</h4>
          <ul>
              <li><a class="text-decoration-none profile" href="https://www.linkedin.com/in/mfahmialkautsar"
                      target="_blank"><i class="fa fa-linkedin-square"></i> LinkedIn</a></li>
              <li><a class="text-decoration-none profile" href="https://github.com/mfahmialkautsar" target="_blank"><i
                          class="fa fa-github"></i> GitHub</a></li>
              <li><a class="text-decoration-none profile" href="https://dribbble.com/aalfahmial" target="_blank"><i
                          class="fa fa-dribbble"></i> Dribbble</a></li>
              <li><a class="text-decoration-none profile" href="mailto:aalfahmial@gmail.com"><i class="fa fa-envelope"></i>
                      Email</a>
              </li>
          </ul>
      </div>
  </footer>`;

  theme();
  project();
  animate();
  document.removeEventListener('DOMContentLoaded', this);
});
