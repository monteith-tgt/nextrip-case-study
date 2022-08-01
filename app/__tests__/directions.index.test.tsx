import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import IndexRoute from '~/routes/routes/$routeId/index';

describe('Directions index route', () => {
  it('renders no places for empty route', async () => {
    render(<IndexRoute />, { wrapper: MemoryRouter });
    expect(screen.getByText(/select a direction/i)).toBeInTheDocument();
  });
});
