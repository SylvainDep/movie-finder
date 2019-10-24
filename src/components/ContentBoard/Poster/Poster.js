import React from 'react'
import styled from 'styled-components'

const PosterContainer = styled.div`
  flex: 0 0 380px;
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
  }
`;

const Poster = (props) => {
  return (
    <PosterContainer>
      <img src={props.url} />
    </PosterContainer>
  )
}

export default Poster
