import React from 'react'
import s from './Header.module.css'
import {BsFillTelephoneFill} from "react-icons/all";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
          Grains Logistic Solution
      </div>
        <nav className={s.nav}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <span>
                <BsFillTelephoneFill/> +38 (050) 3294 500
            </span>
        </nav>
    </div>
  )
}

export default Header
