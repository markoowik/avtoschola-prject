import { useState } from "react";

import "./../../styles/auth.css"
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

type Props = {
    type: "adminsignin" | "adminsignup";
};

export default function AdminAuthForm({ type }: Props) {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const API_URL = "https://avto-school-backend.onrender.com/api";

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const existingToken = localStorage.getItem("token");
        if (existingToken) {
            toast.error("Вы уже вошли в аккаунт. Выйдите сначала.");
            setLoading(false);
            return;
        }

        try {
            const url =
                type === "adminsignup"
                    ? `${API_URL}/admin/register`
                    : `${API_URL}/admin/login`;

            const body =
                type === "adminsignup"
                    ? { username, password }
                    : { username, password };

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Ошибка");
            }

            // LOGIN
            if (type === "adminsignin") {
                localStorage.setItem("token", data.token);
                console.log("User:", data.user);
            }

            toast.success("Вы успешно вошли свой аккаунт!");
            navigate("/admin-panel");
        } catch (err: any) {
            // setError(err.message);
            toast.error(err.message);
            toast.error(`❌ Ползователь с таким email уже есть!`)
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div className="form_wrapper">
                <div className="form_content1">
                    <h1>{type === "adminsignin" ? "Вход" : "Регистрация"}</h1>

                    <div className="information1">
                        <h2>Впервые у нас?</h2>
                        <p>Используйте email, указанный при записи в автошколу.</p>
                    </div>
                    <div className="information">
                        <h2>❓ Забыли пароль?</h2>
                        <p>Обратитесь к администратору или в раздел «Связаться».</p>
                    </div>
                    <p className="markoowik">@markoowik-dev</p>
                </div>
                <div className="form_content">
                    {type === "adminsignup" && (
                        <div className="input_content">
                            <input
                                placeholder="Имя пользователя"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <input
                        placeholder="Имя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="link_contents">

                        <div className="for-got">
                            {type == "adminsignin" &&  (
                                <a href="/#">Вы забыли пароль?</a>
                            )}

                        </div>
                    </div>


                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button disabled={loading}>
                        {loading
                            ? "Загрузка..."
                            : type === "adminsignin"
                                ? "Войти"
                                : "Зарегистрироваться"}
                    </button>
                    {type == "adminsignin" && (
                        <p className="reg_cont">У вас нет аккаунт? <Link to="/adminregister" className="link_content">Зарегистрироваться</Link></p>
                    )}
                    {type == "adminsignup" && (
                        <p className="reg_cont">Вы уже зарегистрированы? <Link to="/adminlogin" className="link_content">Войти</Link></p>
                    )}
                </div>
            </div>

        </form>
    );
}
