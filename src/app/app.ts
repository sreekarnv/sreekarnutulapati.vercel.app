import * as Turbo from '@hotwired/turbo';

export default class App {
  router: typeof Turbo;

  constructor() {
    this.router = Turbo;
    this.router.start();

    this.router.setProgressBarDelay(100);
  }
}

new App();
