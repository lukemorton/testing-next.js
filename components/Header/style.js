import style from 'next/css'

const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '3em',
  paddingBottom: '4em',
  textAlign: 'center'
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
