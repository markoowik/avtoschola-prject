import { useState, useEffect } from "react";
import "./../adminsystem.css";
import apiUser from "../../../api/apiUser";
import { NavLink, useNavigate } from "react-router-dom";
import apiAdmin from "../../../api/apiAdmin";
import axios from "axios";

interface User {
  _id: string;
  username: string;
  surname: string;
  role: string;
  createdAt: string;
}

interface Order {
  _id: string;
  status: "pending" | "paid";
  courseId: {
    _id: string;
    title: string;
    slug: string; // easy / economy / standard
  };
}

const roleMap: Record<string, string> = {
  admin: "Администратор",
  moderator: "Модератор",
  student: "Студент",
};

const usersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  // const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
        const res = await apiUser.get(`${API_URL}/auth/`);
        setUsers(res.data); // тут массив

        console.log("USERS:", res.data);
      } catch (err) {
        console.error(err);
        setError("Ошибка загрузки пользователей");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  console.log(import.meta.env.VITE_API_URL);

  const deleteUser = async (userId: string) => {
    console.log("DELETE USER:", userId);
    try {
      const res = await apiAdmin.delete(`/admin/delete-user/${userId}`);

      console.log("Удален:", res.data);

      // 🔥 обновляем список пользователей
      setUsers((prev: any[]) => prev.filter((u) => u._id !== userId));
    } catch (err) {
      console.error(err);

      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Ошибка удаления");
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <main className="users">
      <div className="container">
        <h1 className="title adminList-title">Список пользователей</h1>
        <input
          type="search"
          name="search"
          id=""
          className="users_search"
          placeholder="Поиск"
        />
        <div className="users_content">
          {users.map((user) => (
            <div className="users__wrapper" key={user._id}>
              <div className="users__info">
                <h2 className="username">Имя: {user.username}</h2>
                <h2 className="surname">Фамилия: {user.surname}</h2>
                <p>
                  Роль:{" "}
                  <span className={`role ${user.role}`}>
                    {roleMap[user?.role ?? ""]}
                  </span>
                </p>

                <span>
                  Аккаунт создан:{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="admin__systems">
                <button>
                  <NavLink to={`/user-list/${user._id}`} className="btnProfile">
                    Профиль
                  </NavLink>
                </button>
                <button style={{ backgroundColor: "#f39c12" }}>
                  Заблокировать
                </button>
                <button
                  style={{ backgroundColor: "#e74c3c" }}
                  onClick={() => {
                    console.log("CLICK");
                    deleteUser(user._id);
                  }}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default usersList;
