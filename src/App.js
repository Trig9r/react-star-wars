import { Route, Routes } from 'react-router-dom';

import { Header } from '@components/Header';
import routesConfig from '@routes/routesCondig';

import './App.css';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};
