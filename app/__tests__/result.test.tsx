import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import results from '~/data/results';

// App
import ResultPlaceCode from '~/routes/routes/$routeId/$directionId/$placeCode';
import { TEST_IDS } from '~/constants/test/testId';

vi.mock('@remix-run/react', async () => {
  let remix = await vi.importActual('@remix-run/react');
  return {
    ...remix,
    useFetcher: vi.fn().mockReturnValue({ data: results, status: 'idle' }),
    useLoaderData: vi.fn().mockReturnValue(results),
  };
});

describe('Results route', () => {
  it('renders fake results correctly', async () => {
    render(<ResultPlaceCode />, { wrapper: MemoryRouter });
    expect(screen.getByTestId(`${TEST_IDS.RESULTCARD}`)).toHaveTextContent(results.stops?.at(0)?.description);
    expect(screen.getAllByRole('alert').length).equal(results.alerts?.length);
  });
});
