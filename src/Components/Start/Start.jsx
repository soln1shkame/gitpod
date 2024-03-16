import "./Start.scss";
import React from "react";

import Git from "./Frame(3).svg";
import Git1 from "./Frame(4).svg";
import Bit from "./Frame(5).svg";

import types from "./Frame(6).svg";
import pyt from "./Frame(7).svg";
import go from "./Frame(8).svg";
import rust from "./Frame(9).svg";
import java from "./Frame(10).svg";
import Svelte from "./Frame(11).svg";
export default function Start() {
  return (
    <section className="start">
      <div className="container">
        <h5 className="start__heading">Get started now</h5>

        <div className="start__flex">
          <div className="start__info">
            <h5 className="start__title">Connect Git repository</h5>
            <p className="start__text">
              Select a Git provider to start with an existing <br /> project
              from any Git context.
            </p>

            <div className="start__btns">
              <div className="btns">
                <button className="start__git__btn1">
                  <img
                    className="btn__img"
                    src={Git}
                    alt="img"
                    width={28}
                    height={28}
                  />
                  Continue with GitLab
                </button>
              </div>

              <div>
                <button className="start__git__btn2">
                  <img
                    className="btn__img"
                    src={Git1}
                    alt="img"
                    width={28}
                    height={28}
                  />
                  Continue with GitHub
                </button>
              </div>

              <div>
                <button className="start__git__btn3">
                  <img
                    className="btn__img"
                    src={Bit}
                    alt="img"
                    width={28}
                    height={28}
                  />
                  Continue with Bitbucket
                </button>
              </div>
            </div>

            <p className="con__text">
              Or prefix any GitLab, GitHub or Bitbucket URL <br /> with
            </p>

            <a className="con__link" href="#link">
              gitpod.io/#
            </a>
          </div>

          <div className="start__info">
            <h5 className="start__title">Launch an example workspace</h5>
            <p className="start__text">
              Dive into one of our example workspaces
            </p>

            <div className="start__btns">
              <div className="btnss">
                <div>
                  <img className="launch__type" src={types} alt="img" />
                  Node or TypeScript
                </div>
                <button className="start__git">Launch workspace</button>
              </div>

              <div className="btnss">
                <div>
                  <img className="launch__type" src={pyt} alt="img" />
                  Python
                </div>
                <button className="start__git">Launch workspace</button>
              </div>

              <div className="btnss">
                <div>
                  <img className="launch__type" src={go} alt="img" />
                  Go
                </div>
                <button className="start__git">Launch workspace</button>
              </div>

              <div className="btnss">
                <div>
                  <img className="launch__type" src={rust} alt="img" />
                  Rust
                </div>
                <button className="start__git">Launch workspace</button>
              </div>

              <div className="btnss">
                <div>
                  <img className="launch__type" src={java} alt="img" />
                  Java
                </div>
                <button className="start__git">Launch workspace</button>
              </div>

              <div className="btnss">
                <div>
                  <img className="launch__type" src={Svelte} alt="img" />
                  Svelte
                </div>
                <button className="start__git">Launch workspace</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
