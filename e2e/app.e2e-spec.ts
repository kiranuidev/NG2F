import { AngularFoundationPage } from './app.po';

describe('angular-foundation App', () => {
  let page: AngularFoundationPage;

  beforeEach(() => {
    page = new AngularFoundationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
