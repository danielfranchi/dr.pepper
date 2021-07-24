import { NavLink } from "react-router-dom"

import logo from '../../images/logo.png'
import "./Header.css"

const Header = () => {

  return (
    <header className="menu-bg">
      <div className="menu">
        <div className="menu-logo">
          <img src={logo} alt="" />
        </div>

        <nav className="menu-nav">
          <ul>
            <li>
              <NavLink to="/product" exact>
                Produtos
              </NavLink>
            </li>

            <li>
              <NavLink to="/user" exact>
                Usuarios
              </NavLink>
            </li>

            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header
