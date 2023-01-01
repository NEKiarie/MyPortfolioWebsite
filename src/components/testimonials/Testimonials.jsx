import React from 'react'
import "./testimonials.css"
import { Data } from "./Data"

const Testimonials = () => {
  return (
    <section className='testimonial container section'>
          <h2 className="section__title">My Client Say</h2>
      <span className="section__subtitle">Testimonial</span>

      <div className='testimonial__container'>
        { Data.map(({id,Image,title, description}) => {
            return (
                <div className='testimonial__card' key={id}>
                    <img src={Image} alt ='' className='testimonial__img'/>
                    <h3 className='testimonial__name'>{title}</h3>
                    <p className='testimonial__description'>{description}</p>
                </div> 
            )
        })}
      </div>
    </section>
  )
}

export default Testimonials
