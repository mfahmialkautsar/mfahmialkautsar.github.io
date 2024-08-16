import theme from './utils/theme.js';
import animate from './utils/animations/animate.js';
import project from './components/project.js';
import main from './components/main.js';

document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  if (!root) return;
  root.outerHTML = main();

  theme();
  project();
  animate();
  document.removeEventListener('DOMContentLoaded', this);
});
