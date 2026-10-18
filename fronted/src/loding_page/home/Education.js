
import React from 'react';

export const Education = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-6 mb-5'>
          <img
            src='/media/images/education.svg'
            alt='Stock market education and learning'
            style={{ width: "80%" }}
          />
        </div>

        <div className='col-6 mb-5'>
          <h2>Free and open market education</h2>

          <p className='mt-4 lh-lg'>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a
            href='https://zerodha.com/varsity/'
            target='_blank'
            rel='noreferrer'
            className='text-decoration-none'
          >
            Varsity <i className='fa fa-long-arrow-right ms-2'></i>
          </a>

          <p className='mt-5 lh-lg'>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href='https://tradingqna.com/'
            target='_blank'
            rel='noreferrer'
            className='text-decoration-none'
          >
            TradingQ&A <i className='fa fa-long-arrow-right ms-2'></i>
          </a>
        </div>
      </div>
    </div>
  );
};
