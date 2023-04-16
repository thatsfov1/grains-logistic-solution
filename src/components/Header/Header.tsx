import React from 'react'
import s from './Header.module.css'
import {BsFillTelephoneFill} from "react-icons/all";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
          Grains Logistic Solution
      </div>
        <nav className={s.nav}>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <div>
                <BsFillTelephoneFill/> +38 (050) 3294 500
            </div>
        </nav>
    </div>
  )
}

export default Header
