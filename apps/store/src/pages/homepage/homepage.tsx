import styles from './homepage.module.scss';
import { games } from '../../mock-data/games';
import GamesList from '../../components/games/games-list/games-list';

/* eslint-disable-next-line */
export interface HomepageProps { }



export function Homepage(props: HomepageProps) {
  return (
    <div className={styles['container']}>
      <GamesList games={games} />
    </div>
  );
}

export default Homepage;
