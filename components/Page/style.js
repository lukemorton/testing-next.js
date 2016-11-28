import style from 'next/css'

const page = ({ backgroundImageSrc }) => {
  if (backgroundImageSrc) {
    return style({
      backgroundImage: `url(${backgroundImageSrc})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
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
