// import { set } from 'cypress/types/lodash';
import React, { useState, useEffect } from "react";

import { getNews } from "../../utils/apiCalls";
import { uniqueArticles } from "../../utils/getUniqueArticles";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import "./MainContent.css";

const MainContent = () => {
  const [allNews, setAllNews] = useState([]);

  const fetchNews = () => {
    getNews()
      .then((data) => setAllNews(uniqueArticles(data.articles)))
      .catch((error) => console.log("ERRR: ", error));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="main-container">
      <div className="main-btn-container">
        <button>Recommended for you</button>
        <button>Reading List</button>
        <button>Favorites</button>
      </div>
      <ArticleContainer allNews={allNews} />
      {console.log("allNews:  ", allNews)}
    </section>
  );
};

export default MainContent;
