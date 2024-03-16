import React from "react";
import "./Header.scss";
import Logo from "./Frame.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#link">
          <img src={Logo} alt="logo" width={131} height={40} />
        </a>

        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="#link">
              Features
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              Pricing
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              Blog
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              Docs
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              Changelog
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              We're hiring
            </a>
          </li>
        </ul>

        <button className="header__button" type="submit">
          Login
        </button>
      </div>
    </header>
  );
}
export default Header;
