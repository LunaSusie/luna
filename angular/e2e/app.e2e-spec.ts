import { lunaTemplatePage } from './app.po';

describe('luna App', function() {
  let page: lunaTemplatePage;

  beforeEach(() => {
    page = new lunaTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
