import Isotope, { IsotopeOptions } from 'isotope-layout';

const DEFAULT_OPTIONS: IsotopeOptions = {
  layoutMode: 'fitRows',
  percentPosition: true,
  resize: true,
};

export default class IsotopeLayout {
  container: HTMLElement;
  private iso: Isotope;

  constructor(container: string, item: string, options?: IsotopeOptions) {
    this.container = document.querySelector(container) as HTMLElement;

    let isotopeOptions: IsotopeOptions = {
      ...DEFAULT_OPTIONS,
      itemSelector: item,
    };

    if (options) {
      isotopeOptions = {
        ...isotopeOptions,
        ...options,
      };
    }

    this.iso = new Isotope(this.container, isotopeOptions);
  }

  onFilter(filter: string) {
    this.iso.arrange({
      filter,
    });
  }

  onResetFilter() {
    this.iso.arrange({
      filter: '*',
    });
  }
}
