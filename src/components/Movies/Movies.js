import './Movies.css';
import { useLocation, Switch, Route } from "react-router-dom";
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import HeaderAuth from '../Header/components/HeaderAuth/HeaderAuth';
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from "../../context/userContext";
import * as mainApi from "../../utils/MainApi";
import SavedMovies from '../SavedMovies/SavedMovies';

import {
  NOT_FOUND_ERR,
  FAILED_TO_FETCH_ERR,
  TABLET_VERSION,
  MOBILE_VERSION,
  SHORT_FILM_DURATION,
} from "../../utils/utils";

function Movies() {
  const currentUser = React.useContext(CurrentUserContext);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadMoreBtnVisibility, setLoadMoreBtnVisibility] = React.useState(false);
  const [moviesError, setMoviesError] = React.useState("");
  const [foundMovies, setFoundMovies] = React.useState([]); //все найденные по запросу фильмы
  const [savedMovies, setSavedMovies] = React.useState([]); // фильмы, добавленные в сохраненные
  const [isShortMovies, setIsShortMovies] = React.useState(false);
  const [numberOfCards, setNumberOfCards] = React.useState({
    //количество карточек для отрисовки
    startCards: 0,
    rowCards: 0,
    moreCards: 0,
  });
  // при загрузке страницы
  React.useEffect(() => {
    limitNumberOfCards();
    loadSavedMovies();
    loadLocalSavedMovies();
    loadSearchedMovies();
  }, []);
  
  function limitNumberOfCards() {
    const viewportWidth = window.screen.width;
    if (viewportWidth < MOBILE_VERSION) {
      setNumberOfCards({ startCards: 5, rowCards: 1, moreCards: 2 });
    } else if (viewportWidth < TABLET_VERSION) {
      setNumberOfCards({ startCards: 8, rowCards: 2, moreCards: 2 });
    } else {
      setNumberOfCards({ startCards: 12, rowCards: 3, moreCards: 3 });
    }
  }
  // кнопка Еще
  const loadMoreBtnHandler = () => {
    return setNumberOfCards({
      ...numberOfCards,
      startCards: numberOfCards.startCards + numberOfCards.moreCards,
    });
  };
  function loadMoreBtnVisible() {
    if (moviesforShow.length > numberOfCards.startCards) {
      setLoadMoreBtnVisibility(true);
    } else {
      setLoadMoreBtnVisibility(false);
    }
  }
  // поиск по ключевому слову с проверкой длины массива
  const filterMoviesByKeyword = (movies, query) => {
    const filteredMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase())
    );
    if (pathname === "/movies") {
      setFoundMovies(() => {
        localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));
        return filteredMovies;
      });
      checkArray(filteredMovies);
    } else {
      setSavedMovies(filteredMovies);
      checkArray(filteredMovies);
    }
  };

  //проверка длины массива
  function checkArray(foundMovies) {
    if (foundMovies.length === 0) {
      setMoviesError(NOT_FOUND_ERR);
    } else {
      setMoviesError("");
    }
  }
  //поиск фильмов
  const searchMovieHandler = (query) => {
    if (pathname === "/movies") {
      if (!localStorage.getItem("movies")) {
        setIsLoading(true);
        moviesApi
          .getMovies()
          .then((movies) => {
            localStorage.setItem("movies", JSON.stringify(movies));
            filterMoviesByKeyword(JSON.parse(localStorage.movies), query);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log("Ошибка: ", err);
            setMoviesError(FAILED_TO_FETCH_ERR);
          })
          .finally(() => setIsLoading(false));
        return;
      } else {
        filterMoviesByKeyword(
          localStorage.getItem("movies") ? JSON.parse(localStorage.movies) : [],
          query
        );
      }
    } else {
      filterMoviesByKeyword(
        JSON.parse(localStorage.getItem("savedMovies")),
        query
      );
    }
  };

  //загрузить сохраненные пользователем фильмы
  const loadSavedMovies = () => {
    return mainApi
      .getMovies()
      .then((res) => {
        const movies = res.filter((movie) => movie.owner === currentUser._id);
        setSavedMovies(movies);
        localStorage.setItem("savedMovies", JSON.stringify(movies));
      })
      .catch((err) => {
        console.log("Ошибка: ", err);
      });
  };
  // загрузка локально сохраненных фильмов
  const loadLocalSavedMovies = () => {
    if (localStorage.getItem("savedMovies") !== null) {
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    }
  };
  //загрузка ранее найденнных фильмов
  const loadSearchedMovies = () => {
    if (localStorage.getItem("foundMovies") !== null) {
      setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
    }
  };
  //сохранение и удаление фильмов
  const saveMovie = (data) => {
    mainApi
      .saveMovie(data)
      .then((newMovie) => {
        setSavedMovies([newMovie.data, ...savedMovies]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([newMovie.data, ...savedMovies])
        );
      })
      .catch((err) => console.log("Ошибка: ", err));
  };
  const deleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(
          (item) => item._id !== movie._id
        );
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch((err) => console.log("Ошибка: ", err));
  };
  function handleSaveBtnClick(movie) {
    if (pathname === "/movies") {
      if (!savedMovies.some((item) => item.movieId === movie.id)) {
        saveMovie({
          country: movie.country ? movie.country : "Страна не указана",
          director: movie.director ? movie.director : "Режиссёр не указан",
          duration: movie.duration,
          year: movie.year ? movie.year : "Год не указан",
          description: movie.description
            ? movie.description
            : "Описание фильма отсутствует",
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailer: movie.trailerLink ? movie.trailerLink : "https://youtube.ru",
          thumbnail: movie.image.formats.thumbnail.url
            ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
            : "Параметр не указан",
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN
            ? movie.nameEN
            : "Англоязычное название не указано",
        });
      } else {
        const movieForDelete = savedMovies.find(
          (item) => item.movieId === movie.id
        );
        deleteMovie(movieForDelete);
      }
    } else {
      const movieForDelete = savedMovies.find(
        (item) => item.movieId === movie.movieId
      );
      deleteMovie(movieForDelete);
    }
  }
  // чекбокс
  const filterShortMovies = (movies) => {
    if (isShortMovies) {
      return movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
    } else {
      return movies;
    }
  };
  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
  }
  const moviesforShow = React.useMemo(
    () => filterShortMovies(foundMovies),
    [isShortMovies, foundMovies]
  );
  const savedMoviesforShow = React.useMemo(
    () => filterShortMovies(savedMovies),
    [isShortMovies, savedMovies]
  );
  // отображение кнопки еще
  React.useEffect(() => {
    loadMoreBtnVisible();
  }, [moviesforShow, numberOfCards]);
  //отслеживание изменение ширины экрана
  window.addEventListener("resize", function () {
    setTimeout(() => {
      limitNumberOfCards();
    }, 250);
  });
  return (
    <section className='common-container additional-option'>
    <HeaderAuth/>
    
    <SearchForm
      onSubmit={searchMovieHandler}
      isShortMovies={isShortMovies}
      setIsShortMovies={handleShortMovies}
     />
  <Switch>
    <Route path="/movies">
      {isLoading ? (
        <div className='profile__loader'><Preloader /></div>
      ) : (<MoviesCardList
        movies={moviesforShow}
        initalNumberOfCards={numberOfCards.startCards}
        loadMoreBtnHandler={loadMoreBtnHandler}
        loadMoreBtnVisibility={loadMoreBtnVisibility}
        handleSaveBtnClick={handleSaveBtnClick}
        savedMovies={savedMovies}
        {...{ moviesError }}
          />
        )}
    </Route>
    <Route path="/saved-movies">
      <SavedMovies
        initalNumberOfCards={numberOfCards.startCards}
        handleSaveBtnClick={handleSaveBtnClick}
        savedMovies={savedMoviesforShow}
        {...{ moviesError }}
      />
    </Route>
  </Switch>

    <Footer />
    </section>
  );
}

export default Movies;