import css from 'next/css'

const article = css({
  padding: '0 2em',
  '@media (min-width: 40em)': {
    padding: '0 6em'
  },
  '& p': {
    paddingTop: '2em'
  }
})

const main = css({
  paddingTop: '2em'
})

export default { article, main }
