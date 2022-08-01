import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import places from '~/data/places';

// App
import PlacesDirectionId from '~/routes/routes/$routeId/$directionId';
import { TEST_IDS } from '~/constants/test/testId';

vi.mock('@remix-run/react', async () => {
  let remix = await vi.importActual('@remix-run/react');
  return {
    ...remix,
    useLoaderData: vi.fn().mockReturnValue(places),
  };
});

describe('Places route', () => {
  it('renders fake places/stops correctly', async () => {
    render(<PlacesDirectionId />, { wrapper: MemoryRouter });
    await screen.findAllByRole('link');
    expect(screen.getByTestId(`${TEST_IDS.PLACECARD}-${places[0].place_code}`)).toHaveTextContent(
      places[0].description,
    );
  });
});
