import css from 'next/css'

const constrained = {
  margin: '0 auto',
  '@media (min-width: 50em)': {
    width: '50em'
  }
}

const header = css({
  display: 'block',
  paddingTop: '4em',
  textAlign: 'center',
  ...constrained
})

const logo = css({
  marginLeft: '-2.5em'
})

const main = css({
  display: 'block',
  paddingTop: '3em',
  ...constrained
})

export default { header, logo, main }
