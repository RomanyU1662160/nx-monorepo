import { games } from '../../../mock-data/games';
import { useParams } from 'react-router-dom';
import styles from './game-details.module.scss';
import { Grid } from '@mui/material';


/* eslint-disable-next-line */
export interface GameDetailsProps { }

export function GameDetails(props: GameDetailsProps) {
  const { gameId } = useParams();
  const game = games.find(({ id }) => gameId === id)
  if (!game) {
    return <div>Game not found</div>
  }
  return (
    <Grid container spacing={3} className={styles.gameDetails}>
      <Grid item xs={12} sm={12} md={6} lg={6} >
        <img src={game.image} alt={game.name} />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6} >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h1> {game.name} details!</h1>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p>{game.description}</p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p>{game.price}</p>
        </Grid>
      </Grid>



    </Grid>
  )
}

export default GameDetails;
