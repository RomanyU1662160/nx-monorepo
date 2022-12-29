import { Game } from '@egghead-nx/shared-types';
import { render, waitFor } from '@testing-library/react';

import GameDetails from './game-details';

const mockFetch = (data: Game) => {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data
    })
  })
}


describe('GameDetails', () => {
  beforeEach(() => {
    window.fetch = mockFetch({} as Game);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })
  it('should render successfully', async () => {
    const { baseElement, findByTestId } = render(<GameDetails />);
    const gameDetails = await waitFor(() => findByTestId('game-details'))
    expect(gameDetails).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });
});
