import React from 'react'
import styled from 'styled-components'

import styles from './Introduction.module.css'

const IntroBlock = styled.div`
  margin-bottom: 30px
`

const Introduction = (props) => {
  const titleClassName = 'green ' + styles.title

  return (
    <IntroBlock>
      <h3 className={titleClassName}>{props.tagLine}</h3>
      <p>{props.overview}</p>
    </IntroBlock>
  )
}

export default Introduction
