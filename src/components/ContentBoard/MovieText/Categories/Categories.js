import React from 'react'
import styled from 'styled-components'

import styles from './Categories.module.css';

const Categories = (props) => {
  return (
    <div className={styles.wrapper}>
      <h3>
        {props.genres && props.genres.map((item, i, arr) => {
          if (arr.length - 1 === i) {
            return <span className="green" key={i}>{item.name}</span>
          } else {
            return <span className="green" key={i}>{item.name}, </span>
          }
        })}
      </h3>
      <span>
        {props.production_companies && props.production_companies.map((item, i, arr) => {
          if (arr.length - 1 === i) {
            return <span key={i}>{item.name}</span>
          } else {
            return <span key={i}>{item.name}, </span>
          }
        })}
      </span>
    </div>
  )
}

export default Categories
