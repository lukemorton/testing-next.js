import React from 'react'
import style from './style'

export default ({ title, author, children }) =>
  <article className={style.article}>
    <header className={style.header}>
      <div>{title}</div>

      <div className={style.author}>
        <em>By {author}</em>
      </div>
    </header>

    <div className={style.main}>
      {children}
    </div>
  </article>
