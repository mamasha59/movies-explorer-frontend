import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import HeaderAuth from '../Header/components/HeaderAuth/HeaderAuth'
import Footer from "../Footer/Footer";
function Movies() {
  return (
    <>
    <section className='common-container additional-option'>
    <HeaderAuth/>
    <SearchForm/>
    <MoviesCardList/>
    
    <button className="cards__more">Ещё</button>
    <Footer />
    </section>
    </> 
  );
}

export default Movies;
