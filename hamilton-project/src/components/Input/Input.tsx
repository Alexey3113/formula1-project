import React, { ChangeEvent } from "react"

import "./Input.scss"

interface IInputProps {
    value: string
    setValue: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string,
    maxLength?: number
}

const Input: React.FC<IInputProps> = React.memo(({ setValue, type = "text", value, maxLength=256 }) => {
    return (
        <div className="input">
            <input type={type} onChange={setValue} value={value} maxLength={maxLength} />
        </div>
    )
})

export default Input
