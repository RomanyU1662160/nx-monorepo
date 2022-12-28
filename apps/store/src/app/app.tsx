// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Homepage from '../pages/homepage/homepage';
import { Header } from '@egghead-nx/shared-ui';

import { BrowserRouter, useRoutes } from 'react-router-dom';
import GameDetails from '../components/games/game-details/game-details';


//import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';
const pages = ['Products', 'Pricing', 'Contact us', 'About us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Router = () => {
  const routes = useRoutes([

    { path: '/', element: <Homepage /> }, // default route
    { path: '/game/:gameId', element: <GameDetails /> },

  ])
  return routes
}



export function App() {
  return (
    <>
      <Header pages={pages} settings={settings} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <div />

    </>
  );
}

export default App;
