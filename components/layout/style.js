import css from 'next/css'

const constrained = {
  margin: '0 auto',
  width: '50em'
}

const header = css({
  display: 'block',
  paddingTop: '5em',
  textAlign: 'center',
  ...constrained
})

const logo = css({
  marginLeft: '-2.5em'
})

const main = css({
  display: 'block',
  paddingTop: '5em',
  ...constrained
})

export default { header, logo, main }
