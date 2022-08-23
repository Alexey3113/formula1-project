import React from 'react'

interface IProps {
  max: number,
  value: number,
  changeCallback: (e: any) => void
}

export const RangeSeek: React.FC<IProps> = ({max, value, changeCallback}) => {
  return (
    <div className='rangeseek'>
      <input
          type="range"
          min="0"
          max={max}
          id="range"
          step={1}
          value={value}
          onChange={changeCallback}
      />
      <label htmlFor="range" id="value"></label>
    </div>
  )
}
