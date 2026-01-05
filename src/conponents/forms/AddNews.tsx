import { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface NewsFormData {
    title: string;
    description: string;
    image: File | null;
}

const AddNews = () => {
    const [formState, setFormState] = useState<NewsFormData>({
        title: '',
        description: '',
        image: null
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const API_URL = "https://avto-school-backend.onrender.com/api"; // Опечатка в домене!

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
            setFormState(prev => ({ ...prev, image: null }));
            return;
        }
        setFormState(prev => ({ ...prev, image: files[0] }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        console.log('Form data before send:', formState);

        const formData = new FormData();
        formData.append('title', formState.title);
        formData.append('description', formState.description);
        if (formState.image) formData.append('image', formState.image);

        try {
            const response = await fetch(`${API_URL}/news/addnews`, {
                method: "POST",
                body: formData,
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server error response:', errorText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("News Created", data);
            navigate('/news');
        } catch (error) {
            console.error('Error uploading news:', error);
            setError('Ошибка при создании новости. Проверьте данные и попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <h1>Добавить новости</h1>
                {error && <div className="error-message">{error}</div>}
                <div className="add-news_wrapper">
                    <input
                        type="text"
                        name="title"
                        placeholder="Заголовок"
                        value={formState.title}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Описание"
                        value={formState.description}
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Загрузка...' : 'Создать новость'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddNews;
