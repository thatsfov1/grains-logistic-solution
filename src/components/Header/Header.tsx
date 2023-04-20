import React from 'react'
import s from './Header.module.css'
import {BsFillTelephoneFill} from "react-icons/all";
import {Link} from "react-router-dom";

const Header = () => {
  return (
      <header className={s.header}>
          <Link to='/' className={s.logo}>Grains Logistic Solution</Link>
          <input className={s.menu_btn} type="checkbox" id="menu_btn"/>
          <label className={s.menu_icon} htmlFor="menu_btn"><span className={s.navicon}></span></label>
          <ul className={s.menu}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><a href="tel:+380661030053"><BsFillTelephoneFill/> +38 (066)103-00-53</a></li>
          </ul>
      </header>
  )
}

export default Header
