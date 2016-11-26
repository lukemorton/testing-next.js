import React from 'react'
import Article from './Article'
import style from './style'

export default ({ title, articles, finalLink }) =>
  <div className={style.articles}>
    <header className={style.header}>
      {title}
    </header>

    <ul className={style.list}>
      {articles.map((article, index) => <Article key={index} {...article} />)}
    </ul>

    <footer className={style.footer}>
      <p>{finalLink}</p>
    </footer>
  </div>
