import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from '../Main/Main'
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from "../Profile/Profile";
import BigEror from "../404Erorr/BigErorr";

function App() {
  return (
    <div className='body'>
      <Switch>
      
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
        <Register />
        </Route>
        <Route path='/movies'>
        <Movies />
        </Route>
        <Route path='/saved-movies'>
        <SavedMovies />
        </Route>
        <Route path='/profile'>
        <Profile />
        </Route>
        <Route path='/eror'>
        <BigEror />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
