let typeBuffer = 0;
/** @type {HTMLElement | null} */
let typeEl;

class Typewriter {
  /**
   *
   * @param {HTMLElement} el
   * @param {string[]} texts
   * @param {string | null} period
   * @param {number} delay
   */
  constructor(el, texts, period, delay = 0) {
    /** @type {string[]} */
    this.texts = texts;
    /** @type {HTMLElement} */
    this.el = el;
    typeEl = el;
    /** @type {number} */
    this.loopNum = 0;
    /** @type {number} */
    this.period = parseInt(period || '2000', 10);
    /** @type {string} */
    this.text = '';
    /** @type {boolean} */
    this.isDeleting = false;
    this.el.classList.add('typewrite-show');
    /** @type {number} */
    this.buffer = typeBuffer;
    setTimeout(() => {
      this.tick();
    }, delay);
  }

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
    setTimeout(function () {
      if (typeBuffer == that.buffer) {
        that.tick();
      }
    }, delta);
  }
}

function stopTypewrite() {
  typeBuffer++;
  if (typeEl) {
    typeEl.classList.remove('typewrite-show');
    typeEl.innerHTML = '<span class="wrap"></span>';
  }
}

function typewrite() {
  const typewriteEls = document.getElementsByClassName('typewrite');
  Array.prototype.forEach.call(
    typewriteEls,
    /** @param {HTMLElement} typewriteEl */
    (typewriteEl) => {
      const texts = typewriteEl.getAttribute('data-texts');
      const period = typewriteEl.getAttribute('data-period');
      if (texts) {
        new Typewriter(typewriteEl, JSON.parse(texts), period, 1000);
      }
    }
  );
}

export { typewrite, stopTypewrite };
