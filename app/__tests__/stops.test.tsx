import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import stops from '~/data/stops';

// App
import StopsIndex from '~/routes/stops/$stopId';
import { TEST_IDS } from '~/constants/test/testId';

vi.mock('@remix-run/react', async () => {
  let remix = await vi.importActual('@remix-run/react');
  return {
    ...remix,
    useFetcher: vi.fn().mockReturnValue({ data: stops, status: 'idle' }),
    useLoaderData: vi.fn().mockReturnValue(stops),
  };
});

describe('Stops route', () => {
  it('renders fake results by stop ID correctly', async () => {
    render(<StopsIndex />, { wrapper: MemoryRouter });
    expect(screen.getByTestId(`${TEST_IDS.RESULTCARD}`)).toHaveTextContent(stops.stops?.at(0)?.description);
  });
});
