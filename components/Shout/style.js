import css from 'next/css'

const shout = css({
  fontSize: '.8em',
  paddingTop: '3em',
  textAlign: 'center',
  '@media (min-width: 40em)': {
    fontSize: '1em',
  }
})

export default { shout }
