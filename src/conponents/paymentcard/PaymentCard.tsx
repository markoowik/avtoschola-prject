import "./payment.css";
import {Link} from "react-router-dom";

interface PaymentProps {
    total: number;
    paid: number;
}

const PaymentCard = ({ total, paid }: PaymentProps) => {
    const remaining = total - paid;
    const progress = Math.round((paid / total) * 100);

    return (
        <div className="payment-card">
            <h3>Оплата обучения</h3>

            <div className="payment-info">
                <p>💰 Стоимость курса: <b>{total.toLocaleString()} ₸</b></p>
                <p>✅ Оплачено: <b>{paid.toLocaleString()} ₸</b></p>
                <p>❌ Осталось: <b>{remaining.toLocaleString()} ₸</b></p>
            </div>

            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <span className="progress-text">{progress}% оплачено</span>

            <div className="payment-actions">
                <Link to={`/kaspiqr`}>
                    <button className="pay-btn">Оплатить</button>
                </Link>

                <button className="history-btn">История платежей</button>
            </div>
        </div>
    );
};

export default PaymentCard;
