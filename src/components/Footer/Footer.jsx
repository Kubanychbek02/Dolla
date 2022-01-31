import React from 'react';
import './footer.scss';
import Instagram from '../../video/instagram.png';
import Fasebook from '../../video/facebook.png';
import Telegram from '../../video/telegram.png';

const Footer = () => {
  return (
    <>
      <footer className="footer" id='footer'>
          <div className="footer__container">
              <div className="footer__top">
                <div className="footer__blocks">
                    <h3 className="footer__title">About Us</h3>
                    <p className="footer__descrs">How it work</p>
                    <p className="footer__descrs">Careers</p>
                    <p className="footer__descrs">Investors</p>
                    <p className="footer__descrs">Testimonials</p>
                    <p className="footer__descrs">Terms of Service</p>
                </div>
                <div className="footer__blocks">
                    <h3 className="footer__title">Contact Us</h3>
                    <p className="footer__descrs">How it work</p>
                    <p className="footer__descrs">Careers</p>
                    <p className="footer__descrs">Investors</p>
                    <p className="footer__descrs">Testimonials</p>
                    <p className="footer__descrs">Terms of Service</p>
                </div>
                <div className="footer__blocks">
                    <h3 className="footer__title">Video</h3>
                    <p className="footer__descrs">How it work</p>
                    <p className="footer__descrs">Careers</p>
                    <p className="footer__descrs">Investors</p>
                    <p className="footer__descrs">Testimonials</p>
                    <p className="footer__descrs">Terms of Service</p>
                </div>
                <div className="footer__blocks">
                    <h3 className="footer__title">Sosial Media</h3>
                    <p className="footer__descrs">How it work</p>
                    <p className="footer__descrs">Careers</p>
                    <p className="footer__descrs">Investors</p>
                    <p className="footer__descrs">Testimonials</p>
                    <p className="footer__descrs">Terms of Service</p>
                </div>
              </div>
              <div className="footer__buttom">
                <a href="#herosection" className="footer__logo">dolla</a>
                <p className="footer__rights">dolla &copy; 2022 All rights reserved.</p>
                <div className="footer__icons">
                    <a href="#herosection"><img className='footer__icon' alt='icon' src={Instagram}/></a>
                    <a href="#herosection"><img className='footer__icon' alt='icon' src={Fasebook}/></a>
                    <a href="#herosection"><img className='footer__icon' alt='icon' src={Telegram}/></a>
                </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
