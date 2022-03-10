import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Galerie from "./routes/galerie";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="galerie" element={<Galerie />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);