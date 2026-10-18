import React from 'react'

export const Hero = () => {
  return (
    <div className='container  mt-5 mb-5'>
      <h2 className='mt-5 p-3 text-center'> Charges</h2>
      <h5 className='text-muted text-center'>List of all charges and taxes</h5>
      <div className='row mt-5'>
        <div className='col-md-4  text-center mt-5'>
          <img src='/media/images/pricing0.svg' alt="Pricing illustration" style={{width:"70%"}}
          ></img>
          <h2 className=''>Free equity delivery</h2>
          <p className='mt-3 lh-lg text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-md-4  text-center mt-5'>
          <img src='/media/images/intradayTrades.svg' alt="Pricing illustration" style={{width:"70%"}}
          ></img>
          <h2 className=''>Intraday and F&O trades</h2>
          <p className='mt-3 lh-lg text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-md-4  text-center mt-5'>
          <img src='/media/images/pricing0.svg' alt="Pricing illustration" style={{width:"70%"}}
          ></img>
          <h2 className=''>Free direct MF</h2>
          <p className='mt-3 lh-lg text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
        
      </div>
    </div>
  )
}
