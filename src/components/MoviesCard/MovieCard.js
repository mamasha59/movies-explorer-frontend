import './MovieCard.css';
import { useLocation  } from "react-router-dom";
import obzlozka from '../../images/oblozka.svg';

function MovieCard({card,movieSaved}) {

  const imgsrc = () => { // ---что бы изображения отображались добавили url сервера к относттельному путю
    if(card.image) {
        return `${movieSaved ? `${card.image}` : `https://api.nomoreparties.co${card.image.url}`}`;  
    } else {
        return null;
    }
  }
  const duration = () => { // ---- приводим время к нормальному значению
    if (card.duration > 60) {
        return (card.duration / 60 | 0) + " ч " + card.duration % 60 + " м";
    } 
    if (card.duration === 60) {
        return (card.duration / 60) + " ч";
    } else {
        return card.duration + " м";
    }
  
  }
  const { pathname } = useLocation();

  const MOVIES = '/movies';
  return (
    <li className='card'>
       <div className='car__data'> 
        <div className='card__about'>
            <div className='card__title'>{card.nameRU}</div>
            <div className='card__time'>{duration()}</div>
        </div>
        {pathname === MOVIES ? <button className='card__select'></button> : <button className='card__delete'></button>}
       </div>
       <a className='card__link-youtube' href={card.trailerLink} target='_blank' rel='noreferrer'>
          <img src={card.image ? imgsrc(): obzlozka} alt={`Постер фильма ${card.nameRU}`} className='card__oblozka'/>
       </a>      
    </li>
  );
}

export default MovieCard;
