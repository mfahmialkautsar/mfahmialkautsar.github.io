import '@/scss/style.scss';
import theme from '@/utils/theme';
import animate from '@/utils/animations/animate';
import project from '@/components/project';
import main from '@/components/main';

document.addEventListener('DOMContentLoaded', function(this: EventListenerOrEventListenerObject) {
  const root = document.getElementById('root');
  if (!root) return;
  root.outerHTML = main();

  theme();
  project();
  animate();
  document.removeEventListener('DOMContentLoaded', this);
});
