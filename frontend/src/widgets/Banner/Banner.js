import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import styles from "./Banner.module.css";

const Banner = () => {
  const scrollToSection = () => {
    const element = document.getElementById("FreeConsultation");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };
  const scrollToSectionWorks = () => {
    const element = document.getElementById("Works");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };
  const scrollToSectionService = () => {
    const elementWorks = document.getElementById("Price");
    if (elementWorks) {
      window.scrollTo({ top: elementWorks.offsetTop, behavior: "smooth" });
    }
  };
  const scrollToSectionReviews = () => {
    const elementWorks = document.getElementById("Reviews");
    if (elementWorks) {
      window.scrollTo({ top: elementWorks.offsetTop, behavior: "smooth" });
    }
  };
  const scrollToSectionOurMissions = () => {
    const elementWorks = document.getElementById("ourMission");
    if (elementWorks) {
      window.scrollTo({ top: elementWorks.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.banner}`}>
        <div className={`${styles.headerInput}`}>
          <a href="/" className={`${styles.headerLogo}`}>
            <img
              src="image/main/logo.svg"
              className={`${styles.logo}`}
              alt="KCC"
            />
          </a>
          <div className={`${styles.headerLinks}`}>
            <a
              onClick={scrollToSectionOurMissions}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              О нас
            </a>
            <a
              onClick={scrollToSectionWorks}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              Работы
            </a>
            <a
              onClick={scrollToSectionService}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              Услуги
            </a>
            <a
              onClick={scrollToSectionReviews}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              Отзывы
            </a>
          </div>
          <div className={`${styles.headerButtonCall}`}>
            <a
              onClick={scrollToSection}
              className={`${styles.headerButtonCallCollor} cursor-pointer`}
            >
              Заказать звонок
            </a>
          </div>
        </div>
        <div className={`${styles.textBanner}`}>
          Строим дороги,
          <br />
          продлеваем ваш путь.
        </div>
        <video
          className={`${styles.video}`}
          preload="auto"
          playsInline
          muted
          loop
          autoPlay
          crossOrigin="anonymous"
        >
          <source
            src="http://62.113.36.242/banner_no_audio.mp4"
            type="video/mp4"
          />

          <source
            src="http://62.113.36.242/banner_mobile.mp4"
            type="video/mp4"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />

          <source
            src="http://62.113.36.242/banner_tablet.mp4"
            type="video/mp4"
            media="(min-width: 600px) and (orientation:portrait)"
          />
        </video>
      </div>
    </header>
  );
};

export default Banner;
