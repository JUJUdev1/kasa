import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header_nav">
      <ul>
        <li>
          <NavLink
            end
            to="/"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid red" : "none",
            })}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid red" : "none",
            })}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
