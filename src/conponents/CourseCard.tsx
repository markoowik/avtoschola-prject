import { useEffect, useState } from "react";
import "./../styles/courses.css";
import Modal from "react-modal";
import apiUser from "../api/apiUser";
import { useNavigate } from "react-router-dom";

interface Course {
    _id: string;
    title: string;
    description: string;
    features?: string[];
    price: number;
    category: string;
}
Modal.setAppElement("#root");

const CourseCard = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const navigate = useNavigate();
    const API_URL = "https://avto-school-backend.onrender.com/api";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCourse) return;

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Войдите в аккаунт");
            navigate("/login");
            return;
        }

        try {
            // ✅ 1. создаём заказ
            await apiUser.post(`${API_URL}/orders/create-order`, {
                courseId: selectedCourse._id,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // ✅ 2. WhatsApp уведомление админу
            const text = `
                Новая заявка:
                Курс: ${selectedCourse.title}
                Цена: ${selectedCourse.price} ₸
            `;

            window.open(
                `https://wa.me/77089202157?text=${encodeURIComponent(text)}`,
                "_blank"
            );

            alert("Заявка отправлена! Мы свяжемся с вами.");
            setSelectedCourse(null);
        } catch (err) {
            console.error(err);
            alert("Ошибка при отправке заявки");
        }
    };

    useEffect(() => {
        apiUser
            .get(`${API_URL}/courses`)
            .then((res) => {
                console.log("API response:", res.data); // 👈 добавь это
                setCourses(res.data || []);
            })
            .catch((err) => console.error(err));
    }, []);


    return (
        <div className="course-cards">
            {courses.map((course) => (

                <div key={course._id} className="course-card">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>

                    {course.features && (
                        <ul className="features-list">
                            {course.features.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}

                    <span className="price">
                        {course.price.toLocaleString("ru-RU")} ₸
                      </span>

                    <button onClick={() => setSelectedCourse(course)}>
                        Записаться
                    </button>
                </div>
            ))}

            {selectedCourse && (
                <Modal
                    isOpen
                    onRequestClose={() => setSelectedCourse(null)}
                    className="course-modals"
                    overlayClassName="overlay"
                >
                    <div className="course-modal">
                        <h3>{selectedCourse.title}</h3>
                        <p>{selectedCourse.description}</p>

                        {selectedCourse.features && (
                            <ul className="features-list2">
                                {selectedCourse.features.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        <b>
                            {selectedCourse.price.toLocaleString("ru-RU")} ₸
                        </b>

                        <form onSubmit={handleSubmit}>
                            <button type="submit">
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default CourseCard;
