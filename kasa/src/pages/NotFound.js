import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";

const NotFound = () => {
  return (
    <div className="notFound">
      <Header />
      <div className="notFound_content">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default NotFound;
