import React from 'react'
import s from './Footer.module.css'
import {BsFillTelephoneFill, FaMapMarkerAlt, IoMail} from "react-icons/all";
import {Link, useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()

    const contactPage = () => {
        navigate('/contact')
        window.scroll(0,0)
    }

  return (
    <div className={s.container}>
        <div className={s.contact_us}>

        </div>
        <div className={s.top_footer}>
            <div className={s.address}>
                <span className={s.title}>
                    Our Address
                </span>
                <div> <FaMapMarkerAlt/> Zhytomyr </div>
                <div>  <BsFillTelephoneFill/>
                    <div className={s.phone_numbers}>
                        <span>+38(066)103-00-53</span>
                        <span>+38(099)102-09-16</span>
                    </div>
                </div>
                <div> <IoMail/> orachynskyi@grainslogistic.com  </div>
            </div>
            <div className={s.quick_links}>
                <span className={s.title}>Quick Links</span>
                <div className={s.links_list}>
                    <Link to='/fleet'>Fleet</Link>
                    <Link to='/about'>About us</Link>
                    <Link to='/contact'>Contact </Link>
                </div>
            </div>
            <div className={s.contact_us}>
                    <span className={s.title}>
                        Feel Free To Contact Us
                    </span>
                    <span className={s.contact_subtitle}>We can answer all of your questions</span>
                    <div onClick={contactPage} className={s.contact_btn}>
                        Contact
                    </div>
            </div>
        </div>
        <div className={s.bottom}>
            ⓒ Grains Logistic Solution 2023
        </div>
    </div>
  )
}

export default Footer
