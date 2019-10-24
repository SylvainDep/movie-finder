import React from 'react'
import styled from 'styled-components'

import SearchOverviewItem from './SearchOverviewItem/SearchOverviewItem'

const SearchOverviewContainer = styled.div`
  position: absolute;
  width: 520px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9)
`

const SearchOverview = (props) => {
  return (

    <SearchOverviewContainer>
      {
        Object.keys(props.list).map((item, i) => {
          return (
            <SearchOverviewItem
            key={i}
              title={props.list[item].title}
              movieId={props.list[item].id}
              fetchMovie={props.fetchMovie}
              clearInput={props.clearInput}
              currentSearch={props.currentSearch} />
          )
        })
      }
    </SearchOverviewContainer>
  )
}

export default SearchOverview
