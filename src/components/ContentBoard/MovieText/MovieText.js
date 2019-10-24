import React from 'react'
import styled from 'styled-components'

import Introduction from './Introduction/Introduction'
import Categories from './Categories/Categories'
import DataNumbers from './DataNumbers/DataNumbers'

const TextBox = styled.div`
  padding: 10px;
`;

const MainTitle = styled.h2`
  font-size: 2em
`;

const MovieText = (props) => {
  return (
    <TextBox>
      <MainTitle>{props.title}</MainTitle>
      <Introduction
        tagLine={props.tagLine}
        overview={props.overview}/>
      <Categories
        genres={props.genres}
        production_companies={props.production_companies}/>
      <DataNumbers
        releaseDate={props.releaseDate}
        runtime={props.runtime}
        budget={props.budget}
        voteAverage={props.voteAverage}/>
    </TextBox>
  )
}

export default MovieText
