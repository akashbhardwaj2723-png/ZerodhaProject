import React from 'react'

export const Education = () => {
  return (
    <div className='container'>
  
       <div className='row mt-5 '>
        <div className='col-6 mb-5'>
          <img src='/media/images/education.svg' style={{width:"80%"}}></img>
        </div>
        <div className='col-6 mb-5 '>
        <h2 className=''>Free and open market education</h2>
        <p className='mt-4 lh-lg'>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
        </p>
            <a href="" className=" text-decoration-none">Varsity <i class="fa fa-long-arrow-right ms-7"></i></a>

        <p className='mt-5 lh-lg'>
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
        </p>
          <a href="" className=" text-decoration-none">TradingQ&A <i class="fa fa-long-arrow-right ms-7"></i></a>
        </div>
       </div>
      </div>
  )
}
