describe('shared-ui: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary'));

  it('should render the component', () => {
    cy.get('span').should('contain', 'Games Store');
    cy.get('#Home').should('contain', 'Home');
    cy.get('#About').should('contain', 'About');
    cy.get('#Contact').should('contain', 'Contact');

  });
});
