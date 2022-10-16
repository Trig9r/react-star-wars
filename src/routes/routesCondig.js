import { Home } from '@pages/Home';
import { People } from '@pages/People';
import { NotFound } from '@pages/NotFound';
import { PersonPage } from '@pages/PersonPage';
import { Favorites } from '@pages/Favorites';
import { Search } from '@pages/Search';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/people',
    element: <People />,
  },
  {
    path: '/people/:id',
    element: <PersonPage />,
  },
  {
    path: '/not-found',
    element: <NotFound />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routesConfig;
