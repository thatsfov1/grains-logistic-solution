import React from 'react'
import s from './Footer.module.css'
import {BsFillTelephoneFill, FaMapMarkerAlt, FiAlertCircle, IoMail} from "react-icons/all";
import {useForm} from "react-hook-form";

const Footer = () => {

    const {register,formState:{ errors },handleSubmit} = useForm()

    const onSubmit = () => {}

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", {required:"Name is required"})} type='text'
                           placeholder='Name and Surname(Required)'/>
                    {errors.name && <div className={s.error}><FiAlertCircle/> {errors.name?.message}</div> }
                    <input {...register("email", {required:'Email is required',
                        pattern: {
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message:'Email is incorrect'}
                    })}
                           type='text' placeholder='Email(Required)'/>
                    {errors.email && <div className={s.error}> <FiAlertCircle/> {errors.email?.message}</div> }
                    <input {...register("phone", {
                        pattern:{
                            value:/^\+(?:[0-9] ?){6,14}[0-9]$/,
                            message:'Phone Example:+3801234567'
                        }
                    })} type='tel' placeholder='Phone'/>
                    {errors.phone && <div className={s.error}> <FiAlertCircle/> {errors.phone?.message}</div> }
                    <textarea className={s.message_input} {...register("message",{required:"Type your message"})}
                           placeholder='Message content(Required)'/>
                    {errors.message && <div className={s.error}><FiAlertCircle/> {errors.message?.message}</div> }
                    <button type='submit' > Send </button>
                </form>
            </div>
        </div>
        <div className={s.bottom}>
            ⓒ Grains Logistic Solution 2023
        </div>
    </div>
  )
}

export default Footer
