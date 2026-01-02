import {useEffect, useState} from "react";



interface NewsPage {
    _id: string;
    title: string,
    description: string,
    image: string,
}

const News = () => {

    const [news, setNews] = useState<NewsPage[]>([]);

    const API_URL = "https://avto-school-backend.onrender.com/api";


    useEffect(() => {
        fetch(`${API_URL}/news`)
            .then(res => {
                if (!res.ok) throw new Error("Ошибка сети");
                return res.json();
            })
            .then(data => setNews(data))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="news-container">
            <div className="container">
                <h1 className="title">Новости</h1>
                <div className="news-wrapper">
                    {news.map((newses) => (
                        <div key={newses._id}>
                            <img src={newses.image} alt={newses.title} />
                            <div>
                                <h2>{newses.title}</h2>
                                <p>{newses.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default News;