export interface IRoute {
  path: string;
  name: string;
  element?: React.FC<unknown>;
}

export const routes: IRoute[] = [];
