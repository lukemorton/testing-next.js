import React from 'react'
import style from './style'

export default ({ title, author, publishedAt }) =>
  <header className={style.header}>
    <div>{title}</div>

    <div className={style.author}>
      <em>By {author} on {publishedAt}</em>
    </div>
  </header>
