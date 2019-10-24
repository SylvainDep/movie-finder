import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Credentials from '../../components/Credentials/Credentials'
import ContentBoard from '../../components/ContentBoard/ContentBoard'
import SearchBar from '../SearchBar/SearchBar'
import * as actions  from '../../store/actions/movie'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${props => props.background}) center;
  background-size: cover;
  color: white
`;

const BackgroundMask = styled.div`
  background-image: linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%);
    height: 100%;
    width: 100%;
`;

const ContentColumn = styled.div`
  margin: auto;
  max-width: 1000px
`;

class MovieFinder extends Component {
  state = {
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

  fetchMovieData = (movieId) => {
    axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=11cca63b88560cff38b22e3989781d53')
      .then(req => {
        const res = req.data
        const fullBgUrl = 'http://image.tmdb.org/t/p/original' + res.backdrop_path
        const fullPosterUrl = 'http://image.tmdb.org/t/p/w500' + res.poster_path
        const formattedBudget = '$' + res.budget.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        const formattedRuntime = res.runtime + ' min'
        const formattedVote = res.vote_average + '/10'

        this.setState({
          ...this.state,
          loading: true,
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
        })
      })
  }

  componentDidMount() {
    console.log(this.props)
    this.props.onFetchMovie(157336) // Default Homepage Movie (Interstellar)
  }

  render() {
    let content = <p>salut</p>

    if (!this.props.loading) {
      content = (
        <BackgroundMask>
          <ContentColumn>
            <SearchBar fetchMovie={this.props.onFetchMovie} currentMovie={this.props.movieData.title}/>
            <ContentBoard
              posterURL={this.props.movieData.posterURL}
              title={this.props.movieData.title}
              tagLine={this.props.movieData.tagLine}
              overview={this.props.movieData.overview}
              genres={this.props.movieData.genres}
              production_companies={this.props.movieData.production_companies}
              releaseDate={this.props.movieData.releaseDate}
              runtime={this.props.movieData.runtime}
              budget={this.props.movieData.budget}
              voteAverage={this.props.movieData.voteAverage}/>
            <Credentials />
          </ContentColumn>
        </BackgroundMask>
      )
    }

    return (
      <Page background={this.props.movieData.backgroundUrl}>
        {content}
      </Page>
    )
  }
}

const mapStatetoProps = state => {
  console.log(state)
  return {
    movieData: state,
    loading: state.loading
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onFetchMovie: (movieId) => dispatch(actions.fetchMovieData(movieId)),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MovieFinder)
