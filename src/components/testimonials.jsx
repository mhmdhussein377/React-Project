import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import "../styles/testimonialsStyles.css"

const testimonials = () => {
  return (
    <div className="testimonials">
        <div className="container">
            <div className="outline">
                <div className="content">
                    <i><FaDatabase />Staxx</i>
                    <p className="body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod aspernatur dolores sed rerum sunt sit voluptas veritatis fuga illum.
                    </p>
                    <div className="name">
                        <p>Marie Chilvers</p>
                        <p>CEO, Staxx</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default testimonials