import React, {FormEvent, useRef} from 'react'
import s from './Contact.module.css'
import {FiAlertCircle} from "react-icons/all";
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import {createLogger} from "vite";
import { motion } from 'framer-motion';

const Contact = () => {

    const {register,formState:{ errors },handleSubmit, reset} = useForm()
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (data: any) => {
    if (form.current) {
        emailjs
        .sendForm('service_49sw6hn', 'template_mm63bex', form.current, 'zZCNCQObFfMVNCjw1')
        .then(
            (result) => {
            console.log(result.text);
            reset();
            },
            (error) => {
            console.log(error.text);
            }
        );
    } else {
        console.error('Form reference is null');
    }
    };



  return (
    <div className={s.container}>
      <div className={s.title_container}>
          <div className={s.title}>Contact</div>
      </div>
        <div className={s.contact_container}>
            <div className={s.contact_block}>
                <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}}  className={s.form_title}>
                    Get in touch
                </motion.div>
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <input {...register("user_name", {required:"Name is required"})} type='text'
                           placeholder='Name and Surname(Required)' name='user_name'/>
                    {errors.user_name && <div className={s.error}><FiAlertCircle/> <>{errors.user_name?.message}</></div> }
                    <input {...register("user_email", {required:'Email is required',
                        pattern: {
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:'Email is incorrect'}
                    })}
                           type='text' placeholder='Email(Required)' name='user_email' />
                    {errors.user_email && <div className={s.error}> <FiAlertCircle/> <>{errors.user_email?.message}</></div> }
                    <input {...register("phone", {
                        pattern:{
                            value:/^\+(?:[0-9] ?){6,14}[0-9]$/,
                            message:'Phone Example:+380xxxxxxx'
                        }
                    })} type='tel' placeholder='Phone' name='phone'/>
                    {errors.phone && <div className={s.error}> <FiAlertCircle/> <>{errors.phone?.message}</></div> }
                    <textarea className={s.message_input} {...register("message",{required:"Type your message"})}
                              placeholder='Message content(Required)' name='message'/>
                    {errors.message && <div className={s.error}> <FiAlertCircle/> <>{errors.message?.message}</></div>  }
                    <button type='submit' > Send </button>
                </form>
            </div>
            <div className={s.company_info}>
                <motion.span initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} className={s.company_info_title}>
                    PE "Grains Logistic Solution"
                </motion.span>
                <motion.ul initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:0.4}} className={s.info}>
                    <li>Ukraine, 12432 Skomorokhy, Naberezhna st. 102</li>
                    <li>Taxpayer identification number(IPN):439412006083</li>
                </motion.ul>
                <motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:0.5}} className={s.payment}>
                    <span>BANK: Raiffeisen Bank International, Zhytomyr city</span>
                    <span>IBAN:UA23 3808 0500 0000 0026 0058 1438 5</span>
                    <span>CURRENCY: EUR</span>
                    <a target='_blank' href='https://docs.google.com/document/d/19rLguciOblZxcKGqR8Bm6-kcWa52Uhl_/edit?usp=share_link&ouid=106016922288049645004&rtpof=true&sd=true'>
                        MORE INFO
                    </a>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className={s.mapouter}>
                    <div className={s.gmap_canvas}>
                        <iframe className={s.map} src="https://snazzymaps.com/embed/485881" width="500px" height="300px" style={{border:"none"}}></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Contact
