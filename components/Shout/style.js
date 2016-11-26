import css from 'next/css'

const shout = css({
  fontSize: '.8em',
  padding: '0 2em',
  textAlign: 'center',
  '@media (min-width: 40em)': {
    fontSize: '1em',
    padding: '0 6em',
  }
})

export default { shout }
