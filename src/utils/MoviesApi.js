import { BASE_URL_MOVIE } from "./utils";
export const getMovies = () =>{ // ---получение карточек фильмов с стороннего апи
    return fetch(`${BASE_URL_MOVIE}/beatfilm-movies`, {
        method:'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}