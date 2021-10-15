import { Route, Switch, useHistory } from "react-router-dom";
import React from "react";
import ProtectedRoute from "../protectiveRoute/ProtectedRoute";
import './App.css';
import Main from '../Main/Main'
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from '../Register/Register';
import Profile from "../Profile/Profile";
import BigEror from "../404Erorr/BigErorr";
import { CurrentUserContext }  from '../../context/userContext';
import * as auth from '../../utils/MainApi';

function App() {
  const [currentUSer, setCurrentUser] = React.useState({}); // -- Стейт, отвечающий за данные текущего пользователя
  const [loggedIn, setLoggedIn] = React.useState(false); // ---стейт состояния логина
  const history = useHistory(); // ----редирект
  const [isloading, setIsLoading] = React.useState(false); // ---состояние прелодера  

  React.useEffect(() => { // ----при обновление страницы отображает юзера без повторной авторизации
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((data) => {
          setLoggedIn(true);
          setCurrentUser(data);
          history.push('/movies');
        })
        .catch(err => console.log(err));
    }
  }, [history]);

  const handleLogin = (email, password) => { // ---авторизация
    setIsLoading(true);
    auth.authorize(email, password)
    .then((res) => {
        setCurrentUser(res.data)
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log(err))
      .finally(()=>{setIsLoading(false)})
  }
  const handleRegister = (email, password, name) => { // ---регистрация
    setIsLoading(true);
    auth.register(email, password, name)
    .then((res) => {
      history.push("/signin");
      if (res.status === 201 || res.status === 200) {
        history.push("/signin");
      }
      if (res.status === 400) {
        console.log("Такой email уже существует")
      }
      }).catch((err) => {
      console.log("Ошибка регистрации: " + err)
    }).finally(()=>{setIsLoading(false)})
    
  }
  const onSignOuttest = () => { // ---выход
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setCurrentUser({});
    history.push('/');
  }
  function handleUpdateUser(data) { // -- обовление инфы юзера
    setIsLoading(true);
    auth.patchUserData(data)
    .then((userData) => {
      setCurrentUser(userData)
    }).catch((err) => {
      console.log("Не загрузить описание профиля: " + err);
    }).finally(()=>{setIsLoading(false)})
  }
  
  return (
    <CurrentUserContext.Provider value={currentUSer}>
    <div className='body'>
      <Switch>
      
        <Route exact path='/'>
          <Main loggedIn={loggedIn}/>
        </Route>

        <ProtectedRoute 
          path='/movies' 
          loggedIn={loggedIn} 
          component={Movies}
          isloading={isloading}
        />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={loggedIn}
          component={Movies}
          isloading={isloading}
        />
        <ProtectedRoute
          path='/profile'
          loggedIn={loggedIn}
          component={Profile}
          onSignOut={onSignOuttest}
          isloading={isloading}
          handleUpdateUser={handleUpdateUser}
        />
        
        <Route path='/signin'>
          <Login 
          handleLogin={handleLogin}
          isLoading= {isloading}/>
        </Route>

        <Route path='/signup'>
          <Register
          handleRegister={handleRegister}
          isLoading= {isloading}
          />
        </Route>

        <Route path='*'>
          <BigEror />
        </Route>
      
      </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;