import React from 'react';
import './services.scss';
import img from '../../video/price.svg'

const Services = () => {
  return (
    <>
        <section className="services" id='services'>
          <div className="services__content">
            <div className="services__right">
                <img className='services__img' src={img} alt='img' />
            </div>
            <div className="services__left">
                <h3 className='services__subtitle'>premium bank</h3>
                <h2 className="services__title">Unlimited Transactions with zero fees</h2>
                <p className="services__descr">
                    Get acces to our esclusive app that allows you to send unlimited transactions without getting
                    charged any fees
                </p>
                <button className='services__btn'>Get Started</button>
            </div>
          </div>
        </section>
    </>
  )
}

export default Services
