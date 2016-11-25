import css from 'next/css'

const articles = css({
  display: 'block',
  paddingTop: '4em',
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

const articleTitle = css({
  fontSize: '1.4em'
})

const articleExcerpt = css({
  padding: '1em 2em 0 2em',
  '@media (min-width: 40em)': {
    padding: '1em 8em 0 8em',
  },
})

export default { articles, header, list, article, articleTitle, articleExcerpt }
