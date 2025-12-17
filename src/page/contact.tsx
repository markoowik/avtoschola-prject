

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div>
                        <h1>Контакты</h1>
                    </div>

                    <div className="contactContent">
                        <div className="contactBlock1">
                            <h1>Добро пожаловать</h1>
                            <p>Мы открыты для любых предложений или просто для общения.</p>
                            <div className="line"></div>
                            <div className="contactDetails">
                                <h3>Адрес</h3>
                                <p>Мақаш аким 1/1</p>
                            </div>
                            <hr/>
                            <div className="contactDetails">
                                <h3>Почта</h3>
                                <p>contact@gmail.com</p>
                            </div>
                            <hr/>
                            <div className="contactDetails">
                                <h3>Давай поговорим</h3>
                                <p>+7 (708) 920 21 57</p>
                            </div>
                            <hr/>
                            <div className="social-link-container">
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-linkedin"></i>
                            </div>
                        </div>
                        <div className="contactBlock2">
                            <form className="form">
                                <div className="form-group">
                                <input type="text" name="name" className="input-field form-input"
                                           placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="input-field form-input"
                                           placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" rows={5} className="input-field form-input"
                                              placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="input-field submit-btn" value="Submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;