import './ArticleCard';

const ArticleCard = ({ content, description, title, image, publishedAt, url, sourceName, sourceUrl }) => {
  return (
    <article>
      <h3>{description}</h3>
    </article>
  )
}


export default ArticleCard;