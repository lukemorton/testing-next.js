import style from 'next/css'

const constrained = style({
  margin: '0 auto',
  padding: '0 2em',
  '@media (min-width: 50em)': {
    width: '50em',
    padding: '0 6em'
  }
})

export default { constrained }
