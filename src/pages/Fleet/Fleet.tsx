import React from 'react'
import s from './Fleet.module.css'
import truckman from '../../assets/man.png'
import truckiveco from '../../assets/iveco.png'
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet deleniti ducimus enim exercitationem, explicabo incidunt ipsum itaque nostrum possimus provident quasi quis quos repellat sed sit totam ullam ut? Aliquid cum dolores iusto quia repellendus! Ad aut debitis deserunt et impedit, molestias nesciunt officiis quam quia quisquam sequi voluptas.
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
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet deleniti ducimus enim exercitationem, explicabo incidunt ipsum itaque nostrum possimus provident quasi quis quos repellat sed sit totam ullam ut? Aliquid cum dolores iusto quia repellendus! Ad aut debitis deserunt et impedit, molestias nesciunt officiis quam quia quisquam sequi voluptas.
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
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
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
