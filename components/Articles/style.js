import css from 'next/css'

const articles = css({
  display: 'block',
  paddingTop: '2em',
  textAlign: 'center'
})

const header = css({
})

const list = css({
  listStyle: 'none'
})

const article = css({
  paddingTop: '2em'
})

const articleHeaderTitle = css({
  fontSize: '1.4em',
  fontWeight: 'bold'
})

const articleExcerpt = css({
  paddingTop: '1em'
})

const footer = css({
  paddingTop: '2em'
})

export default { articles, header, list, article, articleHeaderTitle, articleExcerpt, footer }
