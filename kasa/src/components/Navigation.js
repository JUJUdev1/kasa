import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src="./media/logo/LOGO.svg" alt="Logo de l'entreprise" />
      </div>
      <div className="header_nav">
        <ul>
          <li>
            <NavLink to="/">Acceuil</NavLink>
          </li>
          <li>
            <NavLink to="/A-Propos">A Propos</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
