import React from 'react'
import Item from './Item'
import style from './style'

export default ({ children }) =>
  <div className={style.gallery}>
    {children.map((child, i) => <Item key={i}>{child}</Item>)}
  </div>
