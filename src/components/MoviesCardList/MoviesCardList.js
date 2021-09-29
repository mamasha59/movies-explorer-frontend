import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
function MoviesCardList({cards}) {
  return (
    <section className='cards'>
      <ul className='cards__list'>
      {cards.map((card) => (<MovieCard key={card.id || card._id} card={card} />))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
