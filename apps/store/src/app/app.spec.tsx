import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
  it('display the list of games', () => {
    const { getByTestId } = render(<App />);

    const gamesList = getByTestId('games-list');
    expect(gamesList).toBeTruthy();

  });
});
