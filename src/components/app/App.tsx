import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/error-page/error-page';
import './App.css';
import { Header } from './header/header';
import { routes } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({ path, name, element }) => (
          <Route key={name} path={path} element={element} />
        ))}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
