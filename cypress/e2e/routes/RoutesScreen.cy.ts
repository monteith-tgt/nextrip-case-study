import { TEST_IDS } from '~/constants/test/routeCard';
import routes from '~/data/routes';

describe('RoutesScreen', () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  it('should render with the correct label', () => {
    cy.visit('/routes');
    cy.getByTestID(`${TEST_IDS.ROUTECARD}-${routes[0].route_id}`)
      .should('be.visible')
      .and('have.text', routes[0].route_label);
  });

  it('should follow a link to the route page', () => {
    cy.findByRole('link', { name: routes[0].route_label })
      .click()
      .url()
      .should('include', `/routes/${routes[0].route_id}`);
  });

  it('is accessible', () => {
    cy.checkA11y();
  });
});
