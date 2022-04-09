import { ApiPage } from '../pages/api-page/api-page';
import { FormPage } from '../pages/form-page/form-page';
import { MainPage } from '../pages/main-page/main-page';

export interface IRoute {
  path: string;
  name: string;
  element?: JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'API',
    element: <ApiPage />,
  },
  {
    path: '/main',
    name: 'Main page',
    element: <MainPage />,
  },
  {
    path: '/form',
    name: 'Form page',
    element: <FormPage />,
  },
];
