import {useState} from "react";
import {useNavigate} from "react-router-dom";



export default function AdminAuthForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const API_URL = "https://avto-school-backend.onrender.com/api";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            // if (data.admin.role !== "admin") {
            //     throw new Error("Нет доступа");
            // }

            localStorage.setItem("adminToken", data.token);
            localStorage.setItem("adminInfo", JSON.stringify(data.admin));

            navigate("/admin-panel");
        } catch (err: any) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div className="form_wrapper">
                <div className="form_content1">
                    <h1>Вход администратора</h1>
                    <div className="information1">
                        <h2>Только для админов</h2>
                        <p>Используйте email и пароль администратора</p>
                    </div>
                    <div className="information">
                        <h2>❓ Забыли пароль?</h2>
                        <p>Обратитесь к главному администратору</p>
                    </div> <p className="markoowik">@markoowik-dev</p>
                </div> <div className="form_content">
                <input placeholder="Имя администратора" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button disabled={loading}> {loading ? "Вход..." : "Войти"} </button>
            </div>
            </div>
        </form>
    );
}
