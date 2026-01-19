import "./../../../styles/adminpanel.css"
import {useEffect, useState} from "react";
import apiAdmin from "../../../api/apiAdmin.tsx";

interface Admin {
    _id: string;
    name: string;
    role: string;

}
const roleMap: Record<string, string> = {
    admin: "Администратор",
    moderator: "Модератор",
};

const AdminPanel = () => {

    const [admin, setAdmin] = useState<Admin | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);



    const API_URL = "https://avto-school-backend.onrender.com/api";

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (!token) {
            setLoading(false);
            return;
        }

        const adminInfo = localStorage.getItem("adminInfo");
        if (adminInfo) setAdmin(JSON.parse(adminInfo));

        (async () => {
            try {
                const res = await apiAdmin.get(`${API_URL}/admin/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAdmin(res.data);
                localStorage.setItem("adminInfo", JSON.stringify(res.data));
            } catch (err: any) {
                setAdmin(null);
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminInfo");
                setError("Сессия истекла, войдите снова");
                console.error(err)
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading)
        return (
            <main className="profile-page">
                <div className="toast toast-loading"><span>⏳</span> Загрузка профиля...</div>
                {error}
            </main>
        );

    return (
        <div className="admin-panel">
            <div className="container">
                <h1 className="title">Админ-панель</h1>
                <div className="admin-panel_wrapper">
                    <div className="admin-panel_content">
                        <p>Имя:{admin?.name}</p>
                        <p>Роль:{roleMap[admin?.role ?? ""]}</p>
                        <div className="buttons">
                            <button>Список пользователи</button>
                            <button>Список администрации</button>
                        </div>
                    </div>
                    <div className="pravila">
                        <h1>Правила</h1>
                        <p>Администрация имеет право: - по своему усмотрению и необходимости создавать, изменять, отменять правила - ограничивать доступ к любой информации на сайте - создавать, изменять, удалять информацию - удалять учетные записи.</p>
                        <p className="respect">С уважениям GUW</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;