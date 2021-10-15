import '../Movies/Movies.css';
import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import calculateMovieDuration from "../../utils/calculateMoviesDuration";

function Movies({ handleSaveBtnClick, savedMovies, moviesError}){
  //console.log(moviesError)
  return (
    <>
      {moviesError !== "" ? (
        <p className={`savedmovies-list__noresult`}>{moviesError}</p>
      ) : (
      <section className='common-container additional-option'>
          {savedMovies.map((savedMovie) => (
              <MoviesCardList
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
      </section>
      )}
    </>
  );
}

export default Movies;
