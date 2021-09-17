import './MovieCard.css';
import obzlozka from '../../images/oblozka.svg';
function MovieCard() {
  return (
    <li className='card'>
       <div className='car__data'> 
        <div className='card__about'>
            <div className='card__title'>33 слова о дизайне</div>
            <div className='card__time'>1ч 47м</div>
        </div>
        <button className='card__select'></button>
       </div>
       <img src={obzlozka} alt='обложка фильма' className='card__oblozka'/>
    </li>
  );
}

export default MovieCard;
