import React from 'react'
import styled from 'styled-components'

import Poster from './Poster/Poster'
import MovieText from './MovieText/MovieText'

const Board = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.8)
`;

const ContentBoard = (props) => {
  return (
    <>
      <Board>
        <Poster
          url={props.posterURL}/>
        <MovieText
          title={props.title}
          tagLine={props.tagLine}
          overview={props.overview}
          genres={props.genres}
          production_companies={props.production_companies}
          releaseDate={props.releaseDate}
          runtime={props.runtime}
          budget={props.budget}
          voteAverage={props.voteAverage}/>
      </Board>
    </>
  )
}

export default ContentBoard
