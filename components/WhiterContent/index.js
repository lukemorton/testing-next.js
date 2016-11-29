import React from 'react'
import style from './style'

export default ({ minWidth, maxWidth, children }) =>
  <div className={style.whiter({ minWidth, maxWidth })}>
    {children}
  </div>
