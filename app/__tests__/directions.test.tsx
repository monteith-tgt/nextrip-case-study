import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import directions from '~/data/directions';

// App
import DirectionsRouteId from '~/routes/routes/$routeId';
import { TEST_IDS } from '~/constants/test/testId';

vi.mock('@remix-run/react', async () => {
  let remix = await vi.importActual('@remix-run/react');
  return {
    ...remix,
    useLoaderData: vi.fn().mockReturnValue(directions),
  };
});

describe('Directions route', () => {
  it('renders fake directions correctly', async () => {
    render(<DirectionsRouteId />, { wrapper: MemoryRouter });
    await screen.findAllByRole('link');
    expect(screen.getByTestId(`${TEST_IDS.DIRECTIONCARD}-${directions[0].direction_id}`)).toHaveTextContent(
      directions[0].direction_name,
    );
  });
});
