import React from 'react'
import css from 'next/css'

const style = {
  glyph: css({
    paddingTop: '4em',
    textAlign: 'center'
  })
}

export default () =>
  <div className={style.glyph}>
    <img src="/static/glyph--grey.png" />
  </div>
