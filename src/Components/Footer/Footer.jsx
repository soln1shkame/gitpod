import "./Footer.scss";
import React from "react";

import Foot__log from "./Frame(6).svg";
import Foot__tweet from "./Frame(7).svg";
import Foot__git from "./Frame(8).svg";
import Foot__sms from "./Frame(9).svg";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="containers">
          <ul className="footer__list">
            <li className="footer__item">
              <h6 className="footer__title">Gitpod</h6>
              <a className="footer__link" href="#link">
                Home
              </a>
              <a className="footer__link" href="#link">
                Features
              </a>
              <a className="footer__link" href="#link">
                Pricing
              </a>
              <a className="footer__link" href="#link">
                Changelog
              </a>
              <a className="footer__link" href="#link">
                Self-Hosted
              </a>
              <a className="footer__link" href="#link">
                Gitpod vs GitHub
              </a>
              <a className="footer__link" href="#link">
                Codespaces
              </a>
              <a className="footer__link" href="#link">
                Codespaces
              </a>
            </li>

            <li className="footer__item">
              <h6 className="footer__title">Developer</h6>
              <a className="footer__link" href="#link">
                Getting started
              </a>
              <a className="footer__link" href="#link">
                Screencasts
              </a>
              <a className="footer__link" href="#link">
                Blog
              </a>
              <a className="footer__link" href="#link">
                Documentation
              </a>
              <a className="footer__link" href="#link">
                Report a bug
              </a>
              <a className="footer__link" href="#link">
                Community
              </a>
            </li>

            <li className="footer__item">
              <h6 className="footer__title">Company</h6>
              <a className="footer__link" href="#link">
                About
              </a>
              <a className="footer__link" href="#link">
                Careers
              </a>
              <a className="footer__link" href="#link">
                Contact
              </a>
              <a className="footer__link" href="#link">
                Media Kit
              </a>
            </li>

            <li className="footer__item">
              <h6 className="footer__title">Legal</h6>
              <a className="footer__link" href="#link">
                Imprint
              </a>
              <a className="footer__link" href="#link">
                Terms of Service
              </a>
              <a className="footer__link" href="#link">
                Privacy Policy
              </a>
            </li>
          </ul>
          <hr className="footer__hr" />
          <div className="footer__flex">
            <a href="#link" className="footer__info">
              <img src={Foot__log} alt="img" />
              Copyright © <span className="footer__span">2021</span> Gitpod
            </a>

            <div className="foot__images">
              <a href="#link">
                <img src={Foot__tweet} alt="img" />
              </a>

              <a href="#link">
                <img src={Foot__git} alt="img" />
              </a>

              <a href="#link">
                <img src={Foot__sms} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="foot__flex">
        <a className="foot__link" href="#link">
          This website uses cookies to enhance the user experience. Read our
          privacy policy for more info.
        </a>

        <button className="foot___btn">Accept Cookies</button>
      </div>
    </>
  );
}
