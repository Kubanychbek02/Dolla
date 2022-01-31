import React from 'react';
import './docs.scss';
import img from '../../video/doc.svg';
import $ from 'jquery';

const Docs = () => {
  return (
    $('.docs__btn').on('click', () => {
      $('.signin').addClass('signin__active');
    }),

    <>
      <section className="docs" id='signup'>
        <div className="docs__content">
            <div className="docs__left">
                <h3 className='docs__subtitle'>premium bank</h3>
                <h2 className="docs__title">Unlimited Transactions with zero fees</h2>
                <p className="docs__descr">
                    Get acces to our esclusive app that allows you to send unlimited transactions without getting
                    charged any fees
                </p>
                <button className='docs__btn'>Get Started</button>
            </div>
            <div className="docs__right">
                <img className='docs__img' src={img} alt='img' />
            </div>
          </div>
      </section>
    </>
  )
}

export default Docs
