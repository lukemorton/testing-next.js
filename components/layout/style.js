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

const main = css({
  display: 'block',
  paddingTop: '5em',
  ...constrained
})

export default { header, main }
