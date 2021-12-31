import {typewrite, stopTypewrite} from '@/components/typewriter';
import {sleep} from '@/utils/common';

function greet() {
  const greetOuter = document.getElementsByClassName('greet-outer')[0];
  const greet1 = document.getElementsByClassName('greet-1')[0];
  const greet1Inner = document.getElementsByClassName('greet-1-inner')[0];
  const greet2 = document.getElementsByClassName('greet-2')[0];

  greet1.classList.add('greet-1--animate');
  greet1Inner.classList.add('greet-1-inner--animate');
  greet2.classList.add('greet-2--animate');
  greetOuter.classList.remove('d-none');

  greet1.addEventListener('animationstart', () => {
    stopTypewrite();
  });

  greet2.addEventListener('animationend', () => {
    sleep(1000);
    typewrite();
  });
}

export default greet;
