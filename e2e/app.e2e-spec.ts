import { WhereintheplanetPage } from './app.po';

describe('whereintheplanet App', () => {
  let page: WhereintheplanetPage;

  beforeEach(() => {
    page = new WhereintheplanetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
