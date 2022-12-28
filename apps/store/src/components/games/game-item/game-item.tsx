
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import { formatRating } from '@egghead-nx/shared-utils'

import type { Game } from "@egghead-nx/shared-types"
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
export interface GameItemProps {
  game: Game
}


export function GameItem({ game }: GameItemProps) {
  return (

    <Grid item >
      <Card
        key={game.id}
        className="game-card"

      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            className="game-card-media"
            image={game.image}
            alt={game.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {game.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {game.description}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="game-rating"
            >
              <strong>Rating:</strong> {formatRating(game.rating)}
              <strong>Price:</strong> {game.price}
            </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/game/${game.id}`}>  <Button size="small">Learn More</Button></Link>
        </CardActions>
      </Card>
    </Grid>

  );
}

export default GameItem;
