import './App.css'
import { Outlet, Link } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <nav>
        <Link className="nav-link" to="/">Artiste Paradise</Link>
        <Link className="nav-link" to="/galerie">Galerie</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App
