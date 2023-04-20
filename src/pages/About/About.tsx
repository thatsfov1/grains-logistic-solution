import React, {useEffect, useState} from 'react'
import s from './About.module.css'
import logo from '../../assets/transparent_logo.png'
import loading from '../../assets/loading.svg'
import { motion } from 'framer-motion'

const About = () => {

    const animation = {
        hidden:(custom:number) => ({
            x:custom,
            opacity:0
        }),
        visible: {
            x:0,
            opacity: 1,
            transition: {delay:0.2}
        }
    }

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();

        Promise.all([image.onload])
            .then(() => {
                setLoaded(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
  return (
    <>
        {loaded ? <div>
            <div className={s.title}>
                About us
            </div>
            <motion.div initial='hidden' whileInView='visible' viewport={{once:true}} className={s.about_container}>
                <motion.div custom={-100} variants={animation} className={s.logo}>
                    <img src={logo} alt='logo'/>
                </motion.div>
                <motion.section custom={100} variants={animation} className={s.about_text}>
                    <p className={s.bold_text}>Welcome to Grains Logistic Solution, we are a team of experienced
                        professionals dedicated to providing
                        our customers with reliable, efficient and cost-effective logistics solutions.</p>

                    <p className={s.normal_text}>At Grains Logistic Solution, we understand the importance of timely and
                        efficient delivery of your
                        products. We have a fleet of modern trucks that are equipped with GPS tracking systems, ensuring
                        that
                        your goods are transported safely and on time. Our team of experienced drivers are highly
                        skilled and
                        trained to handle even the most complex logistics challenges.</p>

                    <p className={s.normal_text}>We take pride in our commitment to customer satisfaction, and we work
                        closely with our clients to
                        provide customized logistics solutions that meet their specific needs. Whether you need to
                        transport
                        your product across Ukraine or Europe, we have the expertise and resources to get the job done
                        right.</p>

                    <p className={s.bold_text}>Our services include transportation, warehousing, and logistics
                        management, and we are constantly
                        innovating to stay ahead of the curve in an ever-evolving industry. We leverage the latest
                        technology
                        and logistics software to optimize our operations and deliver cost-effective solutions to our
                        clients.</p>

                    <p className={s.normal_text}>At Grains Logistic Solution, we believe in building long-lasting
                        relationships with our customers. We
                        are committed to providing unparalleled customer service and support, and we are always
                        available to
                        answer any questions or concerns you may have.</p>

                    <p className={s.bold_text}>Thank you for considering Grains Logistic Solution for your logistics
                        needs. We look forward to serving
                        you and helping your business succeed. forward to serving you and helping your business
                        succeed.</p>
                </motion.section>
            </motion.div>
        </div>: <div className={s.loading}>
            <img  alt='Loading...'  src={loading}/>
            </div>}
    </>
  )
}

export default About
