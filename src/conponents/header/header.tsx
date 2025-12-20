// import avtoIMG from "../../assets/IMG/avtoIMG.png"
// import shit from "../../assets/shield-ok-icon_34371.ico"
import park1 from "../../assets/cars/avtopark1.webp"
import cobalt from "../../assets/cars/cobalt.webp"
import gazzel from "../../assets/cars/gazzel.webp"

import whatsappIcon from "./../../assets/icons/whatsapp_logo.svg"
import telegramIcon from "../../assets/icons/telegram_logo.svg"
import vkIcon from "../../assets/icons/vk-logo.svg"
import "./style.css"

type Review = {
    name: string;
    age: number;
    text: string;
}

const reviews: Review[] = [
    {
        name: "Айгуль",
        age: 27,
        text: "Очень понравилось обучение! Инструктор всё объяснял спокойно и понятно. Теория удобная, практика помогла быстро почувствовать уверенность за рулём."
    },
    {
        name: "Данияр",
        age: 34,
        text: "Записался на курс категории B. Гибкий график занятий — можно совмещать с работой. Экзамен сдал с первого раза!"
    },
    {
        name: "Марина",
        age: 22,
        text: "Мне понравилось, что сразу совмещают теорию и практику. Машины новые и удобные, сайт современный."
    },
    {
        name: "Ермек",
        age: 40,
        text: "Выбирал между несколькими автошколами, но здесь понравилась прозрачная цена и онлайн‑запись. Всё честно."
    },
    {
        name: "Анастасия",
        age: 19,
        text: "Училась с нуля, сначала боялась. Но инструктор поддерживал и объяснял каждую ошибку. Теперь я уверенно вожу!"
    }
];

const Header = () => {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <h1>Автошкола AvtoSchool</h1>
                        <p>Обучаем вождению с нуля. Быстро. Качественно. Надёжна.</p>
                        <button className="header-btn">Записаться на обучение уже сегодня</button>
                        {/*<div className="header-img">*/}
                        {/*    <img src={avtoIMG}/>*/}
                        {/*</div>*/}
                        {/*<div className="header-text">*/}
                        {/*    <h2>Добро пожаловать в AvtoSchool company</h2>*/}
                        {/*    <h3 className="inner">Почему нам доверяют</h3>*/}
                        {/*    <ul>*/}
                        {/*        <li><img className="icon" src={shit}/>Официальная лицензия и опытные инструкторы</li>*/}
                        {/*        <li>🚗 Современный автопарк (механика и автомат)</li>*/}
                        {/*        <li>🕒 Удобный график занятий</li>*/}
                        {/*        <li>📘 Актуальные ПДД РК</li>*/}
                        {/*        <li>🤝 Поддержка до успешной сдачи экзамена</li>*/}
                        {/*    </ul>*/}

                        {/*    <p className="header-inner">Запишитесь на занятия сегодня и сделайте первый шаг к свободе на дороге!</p>*/}
                        {/*    <button className="header-btn">Записаться сейчас</button>*/}
                        {/*</div>*/}

                    </div>
                    <div className="features">
                        <div className="feature-card">
                            <span className="icon">🚗</span>
                            <h3>Опытные инструкторы</h3>
                            <p>Инструктора с большим стажем и спокойным подходом к обучению.</p>
                        </div>

                        <div className="feature-card">
                            <span className="icon">⏱️</span>
                            <h3>Удобный график</h3>
                            <p>Занятия утром, днём или вечером — подстроимся под вас.</p>
                        </div>

                        <div className="feature-card">
                            <span className="icon">📘</span>
                            <h3>Теория + практика</h3>
                            <p>Совмещаем занятия в классе и реальное вождение с первого этапа.</p>
                        </div>

                    </div>
                    <div className="section-divider"></div>
                    <section className="pricing">
                        <h2>Тарифы обучения</h2>
                        <p className="section-subtitle">
                            Выберите формат обучения, который подойдёт именно вам
                        </p>
                        <div className="pricing-grid">

                            <div className="card">
                                <h3>Лёгкий старт</h3>
                                <p className="subtitle">Для начинающих</p>

                                <ul className="features-list">
                                    <li>Доступ к тестам ПДД — 30 дней</li>
                                    <li>Экзаменационная база (1500 вопросов)</li>
                                </ul>

                                <div className="price">7 990 ₸</div>
                                <button className="btn-primary">Записаться</button>
                            </div>

                            <div className="card popular">
                                <h3>Эконом</h3>
                                <p className="subtitle">Оптимальный выбор</p>

                                <ul className="features-list">
                                    <li>Тесты ПДД + режим экзамена</li>
                                    <li>Аналитика ошибок</li>
                                    <li>Интеллектуальный помощник</li>
                                </ul>

                                <div className="price">8 990 ₸</div>
                                <button className="btn-primary">Записаться</button>
                            </div>

                            <div className="card">
                                <h3>Стандарт</h3>
                                <p className="subtitle">Максимум возможностей</p>

                                <ul className="features-list">
                                    <li>Все возможности тарифа «Эконом»</li>
                                    <li>Видео-уроки и 3D материалы</li>
                                    <li>Эксклюзивные пояснения</li>
                                </ul>

                                <div className="price">9 990 ₸</div>
                                <button className="btn-primary">Записаться</button>
                            </div>

                        </div>
                    </section>

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
            <section className="reviews">
                <h1 className="title">Отзывы наших учебников</h1>
                <div className="review-cards">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <h3>{review.name}, {review.age} лет</h3>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
            </section>
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