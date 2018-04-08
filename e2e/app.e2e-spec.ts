import { TodolistElectronPage } from './app.po';

describe('todolist-electron App', () => {
  let page: TodolistElectronPage;

  beforeEach(() => {
    page = new TodolistElectronPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todos');
  });
});
