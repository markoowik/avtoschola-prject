import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import newsIMG from "../assets/IMG/news.webp"
import ReactMarkdown from "react-markdown";

interface NewsPage {
    _id: string;
    title: string,
    description: string,
    image: string,
    createdAt: string
}

const Newses = () => {
    const { id } = useParams<{ id: string }>();
    const [news, setNews] = useState<NewsPage | null>(null);

    const API_URL = "https://avto-school-backend.onrender.com/api";

    useEffect(() => {
        if (!id) return;

        fetch(`${API_URL}/news/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Ошибка сервера: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setNews(data))
            .catch(err => {
                console.error(err);
                setNews(null);
            });
    }, [id]);

    if (!news) {
        return <p>Загрузка...</p>;
    }
    return(
        <div className="news-container">
            <div className="news-wrapper">
                <div className="news-card newses-card">
                    <div className="newses-card__image">
                        <img src={newsIMG} alt="newsIMG"/>
                    </div>

                    <div className="news-card__content ">
                        <h2 className="news-card__title">{news.title}</h2>
                        <p className="news-card__description"><ReactMarkdown components={{
                            img: ({...props }) => (
                                <figure className="news-figure">
                                    <img
                                        src={props.src}
                                        alt={props.alt}
                                        className="news-markdown-image"
                                    />
                                    {props.alt && (
                                        <figcaption>{props.alt}</figcaption>
                                    )}
                                </figure>
                            ),
                        }}>{news.description}</ReactMarkdown></p>
                    </div>

                    <span className="news-card__date date">Опубликовано: {new Date(news.createdAt).toLocaleDateString()}</span>
                </div>
            </div>

        </div>
    )
}

export default Newses;