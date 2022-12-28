import { render } from '@testing-library/react';
import { Game } from "@egghead-nx/shared-types";

import GameItem from './game-item';

describe('GameItem', () => {
  const mockGame: Game = {
    id: "1",
    name: "test",
    description: "test-description",
    image: "test-image",
    price: 1,
    rating: 1.5
  }
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<GameItem game={mockGame} />);
    expect(baseElement).toBeTruthy();
    expect(getByText(mockGame.name)).toBeTruthy()
  });
});
