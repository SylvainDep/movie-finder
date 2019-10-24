import React from 'react'
import styled from 'styled-components'

import DataItem from './DataItem/DataItem'
import styles from './DataNumbers.module.css'

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`

const DataNumbers = (props) => {
  return (
    <DataContainer>
      {Object.keys(props).map((item, i) => {
        return (
          <div
            key={i}
            className={styles.datablock}>
            <DataItem data={props[item]}/>
          </div>
        )
      })}
    </DataContainer>
  )
}

export default DataNumbers
