import { Assignment16MWAPage } from './app.po';

describe('assignment16-mwa App', function() {
  let page: Assignment16MWAPage;

  beforeEach(() => {
    page = new Assignment16MWAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
