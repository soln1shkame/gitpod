import "./Remote.scss";
import React from "react";
import Remote__img from "./Rectangle.svg";
import Remote__Ch from "./Frame(1).svg";
import Remote__F from "./Frame(2).svg";

export default function Remote() {
  return (
    <section className="remote">
      <div className="container">
        <h3 className="remote__title">Remote-first. Secure by design.</h3>
        <img className="remote__img" src={Remote__img} alt="img" />
        <p className="remote__text">
          You no longer need an over-powered laptop to code, Gitpod works just
          as <br /> smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
          centralizes <br /> all source code and never stores it on insecure machines
          and networks.
        </p>
        <div className="remote__buttons">
          <button className="remote__btn1">
            <img className="remote__ch" src={Remote__Ch} alt="img" width={22} height={22} />
            Chrome Extension
          </button>
          <button className="remote__btn1">
            <img src={Remote__F} alt="img" width={22} height={23} />
            Firefox Extension
          </button>
        </div>
      </div>
    </section>
  );
}
