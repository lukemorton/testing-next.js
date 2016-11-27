import style from 'next/css'

const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '2em',
  paddingBottom: '4em',
  textAlign: 'center',
  '@media (min-width: 50em)': {
    margin: '0 auto',
    width: '50em'
  }
})

const logo = style({
  display: 'block',
  marginLeft: '-.5em',
  '& > img': {
    display: 'block'
  }
})

const nav = style({
  '& > a': {
    paddingLeft: '1em'
  }
})

export default { header, logo, nav }
