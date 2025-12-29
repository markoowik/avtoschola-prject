import {useEffect, useState} from "react";
import "./../styles/courses.css"
import Modal from "react-modal";




interface Course {
    _id: string;
    title: string;
    description: string;
    features?: string[];
    price: number;
    category: string;
}


const CourseCard = () => {

    const [courses, setCourses] = useState<Course[]>([])

    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedCourse) return;

        const text = `
            Заявка на курс:
            Имя: ${name}
            Телефон: ${phone}
            Курс: ${selectedCourse.title}
    `;

        // ✅ 1. СНАЧАЛА открыть WhatsApp
        globalThis.open(
            `https://wa.me/77089202157?text=${encodeURIComponent(text)}`,
            "_blank"
        );

        // ✅ 2. ПОТОМ отправить заявку в БД
        try {
            await fetch("http://192.168.1.120:5000/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    courseId: selectedCourse._id,
                }),
            });
        } catch (err) {
            console.error(err);
        }

        setName("");
        setPhone("");
        setSelectedCourse(null);
    };





    useEffect(() => {
        fetch("http://192.168.1.120:5000/api/courses")
            .then(res => {
                if (!res.ok) throw new Error("Ошибка сети");
                return res.json();
            })
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    }, []);
    return(
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
                    <span className="price">{course.price.toLocaleString("ru-RU")} ₸</span>
                    <button onClick={() => setSelectedCourse(course)}>Записаться</button>
                </div>
            ))}
            {selectedCourse && (
                <Modal isOpen onRequestClose={() => setSelectedCourse(null)} className="course-modals" overlayClassName="overlay" key={selectedCourse._id}>
                    <div className="course-modal">
                        <h3>Категория: {selectedCourse.title}</h3>
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
                        <form onSubmit={handleSubmit} className="application-form">
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Телефон"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />

                            <button type="submit">Отправить заявку</button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default CourseCard;
