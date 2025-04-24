import React, { useState, useEffect } from "react";
import styles from "./OurWorks.module.css";
import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

const OurWorks = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [popUp, setPopUp] = useState("footway");
  const clickButtonPopUp = (value) => {
    setVisible(true);
    setPopUp(value);
  };
  const arrayPopUp = {
    footway: {
      name: "ТРОТУАРЫ",
      values: [
        {
          image: "footway-1.jpg",
        },
        {
          image: "footway-2.jpg",
        },
        {
          image: "footway-3.jpg",
        },
        {
          image: "footway-4.jpg",
        },
        {
          image: "footway-5.jpg",
        },
      ],
    },
    asphalt: {
      name: "АCФАЛЬТИРОВАННЫЕ УЧАСТКИ",
      values: [
        {
          image: "asphalt-1.jpeg",
        },
        {
          image: "asphalt-2.jpeg",
        },
        {
          image: "asphalt-3.jpeg",
        },
        {
          image: "asphalt-4.jpeg",
        },
        {
          image: "asphalt-5.jpeg",
        },
      ],
    },
    roads: {
      name: "ДОРОГИ",
      values: [
        {
          image: "Road-1.jpg",
        },
        {
          image: "Road-2.jpg",
        },
        {
          image: "Road-3.jpg",
        },
        {
          image: "Road-4.jpg",
        },
        {
          image: "Road-5.jpg",
        },
      ],
    },
    reconstruction: {
      name: "ЯМОЧНЫЕ РАБОТЫ",
      values: [
        {
          image: "reconstruction-1.jpg",
        },
        {
          image: "reconstruction-2.jpg",
        },
        {
          image: "reconstruction-3.jpg",
        },
        {
          image: "reconstruction-4.jpg",
        },
      ],
    },
  };
  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  useEffect(() => {
    setProducts(arrayPopUp[popUp]);
  }, [popUp]);

  const productTemplate = (product) => (
    <img
      src={`image/our_works/photo_card/${product.image}`}
      className={`${styles.ourWorks}`}
    />
  );

  return (
    <div id="Works" className={`${styles.ourWorks}`}>
      <div className={`${styles.ourWorksLeftCards}`}>
        <div className={`${styles.ourWorksCard}`}>
          <div className={`${styles.ourWorksCardTitle}`}>Наши работы</div>
          <div className={`${styles.ourWorksCardDiscription}`}>
            Наши дороги — ваше спокойствие
            <br />
            Посмотрите, как мы улучшаем дороги.
          </div>
        </div>
        <div className={`${styles.ourWorksFootway}`}>
          <div className={`${styles.ourWorkFootwayText}`}>
            <div className={`${styles.ourWorkFootwayTitle}`}>
              <b>Тротуары</b>
            </div>
            <div className={`${styles.ourWorkFootwayDescription}`}>
              Тротуары не только выполняют практическую функцию, но и улучшают
              внешний вид улиц, создавая гармоничный городской ландшафт.
            </div>
            <Button
              className={`${styles.ourWorkButton}`}
              label="Смотреть"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="secondary"
              rounded
              onClick={() => clickButtonPopUp("footway")}
            />
            <Dialog
              className={`${styles.ourWorkDialog}`}
              header={products.name}
              visible={visible}
              style={{ width: "90vw", maxWidth: "700px" }}
              onHide={() => {
                if (!visible) return;
                setVisible(false);
              }}
            >
              <Carousel
                value={products.values}
                numVisible={1}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                autoplayInterval={2000}
              />
            </Dialog>
          </div>
        </div>
      </div>
      <div className={`${styles.ourWorkCenterCard}`}>
        <div className={`${styles.ourWorkCenterCardText}`}>
          <div className={`${styles.ourWorkCenterCardTitle}`}>
            <b>Асфальт</b>
          </div>
          <div className={`${styles.ourWorkCenterCardDescription}`}>
            Асфальтовые покрытия обладают комфортом и безопасностью при ходьбе,
            а также долговечны и доступны по цене.
          </div>
          <Button
            className={`${styles.ourWorkButton}`}
            label="Смотреть"
            icon="pi pi-arrow-right"
            iconPos="right"
            severity="secondary"
            rounded
            onClick={() => clickButtonPopUp("asphalt")}
          />
        </div>
      </div>
      <div className={`${styles.ourWorksRightCards}`}>
        <div className={`${styles.ourWorkRoadsCard}`}>
          <div className={`${styles.ourWorkRoadsText}`}>
            <div className={`${styles.ourWorkRoadsCardTitle}`}>
              <b>Дороги</b>
            </div>
            <div className={`${styles.ourWorkRoadsCardDescription}`}>
              Современные дороги, обеспечивают безопасное и удобное движение
              транспорта, снижая вероятность аварий и улучшая дорожное покрытие.
            </div>
            <Button
              className={`${styles.ourWorkButton}`}
              label="Смотреть"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="secondary"
              rounded
              onClick={() => clickButtonPopUp("roads")}
            />
          </div>
        </div>
        <div className={`${styles.ourWorkReconstructionCard}`}>
          <div className={`${styles.ourWorkReconstructionText}`}>
            <div className={`${styles.ourWorkReconstructionCardTitle}`}>
              <b>Реконструкция</b>
            </div>
            <div className={`${styles.ourWorkReconstructionCardDescription}`}>
              Ямочные работы позволяют устранять участки с высоким уровнем
              аварийности, возвращая асфальту вторую жизнь.
            </div>
            <Button
              className={`${styles.ourWorkButton}`}
              label="Смотреть"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="secondary"
              rounded
              onClick={() => clickButtonPopUp("reconstruction")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
