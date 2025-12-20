import {useState} from "react";
import kaspiBankIcon from "../assets/kaspibank__.svg"
import creditCard from "../assets/icons/credit_card_icon_129121.ico"
import whatsappIcon from "../assets/icons/whatsapp_logo.svg"
import telegramIcon from "./../assets/icons/telegram_logo.svg"
import Modal from "react-modal"


const Sale = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal =() => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="sale">
            <div className="container">
                {/*<div className="title">*/}
                {/*    <h1>Тарифы</h1>*/}
                {/*</div>*/}
                <div className="sale_wrapper">
                    <div className="sale-info">
                        <span className="prices-icon">💳</span>
                        <p>Цены на обучение в автошколе <br/>
                            Выберите подходящий тариф и начните обучение уже сегодня</p>
                    </div>
                </div>
                <div className="sale-cards">
                    <div className="sale-card">
                        <h3>Стандарт</h3>
                        <span className="price">180 000 ₸</span>
                        <ul>
                            <li>Теория</li>
                            <li>20 часов вождения</li>
                            <li>Учебное авто</li>
                        </ul>
                        <button>Записаться</button>
                    </div>

                    <div className="sale-card featured">
                        <div className="badge">Рекомендуем</div>
                        <h3>Оптимальный</h3>
                        <span className="price">220 000 ₸</span>
                        <ul>
                            <li>Теория</li>
                            <li>30 часов вождения</li>
                            <li>Поддержка инструктора</li>
                        </ul>
                        <button>Записаться</button>
                    </div>

                    <div className="sale-card">
                        <h3>Премиум</h3>
                        <span className="price">280 000 ₸</span>
                        <ul>
                            <li>Индивидуальный график</li>
                            <li>40 часов вождения</li>
                            <li>Сопровождение</li>
                        </ul>
                        <button>Записаться</button>
                    </div>
                </div>
                <div className="payment">
                    <div className="paymentContent">
                        <div >
                            <h1 className="title">💳 Оплата</h1>
                        </div>
                        <div className="paymentContent2">
                            <div className="card card1">
                                <img src={creditCard} alt="creditCard" className="creditCardImg"/><span>Карта</span>
                            </div>
                            <div className="card card2">
                                <a><img width="48" height="48" src="https://img.icons8.com/color/48/installment-plan.png" alt="installment-plan"/>&nbsp;Рассрочка</a>
                            </div>
                            <div className="card">
                                <a href="https://"><img src={kaspiBankIcon}/></a>
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
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="ModalContent" overlayClassName="overlay">
                                <h2>Связаться с нами</h2>
                                <p className="subtitle">Выберите WhatsApp или Telegram</p>
                                <div className=" ModalWrapper">
                                    <a href="https://wa.me/77089202157?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию%20по%20автошколе."  target="_blank"><img src={whatsappIcon} alt="whatsapp"/></a>
                                    <a href="https://t.me/markoowik?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию."
                                       target="_blank"><img src={telegramIcon} alt="telegram"/></a>
                                </div>

                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale;