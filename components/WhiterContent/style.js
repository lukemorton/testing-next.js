import style from 'next/css'

const whiter = ({ minWidth, maxWidth } = {}) =>
  style(withMediaQuery({ minWidth, maxWidth }) || withoutMediaQuery())

const withoutMediaQuery = () => {
  return {
    color: 'white',
    textShadow: '1px 1px 0px #8bb77f',
    '& > *': {
      color: 'white'
    }
  }
}

const withMediaQuery = ({ minWidth, maxWidth }) => {
  const mq = mediaQuery({ minWidth, maxWidth })

  if (mq) {
    return { [mq]: withoutMediaQuery() }
  }
}

const mediaQuery = ({ minWidth, maxWidth }) => {
  if (minWidth) {
    return `@media (min-width: ${minWidth})`
  } else if (maxWidth) {
    return `@media (max-width: ${maxWidth})`
  }
}

export default { whiter }
