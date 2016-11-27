import css from 'next/css'

const header = css({
  display: 'block',
  paddingTop: '4em',
  paddingBottom: '1em',
  textAlign: 'center'
})

const logo = css({
  marginLeft: '-.5em'
})

const footer = css({
  display: 'block',
  padding: '8em 0 4em',
  textAlign: 'center'
})

export default { header, logo, footer }
