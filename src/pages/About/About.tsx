import React from 'react'
import s from './About.module.css'

const About = () => {
  return (
    <div>
      <div className={s.title}>
        About us
      </div>
      <div className={s.about_container}>
          <div className={s.row}>
              <div className={s.about_main}>
                  Welcome to Grains Logistic Solution, we are a team of experienced professionals dedicated to providing
                  our customers with reliable, efficient and cost-effective logistics solutions.

              </div>
              <div className={s.about_other}>
                  <div>

                      We take pride in our commitment to customer satisfaction, and we work closely with our clients to provide customized logistics solutions that meet their specific needs. Whether you need to transport your product across Ukraine or Europe, we have the expertise and resources to get the job done right.
                  </div>
                  <div>
                      Our services include transportation, warehousing, and logistics management, and we are constantly innovating to stay ahead of the curve in an ever-evolving industry. We leverage the latest technology and logistics software to optimize our operations and deliver cost-effective solutions to our clients.

                  </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default About
