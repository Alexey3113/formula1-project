import React from 'react'

import "./Header.scss"

import logo from "../../assets/images/pngs/logo.png"
import { useNavigate, useParams, useLocation  } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {

  const location = useLocation()


  return (
    <div className='header'>
        <div className='header__row container'>
            <div className="header__logo"> <img src={logo} alt="logo" /> </div>
            <nav className="header__navigation">
                <Link to={"/"} className={`header__navigation_link ${location.pathname === "/" ? `active` : ""}`}>Главная</Link>
                <Link to={"/news"} className={`header__navigation_link ${location.pathname === "/news" ? `active` : ""}`}>Новости F1</Link>
                <Link to={"/create_news"} className={`header__navigation_link ${location.pathname === "/create_news" ? `active` : ""}`}>Cоздать новость</Link>
                <Link to={"/info"} className={`header__navigation_link ${location.pathname === "/info" ? `active` : ""}`}>Биография</Link>
            </nav>
        </div>
    </div>
  )
}
