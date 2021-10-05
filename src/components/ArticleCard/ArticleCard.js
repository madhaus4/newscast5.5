import './ArticleCard.css';

const ArticleCard = ({ content, description, title, image, publishedAt, url, sourceName, sourceUrl }) => {
  return (
    <article className='article-card'>
      <img src={image} alt={`visual for ${title}`} />
      <div className='article-info'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}


export default ArticleCard;