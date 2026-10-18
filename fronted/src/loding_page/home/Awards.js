import React from 'react'

export const Awards = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='/media/images/largestBroker.png' style={{width:"99%" ,height:"98%"}}/>
        </div>
        
        <div className='col-6 p-5  '>
          <h2 className='mt-6 mb-6'>Largest stock brokes in India</h2>
          <p>
            That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>
          <div className='row mt-5'>
               <div className='col-6'>
                   <ul>
            <li>
              <p> Futures and Options</p>
            </li>
            <li>
              <p>
                Commodity and Derivatives
              </p>
            </li>
            <li>
              <p>Currenct Derivatives</p>
            </li>
          </ul>
               </div>
               <div className='col-6'>
                 <ul>
            <li>
              <p> Stock & IPOs</p>
            </li>
            <li>
              <p>
                Direct muted funds
              </p>
            </li>
            <li>
              <p>Bonds and Govt. Securities</p>
            </li>
          </ul>
               </div>
          </div>
            
          <img src='/media/images/pressLogos.png' style={{width:"98%" ,height:"8%"}}></img>

        </div>
      </div>

    </div>
  )
}
