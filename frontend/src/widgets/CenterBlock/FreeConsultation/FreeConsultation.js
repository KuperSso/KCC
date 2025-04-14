import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import styles from "./FreeConsultation.module.css";

const FreeConsultation = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const sendForm = () => {
    console.log({ phone: phone, name: name, question: question });
    setName("");
    setPhone("");
    setQuestion("");
  };
  return (
    <div id="FreeConsultation" className={`${styles.freeConsultation}`}>
      <div className={`${styles.freeConsultationText}`}>
        <div className={`${styles.freeConsultationTitle}`}>
          <b>Бесплатная консультация</b>
        </div>
        <div className={`${styles.freeConsultationUnderTitle}`}>
          Если у вас остались вопросы, оставьте заявку и мы <br />
          свяжемся с вами в течение 15 мин
        </div>
        <div className={`${styles.freeConsultationDescription}`}>
          Нажимая на кнопку “Отправить заявку” вы соглашаетесь <br /> на
          обработку персональных данных
        </div>
      </div>
      <div className={`${styles.freeConsultationForm}`}>
        <div className={`${styles.freeConsultationFormText}`}>
          <div>
            <label htmlFor="name" className="font-bold block mb-2">
              Имя
            </label>
            <InputText
              className={`${styles.customInput}`}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иванов Иван Иванович"
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-bold block mb-2">
              Номер телефона
            </label>
            <InputMask
              className={`${styles.customInput}`}
              id="phone"
              mask="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (999) 000-00-00"
            ></InputMask>
          </div>
          <div>
            <label htmlFor="question" className="font-bold block mb-2">
              Ваш вопрос
            </label>
            <InputText
              className={`${styles.customInput}`}
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="По какой услуге вопрос?"
            />
          </div>
          <a onClick={sendForm} className={`${styles.freeConsultationButton}`}>
            Отправить заявку
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
