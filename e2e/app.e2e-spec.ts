import { PlayAppPage } from './app.po';

describe('play-app App', () => {
  let page: PlayAppPage;

  beforeEach(() => {
    page = new PlayAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
