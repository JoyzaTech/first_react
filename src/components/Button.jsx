// rafce
import { useState } from 'react'

const Button = ({count, onClick}) => {
  return (
    <button onClick={onClick}>
        Total # of Clicks {count}
    </button>
  )
}

export default Button