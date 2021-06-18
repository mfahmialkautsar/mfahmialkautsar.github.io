let typeBuffer = 0;
let typeEl: HTMLElement | null;

class Typewriter {
  el: HTMLElement;
  texts: [string];
  period: number;
  loopNum;
  text;
  isDeleting;
  buffer: number;
  tick() {
    const i = this.loopNum % this.texts.length;
    const fullTxt = this.texts[i];

    if (this.isDeleting) {
      this.text = fullTxt.substring(0, this.text.length - 1);
    } else {
      this.text = fullTxt.substring(0, this.text.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.text + '</span>';

    let delta = 100 - Math.random() * 5;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.text === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    // if (this.loopNum === this.toRotate.length) return;
    const that = this;
    setTimeout(function() {
      if (typeBuffer == that.buffer) {
        that.tick();
      }
    }, delta);
  }

  constructor(
    el: HTMLElement,
    texts: [string],
    period: string | null,
    delay: number = 0,
  ) {
    this.texts = texts;
    this.el = el;
    typeEl = el;
    this.loopNum = 0;
    this.period = parseInt(period || '2000', 10);
    this.text = '';
    this.isDeleting = false;
    this.el.classList.add('typewrite-show');
    this.buffer = typeBuffer;
    setTimeout(() => {
      this.tick();
    }, delay);
  }
}

function stopTypewrite() {
  typeBuffer++;
  if (typeEl) {
    typeEl.classList.remove('typewrite-show');
    typeEl.innerHTML = '<span class="wrap"></span>';
  }
}

async function typewrite() {
  const typewriteEls = document.getElementsByClassName('typewrite');
  Array.prototype.forEach.call(typewriteEls, (typewriteEl: HTMLElement) => {
    const texts = typewriteEl.getAttribute('data-texts');
    const period = typewriteEl.getAttribute('data-period');
    if (texts) {
      new Typewriter(typewriteEl, JSON.parse(texts), period, 1000);
    }
  });
}

export {typewrite, stopTypewrite};
