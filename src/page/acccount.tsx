import "../styles/account.css"

import {useEffect, useState} from "react";
import api from "./../api.tsx"
import {Link, useNavigate} from "react-router-dom";
import PaymentCard from "../conponents/paymentcard/PaymentCard.tsx";


interface User {
    _id: string;
    email: string;
    username: string;
    surname: string;
}

const Account = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const API_URL = "https://avto-school-backend.onrender.com/api";

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get(`${API_URL}/auth/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setUser(res.data);
            } catch (err: any) {
                setUser(null);
                localStorage.removeItem("token");
                setError("Сессия истекла, войдите снова");
            } finally {
                setLoading(false);
            }
        };

        const token = localStorage.getItem("token");
        if (token) {
            fetchProfile();
        } else {
            setLoading(false);
        }
    }, []);

    const handleClink =() => {
        const token = localStorage.getItem("token");

        if(token) {
            navigate("/admin-panel");
        }else{
            navigate("/adminlogin");
        }
    }


    if (loading)
        return (
            <main className="profile-page">
                <div className="toast toast-loading"><span>⏳</span> Загрузка профиля...</div>
                {error}
            </main>
        );
    return (
        <div className="account">

            <div className="container">

                <h1 className="title">Личный кабинет</h1>
                <div className="account_wrapper">
                    <div className="account_content">
                        <h3>Личный информация</h3>
                        <p>Имя: {user?.username}</p>
                        <p>Фамилия: {user?.surname}</p>
                        <p>Номер телефона: +7 708 920 2157</p>
                        <div className="buttons">
                            <button onClick={handleClink}>Админ-панель</button>
                            <button><Link to="/addnews" className="linkBtn"> Добавить новости</Link></button>
                            <button>Настройка</button>
                            <button>Выйти</button>
                        </div>
                    </div>
                    <div className="status-card">
                        <PaymentCard total={100} paid={100}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;