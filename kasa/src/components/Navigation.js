import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../media/logo/LOGO.svg';

const Navigation = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <Logo fill='red' />
      </div>
      <div className="header_nav">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-Propos">A Propos</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
