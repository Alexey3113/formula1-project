import React from "react"
import { VolumeIcon } from "../../assets/sprites"

interface IProps {
    value: number,
    changeCallback: (e: any) => void
  }

export const Volume: React.FC<IProps> = ({value, changeCallback}) => {
    return (
        <div className="volume">
            <VolumeIcon />
            <input
                type="range"
                min="0"
                max="1"
                step={0.01}
                value={value}
                onChange={changeCallback}
                className="volume"
            />
        </div>
    )
}
