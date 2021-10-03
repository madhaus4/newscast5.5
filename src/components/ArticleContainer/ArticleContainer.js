import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleContainer.css';

const ArticleContainer = ({ allNews }) => {
  const newsArticles = allNews.map(element => {
    return <ArticleCard key={element.publishedAt}/>

  })

  return (
    <div>
      {newsArticles}
    </div>
  )
}


export default ArticleContainer;