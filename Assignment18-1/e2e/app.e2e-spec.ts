import { Assignment181Page } from './app.po';

describe('assignment18-1 App', function() {
  let page: Assignment181Page;

  beforeEach(() => {
    page = new Assignment181Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
