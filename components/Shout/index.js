import React from 'react'
import style from './style'

export default ({ background, calmly, children }) => {
  if (background) {
    return (
      <div className={style.shout({ background, calmly })}>
        <div className={style.shoutWithBackground}>
          <div className={style.background}>
            {background}
          </div>

          <div className={style.overlay}>
            {children}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={style.shout({ calmly })}>
        {children}
      </div>
    )
  }
}
