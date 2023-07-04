import React from 'react'
import s from './Home.module.css'
import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';


const textAnimation = {
    hidden: {
        x:-100,
        opacity:0
    },
    visible: (custom:number) => ({
        x:0,
        opacity: 1,
        transition: {delay:custom*0.2}
    })
}

const achievementAnimation = {
    hidden: {
        y:100,
        opacity:0
    },
    visible: {
        y:0,
        opacity: 1,
        transition: {delay:0.1}
    }
}

const Home = () => {

    const navigate = useNavigate()
  return (
    <div className={s.container}>
        <div className={s.slider}>
            <div className={s.slider_row}>
                <motion.div  initial='hidden' whileInView='visible' viewport={{once:true}}  className={s.text_overlay}>
                    <motion.div variants={textAnimation} custom={3} className={s.text_top}>
                        Efficiency in Motion.
                    </motion.div>
                    <motion.div variants={textAnimation} custom={4} className={s.text_bottom}>"Grains Logistic Solution" is a trusted logistics partner, providing efficient and reliable solutions to businesses of all sizes.
                    </motion.div>
                </motion.div>
                <motion.span transition={{duration:0.3}} initial={{opacity:0}} animate={{opacity:1}} onClick={() => navigate('/about')}  className={s.slider_btn}>
                    Read more
                </motion.span></div>
        </div>
        <div className={s.content_container}>
            <motion.div variants={achievementAnimation} initial='hidden' whileInView='visible'
                        viewport={{amount: 0.1, once: true}} className={s.achievements}>
                <motion.div className={s.single_achievement}>
                    <div className={s.ach_number}>
                        600
                    </div>
                    <div className={s.ach_label}>
                        Happy customers
                    </div>
                </motion.div>
                <motion.div className={s.single_achievement}>
                    <div className={s.ach_number}>
                        476
                    </div>
                    <div className={s.ach_label}>
                        Projects done
                    </div>
                </motion.div>
                <motion.div className={s.single_achievement}>
                    <div className={s.ach_number}>
                        20
                    </div>
                    <div className={s.ach_label}>
                        modern trucks
                    </div>
                </motion.div>
                <motion.div className={s.single_achievement}>
                    <div className={s.ach_number}>
                        100%
                    </div>
                    <div className={s.ach_label}>
                        Reliability of delivery
                    </div>
                </motion.div>
            </motion.div>
        </div>
            <div className={s.price_container}>

            </div>
        <div className={s.content_container}>
            <div className={s.why_choose_us}>
                <div className={s.small_title}>
                    why choose us
                </div>
                <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                            className={s.big_title}>
                    Our motive to change world
                </motion.div>
                <div className={s.motive_text}>
                    The motive of our logistic company is to revolutionize the industry by creating sustainable,
                    eco-friendly logistics solutions that reduce our carbon footprint and promote a healthier planet for
                    future generations.
                </div>
                <div className={s.service}>
                    <div className={s.single_service + ' ' + s.first}>
                    <span className={s.service_number}>
                        01
                    </span>
                        <div className={s.service_name}>
                            Quality services
                        </div>
                    </div>
                    <div className={s.single_service}>
                    <span className={s.service_number}>
                        02
                    </span>
                        <div className={s.service_name}>
                            expert workers
                        </div>
                    </div>
                    <div className={s.single_service}>
                    <span className={s.service_number}>
                        03
                    </span>
                        <div className={s.service_name}>
                            Customer support
                        </div>
                    </div>
                    <div className={s.single_service}>
                    <span className={s.service_number}>
                        04
                    </span>
                        <div className={s.service_name}>
                            Free consulting
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home
