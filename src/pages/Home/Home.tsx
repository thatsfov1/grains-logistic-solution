import React from 'react'
import motorway from '../../assets/truck-05.jpeg'
import s from './Home.module.css'

const Home = () => {
  return (
    <div className={s.container}>

        <div className={s.image}>
            <img alt='logo' src={motorway}/>
        </div>
    </div>
  )
}

export default Home
