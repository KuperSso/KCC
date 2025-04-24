import React, { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import styles from "./Banner.module.css";

const Banner = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const customHeader = (
    <div className={`${styles.headerTitleSidebar}`}>
      <b>КУБ СПЕЦ СТРОЙ</b>
    </div>
  );
  const handleScrollAndCloseSidebar = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
    setSidebarVisible(false);
  };
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.banner}`}>
        <div className={`${styles.headerDesktop}`}>
          <a href="/" className={`${styles.headerLogo}`}>
            <img
              src="image/main/logo.svg"
              className={`${styles.logo}`}
              alt="KCC"
            />
          </a>
          <div className={`${styles.headerLinks}`}>
            <a
              onClick={() => handleScrollAndCloseSidebar("ourMission")}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              О нас
            </a>
            <a
              onClick={() => handleScrollAndCloseSidebar("Works")}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              Работы
            </a>
            <a
              onClick={() => handleScrollAndCloseSidebar("Price")}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              Услуги
            </a>
            <a
              onClick={() => handleScrollAndCloseSidebar("Reviews")}
              className={`${styles.headerLinksButton} cursor-pointer`}
            >
              Отзывы
            </a>
          </div>
          <div className={`${styles.headerButtonCall}`}>
            <a
              onClick={() => handleScrollAndCloseSidebar("FreeConsultation")}
              className={`${styles.headerButtonCallCollor} cursor-pointer`}
            >
              Заказать звонок
            </a>
          </div>
          <div className={`${styles.sidebarButton}`}>
            <Sidebar
              header={customHeader}
              className={`${styles.sidebarOpen}`}
              position="right"
              visible={sidebarVisible}
              onHide={() => setSidebarVisible(false)}
            >
              <div className={`${styles.sidebar}`}>
                <div className={`${styles.headerLinksSidebar}`}>
                  <a
                    onClick={() => handleScrollAndCloseSidebar("ourMission")}
                    className={`${styles.headerLinksButtonSidebar} cursor-pointer`}
                  >
                    О нас
                  </a>
                  <a
                    onClick={() => handleScrollAndCloseSidebar("Works")}
                    className={`${styles.headerLinksButtonSidebar} cursor-pointer`}
                  >
                    Работы
                  </a>
                  <a
                    onClick={() => handleScrollAndCloseSidebar("Price")}
                    className={`${styles.headerLinksButtonSidebar} cursor-pointer`}
                  >
                    Услуги
                  </a>
                  <a
                    onClick={() => handleScrollAndCloseSidebar("Reviews")}
                    className={`${styles.headerLinksButtonSidebar} cursor-pointer`}
                  >
                    Отзывы
                  </a>
                </div>
                <div className={`${styles.headerButtonCallSidebar}`}>
                  <a
                    onClick={() =>
                      handleScrollAndCloseSidebar("FreeConsultation")
                    }
                    className={`${styles.headerButtonCallCollorSidebar} cursor-pointer`}
                  >
                    Заказать звонок
                  </a>
                </div>
              </div>
            </Sidebar>
            <Button
              className={`${styles.bannerButtonMobile}`}
              icon="pi pi-bars"
              onClick={() => setSidebarVisible(true)}
            />
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
