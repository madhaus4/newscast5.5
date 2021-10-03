import './ArticleCard.css';

const ArticleCard = ({ content, description, title, image, publishedAt, url, sourceName, sourceUrl }) => {
  return (
    <article className='article-card'>
      <img src={image} alt={`visual for ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}


export default ArticleCard;