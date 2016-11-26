import React from 'react'
import style from './style'

export default ({ title, author }) =>
  <header className={style.header}>
    <div>{title}</div>

    <div className={style.author}>
      <em>By {author}</em>
    </div>
  </header>
