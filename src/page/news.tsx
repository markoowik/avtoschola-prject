import { useEffect, useState } from "react";
import "../styles/news.css";
import ReactMarkdown from "react-markdown";

import newsIMG from "../assets/IMG/news.webp";
import { NavLink } from "react-router-dom";

interface NewsPage {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

const News = () => {
  const [news, setNews] = useState<NewsPage[]>([]);

  const API_URL = "https://avto-school-backend.onrender.com/api";

  useEffect(() => {
    fetch(`${API_URL}/news`)
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка сети");
        return res.json();
      })
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);

  function getPreview(text: string, length = 140) {
    return text.length > length ? text.slice(0, length) + "..." : text;
  }

  return (
    <div className="news-container">
      <div className="container">
        <h1 className="title">Новости</h1>
        <div className="news-wrapper">
          {news.map((newses) => (
            <div key={newses._id} className="news-card">
              <div className="news-card_img">
                <img src={newsIMG} alt={newses.title} />
              </div>

              <div className="news-card__content">
                <h2 className="news-card__title">{newses.title}</h2>
                <p className="news-card__desc">
                  <ReactMarkdown>
                    {getPreview(newses.description)}
                  </ReactMarkdown>
                </p>
                <span className="news-card__date">
                  Опубликовано:{" "}
                  {new Date(newses.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="more-btn">
                <NavLink to={`/news/${newses._id}`}>
                  <button>Подробнее</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default News;
