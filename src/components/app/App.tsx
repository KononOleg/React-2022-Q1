import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./header/header";
import { routes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({ path, name, element }) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
