import React from 'react'
import { Link } from 'react-router-dom'
export const OpenAccount = () => {
  return (
     <div className='container mt-5 mb-5'>
      <div className='row text-center'>
      
          <h1 className='mt-4 '>Open a Zerodha account</h1>
          <p className='mt-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.

             </p>
           <Link  to="/signup" className='p-2 btn btn-primary fs-5 mb-5' style={{width:"21%", margin:"0 auto"}}>Sign up for free</Link>
      </div>

    </div>
  )
}
