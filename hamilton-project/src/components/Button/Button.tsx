import { AnyTxtRecord } from 'dns'
import React from 'react'

import "./Button.scss"

interface IInputProps {
    clickCallback: (e: any) => void,
    title: string
}

const Button: React.FC<IInputProps> = React.memo(({clickCallback, title}) => {
  return (
    <div className='button'>
        <button onClick={clickCallback}> {title} </button>
    </div>
  )
})

export default Button