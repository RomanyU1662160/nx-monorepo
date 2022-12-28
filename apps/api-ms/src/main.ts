/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import { games } from "./mock-data/games"
import * as cors from "cors";



const app = express();
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send('Welcome to api-ms!');
});
app.get('/api/games', (req, res) => {
  res.send(games);
});


app.get('/api/games/:id', (req, res) => {
  const game = games.find((game) => game.id === req.params.id);
  res.send(game);
});


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/games`);
});
server.on('error', console.error);
