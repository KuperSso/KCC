import React from "react";
import styles from "./Footer.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handleCopy = () => {
    const phoneNumber = "+7 (918) 466-56-31";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      toast.success("Номер телефона успешно скопирован!");
    });
  };
  const scrollToSectionService = () => {
    const elementWorks = document.getElementById("Price");
    if (elementWorks) {
      window.scrollTo({ top: elementWorks.offsetTop, behavior: "smooth" });
    }
  };
  const scrollToSectionWorks = () => {
    const element = document.getElementById("Works");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footerUpBlock}`}>
        <div className={`${styles.footerLogo}`}>
          <a href="/" className={`${styles.headerLogo}`}>
            <img
              src="image/main/logoFooter.svg"
              className={`${styles.logo}`}
              alt="KCC"
            />
          </a>
        </div>
        <div className={`${styles.footerButton}`}>
          <div className={`${styles.footerButtonlinks}`}>
            <a
              onClick={scrollToSectionService}
              className={`${styles.footerService} cursor-pointer`}
            >
              Услуги
            </a>
            <a
              onClick={scrollToSectionWorks}
              className={`${styles.footerOurWorks} cursor-pointer`}
            >
              Примеры работ
            </a>
            <a
              onClick={handleCopy}
              className={`${styles.footerNumber} cursor-pointer`}
            >
              +7 (918) 466-56-31
            </a>
            <ToastContainer
              className={`${styles.footerToast}`}
              progressclassName={`${styles.footerToastBar}`}
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              toastStyle={{ backgroundColor: "#393737", color: "#ebeaea" }}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.footerYear}`}>
        <b>© 2019-2025 | Куб Спец Строй</b>
      </div>
    </div>
  );
};

export default Footer;
