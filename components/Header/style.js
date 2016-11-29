import style from 'next/css'

const header = style({
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '3em',
  paddingBottom: '3em',
  textAlign: 'center',
  '@media (min-width: 55em)': {
    display: 'flex'
  }
})

const logo = style({
  display: 'block',
  marginLeft: '-.5em',
  textAlign: 'center',
  '& > img': {
    display: 'inline-block'
  }
})

const nav = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& > a': {
    // whiteSpace: 'nowrap',
    paddingLeft: '1em'
  }
})

export default { header, logo, nav }
