import "../styles/account.css"

import {useEffect, useState} from "react";
import api from "./../api.tsx"


interface User {
    _id: string;
    email: string;
    username: string;
    surname: string;
}

const Account = () => {

    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const API_URL = "https://avto-school-backend.onrender.com/api";

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get(`${API_URL}/auth/me`);
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


    if (loading)
        return (
            <main className="profile-page">
                <div className="toast toast-loading">⏳ Загрузка профиля...</div>
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
                            <button>Настройка</button>
                            <button>Выйти</button>
                        </div>
                    </div>
                    <div className="status-card">
                        <h3>Статус обучения</h3>

                        <div className="status-item">
                            <span className="icon">📘</span>
                            <span className="label">Теория</span>
                            <span className="value in-progress">В процессе</span>
                        </div>

                        <div className="status-item">
                            <span className="icon">🚗</span>
                            <span className="label">Практика</span>
                            <span className="value">3 / 20 занятий</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '80%' }}></div>
                        </div>

                        <div className="status-item">
                            <span className="icon">📝</span>
                            <span className="label">Экзамен</span>
                            <span className="value muted">Не назначен</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;