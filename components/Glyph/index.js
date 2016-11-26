import React from 'react'
import style from './style'

const GlyphImage = ({ color }) =>
  <img src={`/static/glyph--${color || 'grey'}.png`}
       className={style.image} />

const BlockGlyph = ({ color }) =>
  <div className={style.block}>
    <GlyphImage color={color} />
  </div>

const InlineGlyph = ({ color }) =>
  <span className={style.inline}>
    <GlyphImage color={color} />
  </span>

export default ({ color, inline }) =>
  inline ? <InlineGlyph color={color} /> : <BlockGlyph color={color} />
