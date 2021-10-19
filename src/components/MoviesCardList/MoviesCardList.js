import React from 'react';
import './MoviesCardList.css';
import calculateMovieDuration from "../../utils/calculateMoviesDuration";
import MovieCard from '../MoviesCard/MovieCard';
import MoreButton from '../buttonMore/MoreButton';

function MoviesCardList({
  movies,
  initalNumberOfCards,
  moviesError,
  loadMoreBtnHandler,
  loadMoreBtnVisibility,
  handleSaveBtnClick,
  savedMovies,
  }) {
  return (
    <>
    {moviesError !== "" ? (
        <p className={`not-found`}>{moviesError}</p>
      ) : (
    <section className={`cards`}>
      <ul className='cards__list'>
          {movies.slice(0, initalNumberOfCards).map((movie) => (
          <MovieCard 
            movie={movie}
            key={movie.id}
            movieTitle={movie.nameRU}
            movieDuration={calculateMovieDuration(movie.duration)}
            movieTrailer={movie.trailerLink}
            movieImage={
              movie.image
                ? `https://api.nomoreparties.co${movie.image.url}`
                : "https://imgur.com/j6h8g1O"
            }
            handleSaveBtnClick={handleSaveBtnClick}
            savedMovies={savedMovies}
        />
        ))}
      </ul>
      <MoreButton
        movies={movies}
        initalNumberOfCards={initalNumberOfCards}
        isVisible={loadMoreBtnVisibility}
        onClick={loadMoreBtnHandler}
      />
    </section>
      )}
    </>
  );
}

export default MoviesCardList;
