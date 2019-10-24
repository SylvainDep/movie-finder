import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loading: true,
  backgroundUrl: '',
  posterURL: '',
  title: '',
  tagLine: '',
  overview: '',
  genres: '',
  production_companies: '',
  releaseDate: {
    title: 'Release Date',
    value: ''
  },
  runtime: {
    title: 'Running Time',
    value: ''
  },
  budget: {
    title: 'Budget',
    value: ''
  },
  voteAverage: {
    title: 'Vote Average',
    value: ''
  }
}

const fetchMovie = (state = initialState, action) => {
  const res = action.movieData.data
  const fullBgUrl = 'http://image.tmdb.org/t/p/original' + res.backdrop_path
  const fullPosterUrl = 'http://image.tmdb.org/t/p/w500' + res.poster_path
  const formattedBudget = '$' + res.budget.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  const formattedRuntime = res.runtime + ' min'
  const formattedVote = res.vote_average + '/10'

  return {
    ...state,
    loading: false,
    backgroundUrl: fullBgUrl,
    posterURL: fullPosterUrl,
    title: res.title,
    tagLine: res.tagline,
    overview: res.overview,
    genres: res.genres,
    production_companies: res.production_companies,
    releaseDate: {
      title: 'Release Date',
      value: res.release_date
    },
    runtime: {
      title: 'Running Time',
      value: formattedRuntime
    },
    budget: {
      title: 'Budget',
      value: formattedBudget
    },
    voteAverage: {
      title: 'Vote Average',
      value: formattedVote
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE: return fetchMovie(state, action)
    default: return state
  }
}
export default reducer
