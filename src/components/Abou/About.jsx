import React from 'react';
import './about.scss';
import img from '../../video/car.svg'

const About = () => {
  return (
    <>
      <section className="about" id='about'>
          <div className="about__content">
            <div className="about__left">
                <h3 className='about__subtitle'>premium bank</h3>
                <h2 className="about__title">Unlimited Transactions with zero fees</h2>
                <p className="about__descr">
                    Get acces to our esclusive app that allows you to send unlimited transactions without getting
                    charged any fees
                </p>
                <button className='about__btn'>Get Started</button>
            </div>
            <div className="about__right">
                <img className='about__img' src={img} alt='img' />
            </div>
          </div>
      </section>
    </>
  )
};

export default About;
