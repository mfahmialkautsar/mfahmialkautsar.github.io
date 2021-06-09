import greet from '@/ts/greet';
import typewrite from '@/ts/typewrite';

function animate() {
  window.onload = () => {
    greet();
    typewrite();
  };
}

export default animate;
