import "./Use.scss";
import React from "react";
import Ben from "./Rectangle(1).png";
import Mich from "./Rectangle(2).png";
import Juli from "./Rectangle(3).png";

/////////////////////////////////////////

import Git from "./Frame(3).svg";
import Free from "./Frame(4).svg";
import Dw from "./Frame(5).svg";
import Goog from "./Frame(6).svg";
import Amaz from "./Frame(7).svg";
import Face from "./Frame(8).svg";
import Uber from "./Frame(9).svg";
import Ai from "./OpenAI.svg";
import Intel from "./Frame(10).svg";
import Thei from "./Frame(11).svg";
import Code from "./Frame(12).svg";
import Week from "./Frame(13).svg";

export default function Use() {
  return (
    <section className="use">
      <div className="container">
        <h3 className="use__title">Used by 400,000+ developers.</h3>

        <div className="use__flex">
          <div className="use__info">
            <div className="info__all">
              <p className="all__text">GitPod is incredibly cool.</p>
              <p className="all__text1">
                In my opinion, this is a big step in open source software
                contribution. I'm excited to see where we go from here.
              </p>

              <div className="all__flex">
                <img src={Ben} alt="img" width={48} height={48} />

                <div className="all__info">
                  <p className="all__info__text">Ben Halpern</p>
                  <p className="all__info__text1">
                    Creator and Co-founder
                    <span className="all__info__span"> @forem </span>
                    and <br />
                    <span className="all__info__span">@ThePracticalDev</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="use__info">
            <div className="info__all">
              <p className="all__text">
                Let's say we were overwhelmed how smooth @gitpod workspaces
                creation & own Docker image for workspaces worked.
              </p>
              <p className="all__text1">
                Plus, installing @code extensions from the store and integrating
                @gitlab CI. That blew my mind entirely, and that is hard ;)
              </p>

              <div className="all__flex">
                <img src={Mich} alt="img" width={48} height={48} />

                <div className="all__info">
                  <p className="all__info__text">Michael Friedrich</p>
                  <p className="all__info__text1">
                    Developer Evangelist
                    <span className="all__info__span"> @GitLab</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="use__info">
            <div className="info__all">
              <p className="all__text all__w">
                Look at any PR (pull request) in a full coding environment where
                you can edit, build, and test the PR code, by just prepending
                "gitpod.io#" to the PR URL. Super useful for reviewing/testing
                stuff without having to check it out locally!
              </p>

              <div className="all__flex">
                <img src={Juli} alt="img" width={48} height={48} />

                <div className="all__info">
                  <p className="all__info__text">Julius Volz</p>
                  <p className="all__info__text1">
                    Creator
                    <span className="all__info__span">@PrometheusIO</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logo__grid">
          <a href="#link">
            <img className="logos" src={Git} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Free} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Dw} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Goog} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Amaz} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Face} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Uber} alt="img" />
          </a>
          <a  href="#link">
            <img className="logos" src={Ai} alt="img" width={95} height={27} />
          </a>
          <a href="#link">
            <img className="logos" src={Intel} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Thei} alt="img" />
          </a>
          <a href="#link">
            <img className="logos" src={Week} alt="img" />
          </a>
          <a className="logo__links" href="#link">
            <img className="logos" src={Code} alt="img" />
          </a>
        </div>
      </div>
    </section>
  );
}
