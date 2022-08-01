import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import IndexRoute from '~/routes/routes/$routeId/$directionId/index';

describe('Places index route', () => {
  it('renders no places for empty route', async () => {
    render(<IndexRoute />, { wrapper: MemoryRouter });
    expect(screen.getByText(/select a stop/i)).toBeInTheDocument();
  });
});
