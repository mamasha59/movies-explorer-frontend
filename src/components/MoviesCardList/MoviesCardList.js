import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import calculateMovieDuration from "../../utils/calculateMoviesDuration";
import MoreButton from '../buttonMore/MoreButton';

function MoviesCardList({
  movies,
  initalNumberOfCards,
  loadMoreBtnHandler,
  loadMoreBtnVisibility,
  handleSaveBtnClick,
  savedMovies,
  moviesError
  }) {
  return (
    <>
    {moviesError !== "" ? (
        <p className={`movies-list__noresult`}>{moviesError}</p>
      ) : (
    <section className='cards'>
      <ul className='cards__list'>
        {movies.slice(0,initalNumberOfCards).map((movie) => (
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
        isVisible={loadMoreBtnVisibility}
        onClick={loadMoreBtnHandler}
      />
    </section>
      )}
    </>
  );
}

export default MoviesCardList;
