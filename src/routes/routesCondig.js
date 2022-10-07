import { Home } from '@pages/Home';
import { People } from '@pages/People';
import { NotFound } from '@pages/NotFound';
import { PersonPage } from '@pages/PersonPage';

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
    path: '*',
    element: <NotFound />,
  },
];

export default routesConfig;
