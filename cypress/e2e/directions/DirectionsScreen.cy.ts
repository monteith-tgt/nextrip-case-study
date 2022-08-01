import directions from '../../../app/data/directions';
import { TEST_IDS } from '../../../app/constants/test/testId';

describe('RoutesScreen', () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  it('should render with the correct label', () => {
    cy.visit('/routes');
    cy.getByTestID(`${TEST_IDS.DIRECTIONCARD}-${directions[0].direction_id}`)
      .should('be.visible')
      .and('have.text', directions[0].direction_name);
  });

  it('is accessible', () => {
    cy.checkA11y();
  });
});
