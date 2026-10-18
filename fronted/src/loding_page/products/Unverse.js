
import React from "react";
import { Link } from "react-router-dom";
export const Unverse = () => {
  return (
    <div className="container mt-5 mb-5">
      <h5 className="text-center mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech/" target="_blank" rel="noreferrer">
          Zerodha.tech
        </a>{" "}
        blog.
      </h5>

      <h4 className="text-center text-secondary mb-3">
        The Zerodha Universe
      </h4>

      <p className="text-center mb-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row text-center">
        <div className="col-md-4 col-6 p-3">
          <a href="https://www.fundhouse.co.in/" target="_blank" rel="noreferrer">
            <img src="/media/images/zerodhaFundhouse.png" style={{ width: "50%", height: "65px", objectFit: "contain" }} alt="Zerodha Fund House" />
          </a>
          <p className="text-muted small mt-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <a href="https://sensibull.com/" target="_blank" rel="noreferrer">
            <img src="/media/images/sensibull-logo.svg" style={{ width: "50%", height: "65px", objectFit: "contain" }} alt="Sensibull" />
          </a>
          <p className="text-muted small mt-3">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <a href="https://www.tijorifinance.com/" target="_blank" rel="noreferrer">
            <img src="/media/images/tijori.svg" style={{ width: "50%", height: "65px", objectFit: "contain" }} alt="Tijori" />
          </a>
          <p className="text-muted small mt-3">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <a href="https://streak.tech/" target="_blank" rel="noreferrer">
            <img src="/media/images/streakLogo.png" style={{ width: "50%", height: "65px", objectFit: "contain" }} alt="Streak" />
          </a>
          <p className="text-muted small mt-3">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <a href="https://www.smallcase.com/" target="_blank" rel="noreferrer">
            <img src="/media/images/smallcaseLogo.png" style={{ width: "50%", height: "65px", objectFit: "contain" }} alt="smallcase" />
          </a>
          <p className="text-muted small mt-3">Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <a href="https://joinditto.in/" target="_blank" rel="noreferrer">
            <img src="/media/images/dittoLogo.png" style={{ width: "40%", height: "65px", objectFit: "contain" }} alt="Ditto" />
          </a>
          <p className="text-muted small mt-3">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
      </div>

      <div className="text-center mt-3">
         <Link  to="/signup" className='p-2 btn btn-primary fs-5 mb-5' style={{width:"21%", margin:"0 auto"}}>Sign up for free</Link>
      </div>
    </div>
  );
};