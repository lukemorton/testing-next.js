import style from 'next/css'

const shout = ({ calmly }) => {
  if (calmly) {
    return style({
      fontSize: '1.6em',
      color: 'rgba(0, 0, 0, .5)',
      paddingTop: '1em',
      textAlign: 'center'
    })
  } else {
    return style({
      textShadow: '0px 0px 6px rgba(255, 255, 255, .7)',
      fontSize: '.8em',
      paddingTop: '2em',
      textAlign: 'center',
      '@media (min-width: 40em)': {
        fontSize: '1.1em',
      }
    })
  }
}

const shoutWithBackground = style({
  position: 'relative'
})

const background = style({
  margin: '0 auto',
  width: '100%',
  '& > img': {
    width: '100%'
  }
})

const overlay = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '35em',
  width: '100%'
})

export default { shout, shoutWithBackground, background, overlay }
