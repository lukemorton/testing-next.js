import style from 'next/css'

const gallery = style({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '52em',
  margin: '0 auto',
  padding: '3em 1em 0 1em'
})

export default { gallery }
