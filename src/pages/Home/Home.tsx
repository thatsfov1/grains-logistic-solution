import React from 'react'
import s from './Home.module.css'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className={s.container}>
        <div className={s.slider}>
            <div className={s.slider_row}>
                <div className={s.text_overlay}>
                    <div className={s.text_top}>Top Logistic Company</div>
                    <div className={s.text_bottom}>It's true!!! Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, repudiandae?
                    </div>
                </div>
                <Link to='/about' className={s.slider_btn}>
                    Read more
                </Link></div>
        </div>
      <div className={s.achievements}>
          <div className={s.single_achievement}>
              <div className={s.ach_number}>
                  1999
              </div>
              <div className={s.ach_label}>
                Happy customers
              </div>
          </div>
          <div className={s.single_achievement}>
              <div className={s.ach_number}>
                  1721
              </div>
              <div className={s.ach_label}>
                Projects done
              </div>
          </div><div className={s.single_achievement}>
              <div className={s.ach_number}>
                  93
              </div>
              <div className={s.ach_label}>
                  awards win
              </div>
          </div><div className={s.single_achievement}>
              <div className={s.ach_number}>
                  1800
              </div>
              <div className={s.ach_label}>
                Expert workers
              </div>
          </div>
      </div>
      <div className={s.our_services}>
            <div className={s.services__title}>
                <div className={s.services__title_top}>
                    Our services
                </div>
                <div className={s.services__title_bottom}>
                    Best Services From us
                </div>
            </div>
      </div>
      <div className={s.why_choose_us}>

      </div>

    </div>
  )
}

export default Home
