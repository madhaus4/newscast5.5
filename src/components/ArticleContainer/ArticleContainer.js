import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleContainer.css';

const ArticleContainer = ({ allNews }) => {
  const newsArticles = allNews.map(element => {
    return <ArticleCard 
      key={element.publishedAt}
      content={element.content}
      description={element.description}
      title={element.title}
      image={element.image}
      publishedAt={element.publishedAt}
      url={element.url}
      sourceName={element.source.name}
      sourceUrl={element.source.url}
    />

  })

  return (
    <div className='article-container'>
      {newsArticles}
    </div>
  )
}


export default ArticleContainer;