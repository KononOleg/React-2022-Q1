import { MainPage } from "../pages/main-page/main-page";

export interface IRoute {
  path: string;
  name: string;
  element?: JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Main page",
    element: <MainPage />,
  },
];
