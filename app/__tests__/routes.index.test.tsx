import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// App
import IndexRoute from '~/routes/routes/index';

describe('Routes index route', () => {
  it('renders no directions for empty route', async () => {
    render(<IndexRoute />, { wrapper: MemoryRouter });
    expect(screen.getByText(/select a route/i)).toBeInTheDocument();
  });
});
