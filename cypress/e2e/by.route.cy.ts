describe('Find departures by route', () => {
  it('should be able to find a departure by route', () => {
    cy.visit('/');
    const $el = cy.get('a[href="/routes/21"]');
    $el.click();
  });
});
