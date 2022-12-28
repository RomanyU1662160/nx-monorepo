import { render } from '@testing-library/react';

import Homepage from './homepage';

describe('Homepage', () => {
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(<Homepage />);
    expect(baseElement).toBeTruthy();
    const gamesList = getByTestId('games-list');
    expect(gamesList).toBeTruthy();
  });
});
