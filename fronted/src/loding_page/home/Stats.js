import React from "react";

export const Stats = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <h2 className="mb-5 fs-semibold">Trust with confidence</h2>
          <h4>Customer-first always</h4>
          <p className="mb-5 text-muted lh-base">
            That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="mb-5 text-muted lh-base">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <span className="text-primary">Our philosophies.</span>{" "}
          </p>
          <h4 className="mb-6">The Zerodha universe</h4>
          <p className="mb-5 text-muted lh-base">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p className="fw-normal mb-5 text-muted lh-base">
            With initiatives like <span className="text-primary">Nudge</span>
            and <span className="text-primary">Kill Switch</span> , we don't
            just facilitate transactions, but actively help you do better with
            your money.
          </p>
        </div>
        <div className="col-7">
          <img
            src="\media\images\ecosystem (1).png"
            style={{ width: "99%" }}
          />
          <div className="text-center mt-4">
            <a href="" className="text-decoration-none"> Explore our products   <i className="fa fa-long-arrow-right ms-7 "></i></a>
            
            <a href="" className="ms-5 text-decoration-none">Try Kite demo <i class="fa fa-long-arrow-right ms-7"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};
