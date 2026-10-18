import React from "react";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(240 240 240)" }} className="pb-5">
      <div className=" container border-top  ">
        <div className="row mb-5 mt-5">
          <div className="col-3">
            <img src="media/images/logo.svg" style={{ width: "80%" }}></img>
            <p className="mt-4 text-muted">
              &copy;2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="social-links d-flex flex-wrap gap-5">
             
             
               <a href="https://x.com/" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-official"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
               <br/> 
              <div  className="d-flex gap-5">
                <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube-play"></i>
              </a>

              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-whatsapp"></i>
              </a>

              <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                <i className="fa fa-telegram"></i>
              </a>
            </div>
            <div className="">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src="/media/images/googlePlayBadge.svg"></img>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src="/media/images/appstoreBadge (1).svg"></img>
              </a>
              </div>
            </div>
          </div>
          <div className="col-2 footer-link lh-lg">
            <p>Account</p>
            <a href="">Open demat account</a>
            <br />
            <a href="">Minor demat account</a>
            <br />
            <a href="">NRI demat account</a>
            <br />
            <a href="">HUF demat account</a>
            <br />
            <a href="">Commodity</a>
            <br />
            <a href="">Dematerialisation</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">MTF</a>
            <br />
          </div>
          <div className="col-3 footer-link lh-lg">
            <p> Support</p>

            <a href="">Contact us</a>
            <br />
            <a href=""> Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href=""> Bulletin</a>
            <br />
            <a href=""> Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href=""> Downloads </a>
            <br />
          </div>
          <div className="col-2 footer-link lh-lg">
            <p>Company</p>
            <a href="">About</a>
            <br />

            <a href="">Philosophy</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Open source</a>
            <a href="">Referral program</a>
            <br />
          </div>
          <div className="col-2 footer-link lh-lg">
            <p>Quick Links</p>
            <a href="">Upcoming IPOs</a>
            <br />
            <a href="">Brokerage charges</a>
            <br />
            <a href="">Market holidays</a>
            <br />
            <a href="">Economic calendar</a>
            <br />
            <a href="">Calculators</a>
            <br />
            <a href="">Markets</a>
            <br />
            <a href="">Sectors</a>
            <br />
            <a href="">Gift Nifty</a>
            <br />
          </div>
        </div>
        <div className=" mt-5 fs-6 ">
          <h6 className="text-muted lh-lg mt-5 small text-secondary text-secondary">
            broking please write to complaints@zerodha.com, for DP related to
            dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | ICF Procedure to file a complaint
            on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR.
            Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of grievances
          </h6>
          <h6 className="text-primary mt-4 mb-4  small ">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism |
            Project Jagrook by SEBI
          </h6>
          <h6 className="text-muted lh-lg small text-secondary text-secondary">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing. Attention
            investors: 1) Stock brokers can accept securities as margins from
            clients only by way of pledge in the depository system w.e.f
            September 01, 2020. 2) Update your e-mail and phone number with your
            stock broker / depository participant and receive OTP directly from
            depository on your e-mail and/or mobile number to create pledge. 3)
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </h6>
        </div>
        <div className="row ">
          <div className="col d-flex gap-3 ms-3 text-secondary may-link">
            <a href="">NSE</a>
            <a href="">BSE</a>
            <a href="">MCX</a>
            <a href="">MSEI </a>
            <a href=""> Terms & conditions</a>
            <a href="">Policies & procedures</a>
            <a href="">Privacy policy </a>
            <a href="">Disclosure </a>
            <a href="">For investor's attention</a>
            <a href="">Investor charter </a>
            <a href="">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
