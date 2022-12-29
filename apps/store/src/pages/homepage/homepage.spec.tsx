import { Game } from '@egghead-nx/shared-types';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './homepage';

function mockFetch(data: Game[]) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}


describe('Homepage', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should render successfully', async () => {


    const { baseElement, findByTestId } = render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    )
    // use waitFor to solve the issue of update the state is not wrapped in act
    const gamesList2 = await waitFor(() => findByTestId('games-page'));
    expect(baseElement).toBeTruthy();
    expect(gamesList2).toBeTruthy();
  });
});
