import React from 'react'

export default ({ title, author, children }) =>
  <article>
    <header>
      <div>{title}</div>
      <div>{author}</div>
    </header>

    <div>
      {children}
    </div>
  </article>
