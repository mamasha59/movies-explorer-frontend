import React from 'react';
import './MovieCard.css';
import { useLocation  } from "react-router-dom";
import { MOVIES } from "./../../utils/utils";

function MovieCard({movie, handleSaveBtnClick,savedMovies,movieDuration, movieImage,movieTrailer,movieTitle}) {

  const { pathname } = useLocation();

  const [isSaved, setIsSaved] = React.useState("");

  React.useEffect(() => {
    if (savedMovies.some((item) => item.movieId === movie.id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedMovies, movie.id]);

  function handleClick(movie) {
    handleSaveBtnClick(movie);
  }
  return (
    <li className='card' key={movie.id}>
       <div className='car__data'> 
        <div className='card__about'>
            <div className='card__title'>{movieTitle}</div>
            <div className='card__time'>{movieDuration}</div>
        </div>
        {pathname === MOVIES 
        ? <button className={`card__select ${isSaved && 'card__select_hover'}`}
        onClick={() => handleClick(movie)}></button> 
        : <button className='card__delete'
        onClick={() => handleClick(movie)}></button>
        }
       </div>
       <a className='card__link-youtube' href={movieTrailer} target='_blank' rel='noopener noreferrer'>
          <img src={movieImage} alt={`Постер фильма ${movie.nameRU}`} className='card__oblozka'/>
       </a>      
    </li>
  );
}

export default MovieCard;
