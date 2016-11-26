import style from 'next/css'

const gallery = style({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  paddingTop: '3em'
})

const item = style({
  width: '15em',
  padding: '.5em',
  '& > img': {
    maxWidth: '100%'
  }
})

export default { gallery, item }
