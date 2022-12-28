import styles from './games-list.module.scss';
import { Game } from "@egghead-nx/shared-types"
import GameItem from '../game-item/game-item';
import { Grid } from '@mui/material';

/* eslint-disable-next-line */
export interface GamesListProps {
  games: Game[]
}

export function GamesList({ games }: GamesListProps) {
  return (
    <div className={styles['container']} data-testid="games-list">
      <Grid container spacing={2}>

        {games.map((game) => {
          return <GameItem key={game.id} game={game} />
        })}
      </Grid>
    </div>
  );
}

export default GamesList;
