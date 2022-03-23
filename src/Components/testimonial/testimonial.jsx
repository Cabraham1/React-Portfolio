import React from 'react'
import "./testimonial.css"
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonial = () => {
  return (
    <section id='Testimonial'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonial__container" // install Swiper modules
      modules={[Pagination,]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Joshua Owoyemi</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptate repellendus pariatur quae quo odit culpa repudiandae quasi commodi animi, tempore enim asperiores quam modi eum odio ipsa, maxime alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Joshua Owoyemi</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptate repellendus pariatur quae quo odit culpa repudiandae quasi commodi animi, tempore enim asperiores quam modi eum odio ipsa, maxime alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Musa Ahmed</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptate repellendus pariatur quae quo odit culpa repudiandae quasi commodi animi, tempore enim asperiores quam modi eum odio ipsa, maxime alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Tosin Adegoki</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptate repellendus pariatur quae quo odit culpa repudiandae quasi commodi animi, tempore enim asperiores quam modi eum odio ipsa, maxime alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Arah Barnaba</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptate repellendus pariatur quae quo odit culpa repudiandae quasi commodi animi, tempore enim asperiores quam modi eum odio ipsa, maxime alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Victor Orji</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptate repellendus pariatur quae quo odit culpa repudiandae quasi commodi animi, tempore enim asperiores quam modi eum odio ipsa, maxime alias!</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonial