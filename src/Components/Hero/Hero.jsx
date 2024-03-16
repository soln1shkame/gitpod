import React from "react";
import "./Hero.scss";
import Hero__img from "./Rectangle@3x.png";
import Hero__icon from "./Frame.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <h1 className="hero__title">Always <br /> Ready to Code</h1>
          <p className="hero__text">
            Spin up fresh, automated dev environments for each task, in the
            cloud, in seconds.
          </p>

          <div className="hero__info__flex">
            <div className="info__flex">
              <button className="hero__btn">Try Now</button>
              <img className="hero__icon" src={Hero__icon} alt="img" width={160} height={32} />
            </div>
            <p className="info__text">
              Open a workspace. <br /> Start from any Git context.
            </p>
          </div>
        </div>
        <img className="hero__img" src={Hero__img} alt="img" width={630} height={652}/>
      </div>
    </section>
  );
}
