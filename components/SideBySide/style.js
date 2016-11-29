import style from 'next/css'

const smaller = style({
  '@media (min-width: 40em)': {
    width: '40%'
  }
})

const larger = style({
  '@media (min-width: 40em)': {
    width: '50%'
  }
})

export default { smaller, larger }
