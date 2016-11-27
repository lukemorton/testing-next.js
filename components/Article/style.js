import style from 'next/css'

const article = style({
  '& p': {
    paddingTop: '2em'
  }
})

const main = style({
  paddingTop: '2em'
})

export default { article, main }
