export const BASE_URL = 'http://localhost:3001';
 
export const register = (email, password, name) => { // ---регистрация
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json" 
      },
      body: JSON.stringify({email, password, name}),
    }).then(checkResponse)};


  export const authorize = (email, password) => { // ---авторизация
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  }).then(checkResponse)
  }

export const getContent = (token) => { /// ---получаем весь контент юзера по токену
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }).then(checkResponse)
  .then((data) => data)
}
export const patchUserData = (item) => { // ---- обновление инфы о юзере
  const token = localStorage.getItem('jwt'); 
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: item.name,
      email: item.email
  })
  }).then(checkResponse)
}
export const getMovies = () => {
  const token = localStorage.getItem('jwt'); 
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkResponse)
};
export const deleteMovie = (movieId) => {
  const token = localStorage.getItem('jwt'); 
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkResponse)
};
export const saveMovie = (data) => {
  const token = localStorage.getItem('jwt'); 
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(checkResponse)
};

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);