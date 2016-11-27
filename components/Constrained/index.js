import React from 'react'
import style from './style'

export default ({ children }) =>
  <div className={style.constrained}>
    {children}
  </div>
