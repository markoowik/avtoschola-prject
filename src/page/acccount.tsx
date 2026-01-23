import "../styles/account.css"

import {useEffect, useState} from "react";

import {Link, useNavigate} from "react-router-dom";
// import PaymentCard from "../conponents/paymentcard/PaymentCard.tsx";
import apiUser from "../api/apiUser.tsx";


interface Course {
    _id: string;
    title: string;
    description: string;
    price: number;
}

interface User {
    _id: string;
    username: string;
    surname: string;
    role: string;
    courses: Course[];
}

const Account = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const API_URL = "https://avto-school-backend.onrender.com/api";

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setLoading(false);
            return;
        }

        (async () => {
            try {
                const res = await apiUser.get(`${API_URL}/auth/me`);
                console.log("ME RESPONSE:", res.data);
                setUser(res.data);
            } catch (err: any) {
                setUser(null);
                localStorage.removeItem("token");
                setError("Сессия истекла, войдите снова");
                console.error(err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleClink =() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/admin-panel");
        } else {
            navigate("/adminlogin");
        }
    }
    const handleLogOut = () => {
        localStorage.removeItem("to ken");
        setUser(null);
        navigate("/login");
    }


    if (loading)
        return (
            <main className="profile-page">
                <div className="toast toast-loading"><span>⏳</span> Загрузка профиля...</div>
                {error}
            </main>
        );
    if (!user) {
        return (
            <main className="profile-page">
                <p>Вы не авторизованы</p>
                <button onClick={() => navigate("/login")}>
                    Войти
                </button>
            </main>
        );
    }
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
                            {user?.role === "admin" && (
                                <button onClick={handleClink}>Админ-панель</button>
                            )}
                            {user?.role === "admin" && (
                                <button>
                                    <Link to="/addnews" className="linkBtn">Добавить новости</Link>
                                </button>
                            )}
                            <button><Link to="/orders" className="linkbtn">Заказы</Link></button>
                            <button>Настройка</button>
                            <button onClick={handleLogOut}>Выйти</button>
                        </div>
                    </div>
                    <div className="status-card">
                        {user.courses.length === 0 && (
                            <p>У вас пока нет купленных курсов</p>
                        )}
                        {user.courses.map((course) => (
                            <div key={course._id}>
                                <h3>{course.title}</h3>
                                <span>Доступ открыт</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;