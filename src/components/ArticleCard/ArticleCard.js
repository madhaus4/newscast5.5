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
        <section className='info-wrapper'>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
        <section className='icon-wrapper'>
          <img className='reading-list-icon' src={addTo} alt='' />
          <img className='favorite-list-icon' src={unfavorite} alt='' />
        </section>
      </div>
    </article>
  )
}


export default ArticleCard;