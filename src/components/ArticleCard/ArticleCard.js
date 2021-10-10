import removeFrom from '../../images/removeFrom.png';
import addTo from '../../images/addTo.png';
import favorite from '../../images/favorite.png';
import unfavorite from '../../images/unfavorite.png';
import './ArticleCard.css';

const ArticleCard = ({ content, description, title, image, publishedAt, url, sourceName, sourceUrl }) => {
  return (
    <article className='article-card'>
      <img src={image} alt={`visual for ${title}`} />
      <div className='article-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <img className='reading-list-icon' src={addTo} alt='' />
        <img className='favorite-icon' src={unfavorite} alt='' />
      </div>
    </article>
  )
}


export default ArticleCard;