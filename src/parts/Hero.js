import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container-fluid container-lg container-sm">
        <div className="row row-cols-1 row-cols-lg-2 mb-lg-5">
          <div className="col">
            <h1 className="hero-title font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p className="hero-desc mb-4 font-weight-light text-gray-500">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              type="button"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row pt-5 pb-3 pb-lg-0">
              <div className="hero-item col col-lg-3">
                <img
                  width="36"
                  height="36"
                  src={`${process.env.PUBLIC_URL}/images/icon-traveler.svg`}
                  alt={`${props.data.travelers} travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>

              <div className="hero-item col col-lg-3">
                <img
                  width="36"
                  height="36"
                  src={`${process.env.PUBLIC_URL}/images/icon-treasure.svg`}
                  alt={`${props.data.treasures} treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>

              <div className="hero-item col col-lg-3">
                <img
                  width="36"
                  height="36"
                  src={`${process.env.PUBLIC_URL}/images/icon-cities.svg`}
                  alt={`${props.data.cities} cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="position-relative">
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid"
              />
              <img
                src={ImageHero_}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "5% 0 0 -95%",  zIndex: "-1" }}
              />              
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
