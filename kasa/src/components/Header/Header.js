import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

const Header = () => {
  return (
      <div className="header">
        <Logo />
        <Navigation />
      </div>
  );
};

export default Header;
