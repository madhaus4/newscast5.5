// import { set } from 'cypress/types/lodash';
import React, { useState, useEffect } from 'react';

import { getNews } from '../../utils/apiCalls';
import './MainContent.css';

const MainContent = () => {
  const [allNews, setAllNews] = useState([])

  const fetchNews = () => {
    getNews()
      .then(data => setAllNews(data))
      .catch(error => console.log('ERRR: ', error))
  }

  useEffect(() => {
    fetchNews()
  }, [])


  return (
    <section>
    <h2>dis main content</h2>
    {console.log('allNews:  ', allNews)}
    </section>
  )
}


export default MainContent;