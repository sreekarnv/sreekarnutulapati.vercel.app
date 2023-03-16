import IsotopeLayout from '@/app/components/isotope-layout';

export default class Work {
  projectsLayout: IsotopeLayout;
  tabs: HTMLElement[];
  activeTab: HTMLElement = document.querySelector(
    '.work__tab--active'
  ) as HTMLElement;

  constructor() {
    this.projectsLayout = new IsotopeLayout(
      '.work__projects__list',
      '.project-card',
      { fitRows: { gutter: 20 } }
    );

    this.tabs = document.querySelectorAll(
      '.work__tab'
    ) as unknown as HTMLElement[];

    this.addEventListeners();
  }

  addEventListeners() {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.activeTab?.classList.remove('work__tab--active');
        const filterValue = tab.getAttribute('data-tab') as string;
        this.activeTab = tab;
        this.activeTab.classList.add('work__tab--active');

        if (filterValue === 'all') {
          this.projectsLayout.onResetFilter();

          return;
        }

        this.projectsLayout.onFilter(`.project-card--${filterValue}`);
      });
    });
  }
}

new Work();
