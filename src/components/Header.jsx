import { Link } from "react-router-dom";  

export const Header = () => {
  return (
    <header>
      <h1>XavierFigueroa</h1>
      <nav>
        <Link className="nav-link text-light" to="/">About Me</Link>
        <Link className="nav-link  text-light" to="/pages/Skills">Skills</Link>
        <Link className="nav-link text-light" to="/pages/Projects">Projects</Link>
      </nav>
      <Link className="nav-link text-light" to="/pages/Contact"><button>Contact</button></Link>
    </header>
  );
};   