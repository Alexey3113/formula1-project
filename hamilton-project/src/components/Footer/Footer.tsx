import React from 'react'

import "./Footer.scss"

import logo from "../../assets/images/pngs/logo.png"
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../assets/sprites'

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
        <div className='footer__column container'>
            <div className="footer__socials">
                <div className="footer__socials_icon"> <TwitterIcon /> </div>
                <div className="footer__socials_icon"> <InstagramIcon /> </div>
                <div className="footer__socials_icon"> <FacebookIcon /> </div>
            </div>
            <div className="footer__text">Сайт создан в поддержку и развитие популярности автогонщика - Lewis Hamltion</div>
            <div className="footer__copyright"><span>© COPYRIGHT 2022 | ВСЕ ПРАВА ЗАЩИЩЕНЫ | POWERED BY </span>FRID</div>
        </div>
    </div>
  )
}
