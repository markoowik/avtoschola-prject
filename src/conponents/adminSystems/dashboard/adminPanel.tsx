import "./../../../styles/adminpanel.css"
import {useEffect, useState} from "react";
import api from "../../../api"

interface Admin {
    _id: string;
    name: string;
    password: string;
    role: string;

}

const AdminPanel = () => {

    const [admin, setAdmin] = useState<Admin | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const API_URL = "https://avto-school-backend.onrender.com/api";
    const token = localStorage.getItem("token");
    useEffect(() => {


        const fetchAdminPanel = async () => {
            try{
                const res = await api.get(`${API_URL}/admin/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setAdmin(res.data)
            } catch(err: any){
                setAdmin(null);
                localStorage.removeItem("token");
                setError("Сессия истекла, войдите снова");
            }
            finally {
                setLoading(false);
            }
        }
        if (token) {
            fetchAdminPanel();
        } else {
            setLoading(false);
        }
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
                        <p>Роль:{admin?.role}</p>
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