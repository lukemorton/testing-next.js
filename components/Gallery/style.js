import style from 'next/css'

const gallery = style({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '60em',
  margin: '0 auto',
  padding: '3em 2em 0 2em'
})

export default { gallery }
