import React from 'react'
import style from './style'

const Smaller = ({ children }) =>
  <div className={style.smaller}>
    {children}
  </div>

const Larger = ({ children }) =>
  <div className={style.larger}>
    {children}
  </div>

export default ({ smaller, larger, children }) => {
  if (smaller) {
    return <Smaller>{children}</Smaller>
  } else if (larger) {
    return <Larger>{children}</Larger>
  }
}
