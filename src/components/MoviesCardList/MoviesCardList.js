import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
function MoviesCardList() {
  return (
    <section className='cards'>
      <ul className='cards__list'>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
      </ul>
    </section>
  );
}

export default MoviesCardList;
