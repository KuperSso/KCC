import React from "react";
import styles from "./Price.module.css";

const Price = () => {
  const scrollToSection = () => {
    const element = document.getElementById("FreeConsultation");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };
  return (
    <div id="Price" className={`${styles.price}`}>
      <div className={`${styles.priceText}`}>
        <div className={`${styles.priceTitle}`}>
          <b>Строительство дорог – цена в Краснодарском крае</b>
        </div>
      </div>
      <div className={`${styles.priceCards}`}>
        <div className={`${styles.priceReconstruction}`}>
          <div className={`${styles.priceLabel}`}>
            <b>цена</b>
          </div>
          <div className={`${styles.priceCardTitle}`}>
            <b>от 7 000 ₽ м&sup2;</b>
          </div>
          <div>
            <div className={`${styles.priceCardDescriptionTitle}`}>
              Ремонт и реконструкция дорог
            </div>
            <div className={`${styles.priceCardDescriptionText}`}>
              <p>Капитальный и текущий ремонт дорожного покрытия</p>
              <p>Устранение дефектов</p>
              <p>Расширение и реконструкция трасс.</p>
            </div>
          </div>
          <a
            onClick={scrollToSection}
            className={`${styles.priceButton} cursor-pointer`}
          >
            Заказать звонок
          </a>
        </div>
        <div className={`${styles.priceRoad}`}>
          <div className={`${styles.priceLabel}`}>
            <b>цена</b>
          </div>
          <div className={`${styles.priceCardTitle}`}>
            <b>от 2 000 ₽ м&sup2;</b>
          </div>
          <div>
            <div className={`${styles.priceCardDescriptionTitle}`}>
              Асфальтирование дорожного покрытия
            </div>
            <div className={`${styles.priceCardDescriptionText}`}>
              <p>Профессиональное асфальтирование городских дорог и трасс</p>
              <p>Парковок</p>
              <p>Подъездных путей и прилегающих территорий</p>
            </div>
          </div>
          <a
            onClick={scrollToSection}
            className={`${styles.priceButton} cursor-pointer`}
          >
            Заказать звонок
          </a>
        </div>
        <div className={`${styles.priceFootway}`}>
          <div className={`${styles.priceLabel}`}>
            <b>цена</b>
          </div>
          <div className={`${styles.priceCardTitle}`}>
            <b>от 4 000 ₽ м&sup2;</b>
          </div>
          <div>
            <div className={`${styles.priceCardDescriptionTitle}`}>
              Благоустройство и тротуары
            </div>
            <div className={`${styles.priceCardDescriptionText}`}>
              <p>Профессиональная укладка тротуарной плитки любой сложности</p>
              <p>Отмостки, парковки, тротуары</p>
              <p>Установка бордюр любой сложности.</p>
            </div>
          </div>
          <a
            onClick={scrollToSection}
            className={`${styles.priceButton} cursor-pointer`}
          >
            Заказать звонок
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price;
