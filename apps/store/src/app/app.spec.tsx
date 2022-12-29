import { render, waitFor } from '@testing-library/react';

import App from './app';

const mockFetch = () => {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => []
    })
  })

}

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch();
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should render successfully', async () => {
    const { baseElement, findByTestId } = render(<App />);
    const element = await waitFor(() => findByTestId('games-page'))
    expect(baseElement).toBeTruthy();
    expect(element).toBeTruthy();
  });
  it('display the list of games', async () => {
    const { findByTestId } = render(<App />);

    const gamesList = await waitFor(() => {
      return findByTestId('games-list')
    })

    expect(gamesList).toBeTruthy();

  });
});
