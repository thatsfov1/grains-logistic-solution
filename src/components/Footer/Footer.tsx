import React from 'react'
import s from './Footer.module.css'
import {BsFillTelephoneFill, FaMapMarkerAlt, IoMail} from "react-icons/all";

const Footer = () => {
  return (
    <div className={s.container}>
        <div className={s.top_footer}>
            <div className={s.address}>
                <span className={s.title}>
                    Our Address
                </span>
                <p> <FaMapMarkerAlt/> Zhytomyr </p>
                <p>  <BsFillTelephoneFill/> +38(000)000 0000  </p>
                <p> <IoMail/> mail@gmail.com  </p>
            </div>
            <div className={s.contact_us}>
                    <span className={s.title}>
                        Contact us
                    </span>
                    <input />
                    <input/>
                    <input/>
                    <input/>
            </div>
        </div>
        <div className={s.bottom}>
            ⓒ Grains Logistic Group 2023
        </div>
    </div>
  )
}

export default Footer
