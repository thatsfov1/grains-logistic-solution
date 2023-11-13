import React from 'react'
import s from './Fleet.module.css'
import truckman from '../../assets/trucks/man.png'
import truckiveco from '../../assets/trucks/iveco.png'
import { motion } from 'framer-motion'

const Fleet = () => {

    const animation = {
        hidden:{
            y:100,
            opacity:0
        },
        visible:(custom:number) => ({
            y:0,
            opacity:1,
            transition:{delay:custom*0.1}
        })
    }
  return (
    <div className={s.container}>
      <div className={s.title_container}>
          <div className={s.title}>Fleet</div>
      </div>
        <div className={s.fleet_container}>
            <motion.div initial='hidden' whileInView='visible' viewport={{once:true}} className={s.truck_block}>
                <motion.div custom={1} variants={animation} className={s.truck_pic}>
                    <img alt='truck' src={truckman}/>
                </motion.div>
                <div className={s.truck_desc}>
                    <div className={s.truck_desc_title}>
                        Man TGX 440
                    </div>
                    <div className={s.truck_desc_text}>
                        With our trucks we are using Kogel trailers. Kogel trailers are an ideal choice for Grains Logistic Solution due to their robust construction and durability, which ensures the safe transportation of grains over long distances.
                        The high-strength materials used in Kogel trailers provide exceptional load-bearing capacity, allowing them to carry large volumes of grains without compromising structural integrity.
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Length</th>
                            <th>Width</th>
                            <th>Height</th>
                            <th>Capacity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>13.6m</td>
                            <td>2.5m</td>
                            <td>3.0m</td>
                            <td>24 000kg</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>
            <motion.div viewport={{once: true}} initial='hidden' whileInView='visible' className={s.truck_block}>
                <motion.div custom={2} variants={animation} className={s.truck_pic}>
                    <img alt='truck' src={truckiveco}/>
                </motion.div>
                <div className={s.truck_desc}>
                    <div className={s.truck_desc_title}>
                        Iveco Stralis HiWay
                    </div>
                    <div className={s.truck_desc_text}>
                       Also we have trailers from German Company "Krone". The customization options offered by Krone enable Grains Logistic Solution to tailor the trailers according to their specific requirements, ensuring optimal performance, and streamlining the logistics process for grain transportation.
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Length</th>
                                <th>Width</th>
                                <th>Height</th>
                                <th>Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13.6m</td>
                                <td>2.5m</td>
                                <td>3.0m</td>
                                <td>24 000kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Fleet
