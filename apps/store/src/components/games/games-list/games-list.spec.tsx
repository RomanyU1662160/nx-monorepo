import { render } from '@testing-library/react';
import { Game } from "@egghead-nx/shared-types";

import GamesList from './games-list';

describe('GamesList', () => {
  const mockGames: Game[] = [
    {
      id: "1",
      name: "test",
      description: "test-description",
      image: "test-image",
      price: 1,
      rating: 1
    },
    {
      id: "2",
      name: "test1",
      description: "test2",
      image: "test2",
      price: 2,
      rating: 2
    }

  ]
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<GamesList games={mockGames} />);
    expect(baseElement).toBeTruthy();
    expect(getByText(mockGames[0].name)).toBeTruthy();
    expect(getByText(mockGames[1].name)).toBeTruthy();
  });
});
