describe(`Toast integration tests`, function() {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.visit(`/`);
  });

  it(`should open the toast`, () => {
    cy.get(`[data-test-toast-init]`).click();
    cy.get(`[data-test-toast]`).should(`be.visible`);
  });

  it(`should be on the first step after opening the toast`, () => {
    cy.get(`[data-test-toast-init]`).click();
    cy.get(`[data-test-toast-indicator]`)
      .eq(0)
      .invoke(`attr`, `data-test-toast-indicator`)
      .should(`contain`, true);
  });

  it(`should navigate to last step`, () => {
    cy.get(`[data-test-toast-init]`).click();
    cy.get(`[data-test-toast-next]`).click();
    cy.get(`[data-test-toast-next]`).click();
    cy.get(`[data-test-toast-next]`).click();
    cy.get(`[data-test-toast-indicator]`)
      .eq(3)
      .invoke(`attr`, `data-test-toast-indicator`)
      .should(`contain`, true);
  });

  it(`should disappear after timeout on the last step`, () => {
    cy.get(`[data-test-toast-init]`).click();
    cy.get(`[data-test-toast-next]`).click();
    cy.get(`[data-test-toast-next]`).click();
    cy.get(`[data-test-toast-next]`).click();
    cy.wait(6000);
    cy.get(`[data-test-toast-holder]`).should('have.css', 'opacity', '0');
  });
});
