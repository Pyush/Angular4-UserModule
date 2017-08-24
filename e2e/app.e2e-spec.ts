import { Angular4UserModulePage } from './app.po';

describe('angular4-user-module App', () => {
  let page: Angular4UserModulePage;

  beforeEach(() => {
    page = new Angular4UserModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
