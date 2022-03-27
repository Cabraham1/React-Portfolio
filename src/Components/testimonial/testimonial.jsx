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
            <small className="client__review">We re-did our website twice in a 12 month period. There was no comparison between the first desgner and yours. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with you first time I would not have had to do it twice.!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="client__name">Joshua Owoyemi</h5>
            <small className="client__review">I went to Abraham with a basic “feel” I wanted in a website. He helped flush out the visual layout and content. Abraham services are bargain when you weigh the cost versus the product you receive. I will be using him again in future endeavors. Thanks again!!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img3} alt="" />
          </div>
          <h5 className="client__name">Musa Ahmed</h5>
            <small className="client__review">Our site is beautiful! It is easy to navigate. The support has been remarkable for WordPress; if I don’t understand something, or can’t accomplish a task, Abraham is very responsive and he will lead you in the correct way. Abraham is an extremely talented web designer.!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img4} alt="" />
          </div>
          <h5 className="client__name">Tosin Adegoki</h5>
            <small className="client__review">We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Abraham to anyone looking to build a new website.!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img5} alt="" />
          </div>
          <h5 className="client__name">Arah Barnaba</h5>
            <small className="client__review"> I appreciate your dedication to the projects that you and your team are on. Ith you and your team and you guys always made yourselves available. You did a great job for us and I would recommend you to anyone.</small>t is nice from the customers stand point to be able to get in touch wi
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img6} alt="" />
          </div>
          <h5 className="client__name">Victor Orji</h5>
            <small className="client__review">Thank you so much for the report!  I think our ad campaign is performing extremely well and our calls and emails are flooding in. I have referred a few others to you that have needed SEO work and website work generally. Our company wouldn’t be what it is without you guys. Keep up the good work!!</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonial