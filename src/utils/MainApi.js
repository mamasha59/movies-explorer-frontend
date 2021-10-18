import { BASE_URL } from "./utils";
 
export const register = (email, password, name) => { // ---регистрация
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json" 
      },
      body: JSON.stringify({email, password, name}),
    }).then(checkResponse)
  };


  export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: "include",
      headers: {
           Accept: "application/json",
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    }).then(checkResponse);
  }

export const getContent = () => { /// ---получаем весь контент юзера по токену
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: "include",
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    }
  }).then(checkResponse)
}
export const patchUserData = (item) => { // ---- обновление инфы о юзере
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: "include",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: item.name,
      email: item.email
  })
  }).then(checkResponse)
}
export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse)
};
export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse)
};
export const saveMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse)
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "POST",
    credentials: "include",
    redirect: "follow",
  }).then(checkResponse);
};

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);