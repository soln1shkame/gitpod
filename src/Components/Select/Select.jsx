import "./Select.scss";
import React from "react";
import Select__img from "./Rectangle.png";

export default function Select() {
  return (
    <section className="select">
      <div className="container">
        <h2 className="select__heading">
          Select project, <br />
          <span className="select__text">
            check dependencies, checkout branch, view{" "}
            <br className="select__br" /> readme.txt, install tools, run build,
            run test,
          </span>{" "}
          <br />
          start coding.
        </h2>

        <div className="select__flex">
          <div className="select__info">
            <h3 className="select__title">Think CI/CD for dev environments</h3>
            <p className="select__flex__text">
              We invented prebuilds so application code, configuration and
              infrastructure can all be stored as machine-executable code in
              your git repositories and applied to dev environments
              automatically and continuously.
            </p>

            <div className="select__buttons">
                <button className="select__btn1">More on prebuilds</button>
                <button className="select__btn2">Documentation</button>
            </div>
          </div>
          <img className="select__img" src={Select__img} alt="code" />
        </div>
      </div>
    </section>
  );
}
