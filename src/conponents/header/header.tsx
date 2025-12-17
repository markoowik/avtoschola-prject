import avtoIMG from "../../assets/IMG/avtoIMG.png"
import shit from "../../assets/shield-ok-icon_34371.ico"
import park1 from "../../assets/cars/avtopark1.webp"
import cobalt from "../../assets/cars/cobalt.webp"
import gazzel from "../../assets/cars/gazzel.webp"

import whatsappIcon from "./../../assets/icons/whatsapp_logo.svg"
import telegramIcon from "../../assets/icons/telegram_logo.svg"
import vkIcon from "../../assets/icons/vk-logo.svg"
import "./style.css"



const Header = () => {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-img">
                            <img src={avtoIMG}/>
                        </div>
                        <div className="header-text">
                            <h2>Добро пожаловать в AvtoSchool company</h2>
                            <h3 className="inner">Почему нам доверяют</h3>
                            <ul>
                                <li><img className="icon" src={shit}/>Официальная лицензия и опытные инструкторы</li>
                                <li>🚗 Современный автопарк (механика и автомат)</li>
                                <li>🕒 Удобный график занятий</li>
                                <li>📘 Актуальные ПДД РК</li>
                                <li>🤝 Поддержка до успешной сдачи экзамена</li>
                            </ul>

                            <p className="header-inner">Запишитесь на занятия сегодня и сделайте первый шаг к свободе на дороге!</p>
                            <button className="header-btn">Записаться сейчас</button>
                        </div>

                    </div>
                    <div className="prices">
                        <h1>Цены</h1>
                        <div className="prices-cards">
                            <div className="prices-card">
                                <h2>Тариф: "Легкий Старт"</h2>
                                <div>
                                    <span className="date">1 месяц</span>
                                    <span className="effect">Эффективность 30%</span>
                                </div>
                                <div className="prices-card-description">
                                    <p>🚀 Доступ к тестам ПДД на 30 дней</p>
                                    <p>🚀 Экзаменационная база СпецЦона за 1500 вопросов</p>
                                </div>
                                <p className="prices-price">Цена: <span className="tenge">7990&#8376;</span> </p>
                                <button className="more-btn">Подробнее</button>
                            </div>
                            <div className="prices-card">
                                <h2>Тариф: "Эконом"</h2>
                                <div>
                                    <span className="date">1 месяц</span>
                                    <span className="effect">Эффективность 40%</span>
                                </div>
                                <div className="prices-card-description">
                                    <p>🚀 Доступ к тестам ПДД на 30 дней</p>
                                    <p>🚀 Экзаменационная база СпецЦона за 1500 вопросов</p>
                                    <p>🚀 Интелектуальный помощник с рекомендациями про прогрессу обучения</p>
                                    <p>🚀 Аналитика прохождений, работа над ошибками</p>
                                    <p>🚀 Режим экзамена</p>
                                </div>
                                <p className="prices-price2">Цена: <span className="tenge">8990&#8376;</span></p>
                                <button className="more-btn">Подробнее</button>
                            </div>
                            <div className="prices-card">
                                <h2>Тариф: "Стандарт"</h2>
                                <div>
                                    <span className="date">1 месяц</span>
                                    <span className="effect">Эффективность 70%</span>
                                </div>
                                <div className="prices-card-description">
                                    <p>🚀 Доступ к тестам ПДД на 30 дней</p>
                                    <p>🚀 Экзаменационная база СпецЦона за 1500 вопросов</p>
                                    <p>🚀 Интелектуальный помощник с рекомендациями про прогрессу обучения</p>
                                    <p>🚀 Аналитика прохождений, работа над ошибками</p>
                                    <p>🚀 Режим экзамена</p>
                                    <p>🚀 Онлайн видео-обучающий материал по автодрому в 3D формате</p>
                                    <p>🚀 Эксклюзивные видео-объяснения в тестах</p>
                                </div>
                                <p className="prices-price3">Цена: <span className="tenge">8990&#8376;</span></p>
                                <button className="more-btn">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="sale_info">
                <div className="sale_wrapper">
                    <div className="sale-info_text">
                        <h1>Стоимость обучения</h1>
                        <p>Мы предлагаем честные и прозрачные цены — без скрытых платежей.</p>
                    </div>
                    <div className="sale-info_text-ul">
                        <ul>
                            <li>Теоретические занятия</li>
                            <li>Практика с инструктором</li>
                            <li>Учебные материалы</li>
                            <li>Подготовка к экзаменам</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="car-park">
                <div className="car-park_wrapper">
                    <div className="car-park_title">
                        <h1>Наш автопарк</h1>
                    </div>
                    <div className="car-park_content">
                        <div className="car-park_card">
                            <img src={park1}/>
                            <div className="car-park_card-info">
                                <p>Марка: Toyota Corollo<br/>
                                    Тип КПП: Автомат<br/>
                                    Год выпуска: 2019
                                </p>
                            </div>
                        </div>
                        <div className="car-park_card">
                            <img src={cobalt}/>
                            <div className="car-park_card-info">
                                <p>Марка: Chevrolet Cobalt<br/>
                                    Тип КПП: Механика<br/>
                                    Год выпуска: 2008
                                </p>
                            </div>
                        </div>
                        <div className="car-park_card">
                            <img src={gazzel}/>
                            <div className="car-park_card-info">
                                <p>Марка: Газель бизнес<br/>
                                    Тип КПП: Автомат<br/>
                                    Год выпуска: 2010
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts">
                <div className="contacts_wrapper">
                    <div className="contact-title">
                        <h1>Мы на связи</h1>
                        <p>Отвечаем в течение 10 минут</p>
                    </div>
                    <div className="contact_links">
                        <a href="http://w.me/+77089202157"><img src={whatsappIcon}/></a>
                        <a href="http://t.me/markoowik"><img src={telegramIcon}/></a>
                        <a href="http://vk.com/"><img src={vkIcon}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;