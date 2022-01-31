import React from 'react';
import './discover.scss';
import Car from '../../video/car.svg';
import Doc from '../../video/doc.svg';
import Ser from '../../video/ser.svg';

const Discover = () => {
  return (
    <>
      <section className="discover" id='discover'>
          <h2 className="discover__title">Our Services</h2>
          <div className="discover__content">
            <div className="discover__block">
                <div className="discover__block-content">
                <img className='discover__block-img' alt='img' src={Car} />
                <h3 className="discover__block-title">Reduse Expenses</h3>
                <p className="discover__block-descr">
                    We help reduce your fees and increase your overall revenue.
                </p>
                </div>
            </div>
            <div className="discover__block">
                <div className="discover__block-content">
                <img className='discover__block-img' alt='img' src={Doc} />
                <h3 className="discover__block-title">Reduse Expenses</h3>
                <p className="discover__block-descr">
                    We help reduce your fees and increase your overall revenue.
                </p>
                </div>
            </div>
            <div className="discover__block">
                <div className="discover__block-content">
                <img className='discover__block-img' alt='img' src={Ser} />
                <h3 className="discover__block-title">Reduse Expenses</h3>
                <p className="discover__block-descr">
                    We help reduce your fees and increase your overall revenue.
                </p>
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Discover
