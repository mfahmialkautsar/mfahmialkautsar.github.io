import {sleep} from './util';

class TxtType {
  toRotate;
  el;
  loopNum;
  period;
  txt;
  tick() {}
  isDeleting;

  constructor(el: Element, toRotate: [string], period: string | null) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period || '2000', 10);
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }
}

async function typewrite() {
  TxtType.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let delta = 100 - Math.random() * 5;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    // if (this.loopNum === this.toRotate.length) return;
    const that = this;
    setTimeout(function () {
      that.tick();
    }, delta);
  };

  await sleep(2250);
  const typewriteEls = document.getElementsByClassName('typewrite');
  Array.prototype.forEach.call(typewriteEls, async (typewriteEl: Element) => {
    var toRotate = typewriteEl.getAttribute('data-type');
    var period = typewriteEl.getAttribute('data-period');
    typewriteEl.classList.add('typewrite-show');
    if (toRotate) {
      await sleep(1000);
      new TxtType(typewriteEl, JSON.parse(toRotate), period);
    }
  });
}

export default typewrite;
