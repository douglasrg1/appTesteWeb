import { AppTesteWebPage } from './app.po';

describe('app-teste-web App', function() {
  let page: AppTesteWebPage;

  beforeEach(() => {
    page = new AppTesteWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
