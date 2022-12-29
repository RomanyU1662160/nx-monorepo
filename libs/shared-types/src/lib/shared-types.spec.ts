import { Game } from './shared-types';

describe('sharedTypes', () => {
  it('should work', () => {
    const game: Game = {
      id: '1',
      name: 'test',
      image: 'test',
      description: 'test',
      price: 10,
      rating: 5,
    };
    expect(game).toEqual(game)
  });
});
