import React from 'react'

export const RightSection = ({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
}) => {
  return (
    <div className='container mt-5 mb-5 text-center'>
      <div className='row'>
        <div className='col-5 mt-5 pt-10 p-5 lh-lg'>
          <h2 className='mt-5'>{productName}</h2>
          <p className='lh-lg text-muted'>{productDescription}</p>

          <button
            type="button"
            className="btn btn-link p-0 text-decoration-none"
          >
            {tryDemo} <i className="fa fa-long-arrow-right"></i>
          </button>
        </div>

        <div className='col-6'>
          <img src={imgUrl} alt={productName || "Product illustration"} />
        </div>
      </div>
    </div>
  )
}