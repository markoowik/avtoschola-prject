import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface User {
  _id: string;
  username: string;
  surname: string;
  role: string;
  createdAt: string;
}

// const roleMap: Record<string, string> = {
//   admin: "Администратор",
//   moderator: "Модератор",
//   student: "Студент",
// };

const userProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const API_URL = "https://avto-school-backend.onrender.com/api";

  useEffect(() => {
    if (!id) return;

    fetch(`${API_URL}/auth/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка сервера: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => {
        console.error(err);
        setUser(null);
      });
  }, [id]);

  if (!user) return <p>Загрузка...</p>;
  return (
    <div className="account">
      <div className="container">
        <h1 className="title">
          Аккаунт: {user.username} {user.surname}
        </h1>

        <div className="account_wrapper">
          {/* ---------- ЛЕВАЯ ЧАСТЬ ---------- */}
          <div className="account_content">
            <h3>Информация о пользователя</h3>
            <p>Имя: {user.username}</p>
            <p>Фамилия: {user.surname}</p>
            {/* <p>
              Роль:{" "}
              <span className={`role ${user.role}`}>
                {roleMap[user?.role ?? ""]}
              </span>
            </p> */}

            <button className="linkBtn">Настройка</button>
          </div>
        </div>

        {/* ---------- ПРАВАЯ ЧАСТЬ: КУРСЫ ---------- */}
      </div>
    </div>
  );
};
export default userProfile;
