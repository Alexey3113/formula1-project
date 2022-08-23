import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface IProps {
    children: ReactNode
}

const ProvidersAll: React.FC<IProps> = ({children}) => {
  return (
    <BrowserRouter>
        {children}
    </BrowserRouter>
  )
}

export default ProvidersAll