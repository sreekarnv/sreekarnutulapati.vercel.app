import * as Turbo from '@hotwired/turbo';
import GSAP from 'gsap';

export default class App {
  turbo: typeof Turbo;

  constructor() {
    this.turbo = Turbo;
    this.turbo.start();

    this.addEventListeners();
  }

  animatePageIn() {
    const tl = GSAP.timeline();
    tl.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }

  animatePageOut(d: Turbo.TurboBeforeRenderEvent['detail']) {
    const tl = GSAP.timeline();
    tl.fromTo(
      'body',
      { opacity: 1 },
      { opacity: 0, duration: 0.5, onComplete: () => d.resume() }
    );
  }

  addEventListeners() {
    window.addEventListener('turbo:load', () => {
      window.addEventListener('turbo:before-render', (e) => {
        e.preventDefault();

        const { detail } = e as Turbo.TurboBeforeRenderEvent;
        this.animatePageOut(detail);
      });

      window.addEventListener('turbo:render', () => {
        this.animatePageIn();
      });
    });
  }
}

new App();
