import React, {FormEvent, useRef} from 'react'
import s from './Contact.module.css'
import {FiAlertCircle} from "react-icons/all";
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import {createLogger} from "vite";

const Contact = () => {

    const {register,formState:{ errors },handleSubmit} = useForm()
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        emailjs.sendForm('service_49sw6hn',
            'template_mm63bex',
            form.current,
            'zZCNCQObFfMVNCjw1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
    <div className={s.container}>
      <p className={s.title}>Contact</p>
        <div className={s.contact_container}>
            <div className={s.contact_block}>
                <div className={s.form_title}>
                    Get in touch
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input {...register("user_name", {required:"Name is required"})} type='text'
                           placeholder='Name and Surname(Required)' name='user_name'/>
                    {errors.user_name && <div className={s.error}><FiAlertCircle/> {errors.user_name?.message}</div> }
                    <input {...register("user_email", {required:'Email is required',
                        pattern: {
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:'Email is incorrect'}
                    })}
                           type='text' placeholder='Email(Required)' name='user_email' />
                    {errors.user_email && <div className={s.error}> <FiAlertCircle/> {errors.user_email?.message}</div> }
                    <input {...register("phone", {
                        pattern:{
                            value:/^\+(?:[0-9] ?){6,14}[0-9]$/,
                            message:'Phone Example:+380xxxxxxx'
                        }
                    })} type='tel' placeholder='Phone' name='phone'/>
                    {errors.phone && <div className={s.error}> <FiAlertCircle/> {errors.phone?.message}</div> }
                    <textarea className={s.message_input} {...register("message",{required:"Type your message"})}
                              placeholder='Message content(Required)' name='message'/>
                    {errors.message && <div className={s.error}><FiAlertCircle/> {errors.message?.message}</div>  }
                    <button type='submit' > Send </button>
                </form>
            </div>
            <div className={s.company_info}>
                <span className={s.company_info_title}>
                    PE "Grains Logistic Solution"
                </span>
                <ul className={s.info}>
                    <li>Ukraine, 12432 Skomorokhy, Naberezhna st. 102</li>
                    <li>Taxpayer identification number(IPN):439412006083</li>
                </ul>
                <div className={s.payment}>
                    <span>BANK: Raiffeisen Bank International, Zhytomyr city</span>
                    <span>IBAN:UA23 3808 0500 0000 0026 0058 1438 5</span>
                    <span>CURRENCY: EUR</span>
                    <a href='https://docs.google.com/document/d/19rLguciOblZxcKGqR8Bm6-kcWa52Uhl_/edit?usp=share_link&ouid=106016922288049645004&rtpof=true&sd=true'>
                        MORE INFO
                    </a>
                </div>
                <div className={s.mapouter}>
                    <div className={s.gmap_canvas}>
                        <iframe width="770" height="510" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=скоморохи житомирска&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
