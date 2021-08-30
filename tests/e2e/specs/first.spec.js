/* eslint-disable no-undef */
describe('First', () => {
  it('one', () => {
    cy.visit('http://localhost:8081/');
    cy.get('button').click();
  });
});
