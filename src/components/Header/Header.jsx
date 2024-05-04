import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import Logo from "./svg/Logo.svg"
import Phone from "./svg/phone.svg"
import Logo2 from "./svg/Logo2.svg"

function Header() {
  const [isLocation ,setIsLoation] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setIsLoation(location.pathname === "/about")
  }, [location.pathname])
  return (
    <header >
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={isLocation ? Logo2 : Logo} alt="" />
        </Link>
        <ul>
          <li><Link>Авто из Кореи</Link></li>
          <li><Link>Авто из Казахстана</Link></li>
          <li><Link>Авто из ОАЭ</Link></li>
          <li><Link>Авто из Китая</Link></li>
          <li><Link>О нас</Link></li>
          <li><Link>Контакты</Link></li>
          <li>
            <button>
              <img style={{ width: "18px", height: "18px" }} src={Phone} alt="" />
              +7 (800) 011-11-11
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
