import React from "react";

export const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 ">
        <h1 className="text-center fs-3 lh-5 mt-5 mb-5 font-bold">
          We pioneered the discount broking model in India.<br /> Now, we are breaking
          ground with our technology.
        </h1>
      </div>

      <div className="row mt-5 border-top p-5 fs-bold px-5">
        <div className="col-6 mt-5 text-muted">
          <p className="lh-lg fs-6 ms-5 fw-normal fs-6">
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p className="lh-lg fs-6 ms-5">
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>
          <p className="lh-lg fs-6 ms-5">
            Over 1.8+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-6 mt-5 pe-3 text-muted ms-6">
          <p className="lh-lg fs-6 m">
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>

          <p className="lh-lg fs-6">
            <a href="https://rainmatter.com/" className="text-primary">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the <br /> Indian capital markets.
          </p>

          <p className="lh-lg fs-6">
            And yet, we are always up to something new every day. Catch up on the latest updates on our{" "}
            <a href="https://zerodha.com/z-connect/" className="text-primary">Blog</a>{" "}
            or see what the media is{" "}
            <a href="https://zerodha.com/media/" className="text-primary">Saying about us</a>{" "}
            or learn more about our business and product{" "}
            <a href="https://zerodha.com/about/" className="text-primary">Philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
};