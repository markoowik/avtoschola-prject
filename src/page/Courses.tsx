import CourseCard from "../conponents/CourseCard.tsx";
import "../styles/courses.css";
import creditCard from "../assets/icons/credit_card_icon_129121.ico";
import kaspiBankIcon from "../assets/kaspibank__.svg";
import Modal from "react-modal";
import whatsappIcon from "../assets/icons/whatsapp_logo.svg";
import telegramIcon from "../assets/icons/telegram_logo.svg";
import { useState } from "react";

const Courses = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="courses">
      <h1 className="title">Наши курсы</h1>
      <div className="courses-list">
        <div className="courses_wrapper">
          <CourseCard />
        </div>
      </div>
      <div className="payment">
        <div className="paymentContent">
          <div>
            <h1 className="title">💳 Оплата</h1>
          </div>
          <div className="paymentContent2">
            <div className="card card1">
              <img
                src={creditCard}
                alt="creditCard"
                className="creditCardImg"
              />
              <span>Карта / Наличные</span>
            </div>
            <div className="card card2">
              <a>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/installment-plan.png"
                  alt="installment-plan"
                />
                &nbsp;Рассрочка
              </a>
            </div>
            <div className="card kaspi">
              <a href="https://">
                <img src={kaspiBankIcon} alt="KaspiBank" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cta">
        <div className="cta_wrapper">
          <p>Остались вопросы?</p>
          <p>Оставьте заявку — мы перезвоним за 10 минут</p>
          <button onClick={openModal}>Получить бесплатную консультацию</button>
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="ModalContent"
              overlayClassName="overlay"
            >
              <h2>Связаться с нами</h2>
              <p className="subtitle">Выберите WhatsApp или Telegram</p>
              <div className="ModalWrapper">
                <a
                  href="https://wa.me/77089202157?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию%20по%20автошколе."
                  target="_blank"
                >
                  <img src={whatsappIcon} alt="whatsapp" />
                </a>
                <a
                  href="https://t.me/markoowik?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию."
                  target="_blank"
                >
                  <img src={telegramIcon} alt="telegram" />
                </a>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
