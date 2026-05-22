import "../styles/account.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiUser from "../api/apiUser.tsx";

/* ---------- ТИПЫ ---------- */

// interface Course {
//   _id: string;
//   title: string;
//   slug: string; // 👈 НУЖНО для Telegram (easy / economy / standard)
// }

// заказ (оплаченный курс)
interface Order {
  _id: string;
  status: "pending" | "paid";
  courseId: {
    _id: string;
    title: string;
    slug: string; // easy / economy / standard
  };
}

// пользователь
interface User {
  _id: string;
  username: string;
  surname: string;
  role: string;
}

const Account = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]); // 👈 ЗАКАЗЫ
  //   const [courses, setCourse] = useState<Course[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = "https://avto-school-backend.onrender.com/api";
  const token = localStorage.getItem("token");

  /* ---------- ПОЛУЧАЕМ ПОЛЬЗОВАТЕЛЯ ---------- */
  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const me = await apiUser.get(`${API_URL}/auth/me`);
        setUser(me.data);
        console.log("USER COURSES:", me.data.courses);

        const ordersRes = await apiUser.get(`${API_URL}/orders/my-orders`);
        const ordersData = Array.isArray(ordersRes.data)
          ? ordersRes.data
          : Array.isArray(ordersRes.data.orders)
            ? ordersRes.data.orders
            : [];

        setOrders(ordersData);
        console.log("ORDERS:", orders);
      } catch (err) {
        console.error(err);
        setUser(null);
        localStorage.removeItem("token");
        setError("Сессия истекла");
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ---------- КНОПКИ ---------- */

  const handleAdminClick = () => {
    navigate("/admin-panel");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  /* ---------- СОСТОЯНИЯ ---------- */

  if (loading) {
    return (
      <main className="profile-page">
        <div className="toast toast-loading">
          <span>⏳</span> Загрузка профиля...
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="profile-page">
        <p>Вы не авторизованы</p>
        <button onClick={() => navigate("/login")} className="profileBtn">
          Войти
        </button>
      </main>
    );
  }

  /* ---------- JSX ---------- */
  return (
    <div className="account">
      <div className="container">
        <h1 className="title">Личный кабинет</h1>

        <div className="account_wrapper">
          {/* ---------- ЛЕВАЯ ЧАСТЬ ---------- */}
          <div className="account_content">
            <h3>Личная информация</h3>
            <p>Имя: {user.username}</p>
            <p>Фамилия: {user.surname}</p>

            <div className="buttons">
              {user.role === "admin" && (
                <button onClick={handleAdminClick} className="linkBtn">
                  Админ-панель
                </button>
              )}

              <button className="linkBtn">
                <Link to="/orders" className="linkBtn">
                  Заказы
                </Link>
              </button>
              <button className="linkBtn">Настройка</button>
              <button onClick={handleLogOut} className="logout">
                Выйти
              </button>
            </div>
          </div>

          {/* ---------- ПРАВАЯ ЧАСТЬ: КУРСЫ ---------- */}
          <div className="status-card">
            {orders.length === 0 && <p>У вас пока нет купленных курсов</p>}

            {orders.map((order) => (
              <div key={order._id} className="order-card">
                <div>
                  <h3>{order.courseId.title}</h3>
                  <span>Доступ открыт</span>
                </div>

                <button
                  onClick={() => {
                    window.open(
                      `https://t.me/driving_scholl_bot?start=bind_${user._id}`,
                      "_blank",
                    );
                  }}
                  className="clickBtn"
                >
                  Перейти к урокам
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
