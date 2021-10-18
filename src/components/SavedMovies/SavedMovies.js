import React from 'react';
import '../Movies/Movies.css';
import MovieCard from '../MoviesCard/MovieCard';
import calculateMovieDuration from "../../utils/calculateMoviesDuration";

export default function MoviesCardList({
  moviesError,
  handleSaveBtnClick,
  savedMovies
    })
    {
  return (
    <>
      {moviesError !== "" ? (
        <p className={`not-found`}>{moviesError}</p>
      ) : (
      <section className={`common-container additional-option`}>
        <ul className='cards__list'>
          {savedMovies.map((savedMovie) => (
              <MovieCard
                movie={savedMovie}
                key={savedMovie.movieId}
                movieTitle={savedMovie.nameRU}
                movieDuration={calculateMovieDuration(savedMovie.duration)}
                movieTrailer={savedMovie.trailer}
                movieImage={savedMovie.image}
                handleSaveBtnClick={handleSaveBtnClick}
                savedMovies={savedMovies}
              />
            ))}
        </ul>
      </section>
      )}
    </>
  );
}
