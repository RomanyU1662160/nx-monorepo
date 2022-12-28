import styles from './homepage.module.scss';

import GamesList from '../../components/games/games-list/games-list';
import { useEffect, useState, useCallback } from 'react';
/* eslint-disable-next-line */
export interface HomepageProps { }






export function Homepage(props: HomepageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([])


  const fetchGames = useCallback(
    async () => {
      const response = await fetch('/api/games');
      const data = await response.json();
      setGames(data);
      return games;
    },
    [games],
  )



  useEffect(() => {
    setIsLoading(true)
    fetchGames();
    setIsLoading(false)
  }, [fetchGames])
  return (
    <div className={styles['container']}>
      <GamesList games={games} />
    </div>
  );
}

export default Homepage;
