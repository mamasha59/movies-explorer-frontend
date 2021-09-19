import './MovieCard.css';
import { useLocation  } from "react-router-dom";
import obzlozka from '../../images/oblozka.svg';

function MovieCard(props) {
  const { pathname } = useLocation();
  const MOVIES = '/movies';
  return (
    <li className='card'>
       <div className='car__data'> 
        <div className='card__about'>
            <div className='card__title'>33 слова о дизайне</div>
            <div className='card__time'>1ч 47м</div>
        </div>
        {pathname === MOVIES ? <button className='card__select'></button> : <button className='card__delete'></button>}
       </div>
       <img src={obzlozka} alt='обложка фильма' className='card__oblozka'/>
    </li>
  );
}

export default MovieCard;
