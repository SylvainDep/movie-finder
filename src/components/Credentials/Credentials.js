import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
    font-size: .9em;
    text-align: center;
    width: 100%;
    text-shadow: 1px 1px 1px #000;
    line-height: 3;
    position: absolute;
    bottom: 0;
    left: 0
`

const Credentials = (props) => {
  return (
    <Footer>
      <p>Developped by Sylvain Depardieu</p>
      <p>View Code on Github</p>
    </Footer>
  )
}

export default Credentials
