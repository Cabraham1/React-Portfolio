import React from 'react'
import "./testimonial.css"
import AVATAR4 from '../../assets/avatar4.jpg'
import Img1 from '../../assets/img1.jpg'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.jpg'
import Img5 from '../../assets/img5.jpg'
import Img6 from '../../assets/img6.jpg'

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
            <img src={Img1} alt="" />
          </div>
          <h5 className="client__name">John Juliet</h5>
            <small className="client__review">We re-did our website twice in a 12 month period. There was no comparison between the first designer and yours. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with you first time I would not have had to do it twice.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Joshua Owoyemi</h5>
            <small className="client__review">I went to Abraham with a basic “feel” I wanted in a website. He helped flush out the visual layout and content. Abraham services and bargain when you weigh the cost versus the product you receive. I will be contacting you again in future endeavors. Thanks again.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img3} alt="" />
          </div>
          <h5 className="client__name">Musa Ahmed</h5>
            <small className="client__review">Our site is beautiful! It is easy to navigate. The support has been remarkable for WordPress; if I don’t understand something, or can’t accomplish a task, Abraham is very responsive and he will lead you in the correct way. He is an extremely talented web designer.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img4} alt="" />
          </div>
          <h5 className="client__name">Tosin Adegoke</h5>
            <small className="client__review">We at Kee Service were very impressed with all aspects of our new website. We would highly reccommend you to anyone looking to build a new website.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img5} alt="" />
          </div>
          <h5 className="client__name">Arah Barnabas</h5>
            <small className="client__review"> I appreciate your dedication to the projects that you and your team are on. You did a great job for us and I would recommend you to anyone. It is nice from the customers stand point.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img6} alt="" />
          </div>
          <h5 className="client__name">Victor Orji</h5>
            <small className="client__review">Thank you so much for the report!  I think our ad campaign is performing extremely well and our calls and emails are flooding in. I have referred a few others to you that have needs for SEO work and website generally. Our company wouldn’t be what it is without your support. Keep up the good work.</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonial