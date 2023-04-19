import React from 'react'
import s from './Footer.module.css'
import {BsFillTelephoneFill, FaMapMarkerAlt, IoMail} from "react-icons/all";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Footer = () => {



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
                    <Link to='/about'>About us</Link>
                    <Link to='/contact'>Contact </Link>
                    <Link to='/our-services'>Our services</Link>
                </div>
            </div>
            <div className={s.contact_us}>
                    <span className={s.title}>
                        Feel Free To Contact Us
                    </span>
                    <span className={s.contact_subtitle}>We can answer all of your questions</span>
                    <Link className={s.contact_btn} to='/contact'>
                        Contact
                    </Link>
            </div>
        </div>
        <div className={s.bottom}>
            ⓒ Grains Logistic Solution 2023 - All rights reserved
        </div>
    </div>
  )
}

export default Footer
