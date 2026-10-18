
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='container mt-5 mb-3'>
      <div className='row text-center'>
        <img
          src='/media/images/homeHero.png'
          alt='Invest in stocks and financial products'
          className='mb-5'
        />

        <h1 className='mt-3'>Invest in everything</h1>

        <p>
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>

        <Link
          to="/signup"
          className='p-2 btn btn-primary fs-5 mb-5'
          style={{ width: "21%", margin: "0 auto" }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
};
