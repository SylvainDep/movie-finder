import axios from 'axios'

import * as actionTypes from './actionTypes'

export const fetchMovieSuccess = (movieData) => {
  console.log(movieData)
  return {
    type: actionTypes.FETCH_MOVIE,
    movieData: movieData
  }
}

export const fetchMovieData = (movieId) => {
  console.log(movieId)

  return dispatch => {
    axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=11cca63b88560cff38b22e3989781d53')
        .then(req => {
            dispatch(fetchMovieSuccess(req))
        })
  }
}
