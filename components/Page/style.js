import style from 'next/css'

const page = ({ backgroundImageSrc }) => {
  if (backgroundImageSrc) {
    return style({
      backgroundImage: `url(${backgroundImageSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '80em',
      backgroundPosition: 'top center',
      '@media (min-width: 85em)': {
        backgroundSize: 'contain'
      }
    })
  } else {
    return style({})
  }
}


const footer = style({
  display: 'block',
  padding: '8em 0 4em',
  textAlign: 'center'
})

export default { page, footer }
