import React from 'react';
import './signin.scss';
import { NavLink } from 'react-router-dom';

const Signin = () => {
  return (

    <>
      <section className="signin">
        <NavLink className='signin__logo' to="/">dolla</NavLink>
          <div className="signin__block">
            <div className="signin__container">
            <h3 className="signin__title">Sign in to your account</h3>
            <form action="">
              <p className='signin__descr'>Email</p>
              <input required className='signin__email' type="email" />
              <p className='signin__descr'>Password</p>
              <input required type="password" className="signin__password" />
              <button  className="signin__btn">Continue</button>
              <p className="signin__forgot">Forgot password</p>
            </form>
            
          </div>
          </div>
      </section>
    </>
  )
};

export default Signin;
