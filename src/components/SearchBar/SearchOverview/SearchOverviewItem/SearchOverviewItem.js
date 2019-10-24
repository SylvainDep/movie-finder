import React from 'react'
import styled from 'styled-components'

const SearchItem = styled.div`
  text-align: left
  padding: 10px 0 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #00FC87;
    color: black;
  }
`

const SearchOverviewItem = (props) => {
  return (
    <SearchItem
      onClick={(event) => {props.fetchMovie(props.movieId); props.clearInput()}}>
      {props.title}
    </SearchItem>
  )
}

export default SearchOverviewItem
