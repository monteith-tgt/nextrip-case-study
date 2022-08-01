import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import routes from '~/data/routes';

// App
import Index from '~/routes/index';
import { TEST_IDS } from '~/constants/test/testId';

vi.mock('@remix-run/react', async () => {
  let remix = await vi.importActual('@remix-run/react');
  return {
    ...remix,
    useLoaderData: vi.fn().mockReturnValue(routes),
  };
});

describe('Index route', () => {
  it('renders fake routes correctly', async () => {
    render(<Index />, { wrapper: MemoryRouter });
    await screen.findAllByRole('link');
    expect(screen.getByTestId(`${TEST_IDS.ROUTECARD}-${routes[0].route_id}`)).toHaveTextContent(routes[0].route_label);
  });
});
