import React, { ChangeEvent } from "react"

import "./Textarea.scss"

interface IInputProps {
    value: string
    setValue: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<IInputProps> = React.memo(({ setValue, value }) => {
    return (
        <div className="textarea">
            <textarea onChange={setValue} value={value} />
        </div>
    )
})

export default Textarea
