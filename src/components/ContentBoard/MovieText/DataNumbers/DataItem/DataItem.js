import React from 'react'
import styled from 'styled-components'

import styles from './DataItem.module.css'

const DataNumbers = (props) => {
  return (
    <div className={styles.data_block}>
      <p>{props.data.title}</p>
      <p className="green number">{props.data.value}</p>
    </div>
  )
}

export default DataNumbers
