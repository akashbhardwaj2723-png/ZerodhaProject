import React from "react";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(240 240 240)" }} className="pb-5">
      <div className="container border-top">
        <div className="row mb-5 mt-5">
          <div className="col-3">
            <img src="/media/images/logo.svg" alt="Zerodha logo" style={{ width: "80%" }} />
            <p className="mt-4 text-muted">
              &copy;2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>

            <div className="social-links d-flex flex-wrap gap-5">
              <a href="https://x.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-official"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>

              <br />

              <div className="d-flex gap-5">
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fa fa-youtube-play"></i></a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a>
                <a href="https://telegram.org/" target="_blank" rel="noreferrer"><i className="fa fa-telegram"></i></a>
              </div>

              <div>
                <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                  <img src="/media/images/googlePlayBadge.svg" alt="Get it on Google Play" />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                  <img src="/media/images/appstoreBadge (1).svg" alt="Download on the App Store" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-2 footer-link lh-lg">
            <p>Account</p>
            <a href="https://zerodha.com/open-account/">Open demat account</a><br />
            <a href="https://zerodha.com/open-account/">Minor demat account</a><br />
            <a href="https://zerodha.com/open-account/">NRI demat account</a><br />
            <a href="https://zerodha.com/open-account/">HUF demat account</a><br />
            <a href="https://zerodha.com/">Commodity</a><br />
            <a href="https://zerodha.com/">Dematerialisation</a><br />
            <a href="https://zerodha.com/">Fund transfer</a><br />
            <a href="https://zerodha.com/">MTF</a><br />
          </div>

          <div className="col-3 footer-link lh-lg">
            <p>Support</p>
            <a href="https://support.zerodha.com/">Contact us</a><br />
            <a href="https://support.zerodha.com/">Support portal</a><br />
            <a href="https://support.zerodha.com/">How to file a complaint?</a><br />
            <a href="https://support.zerodha.com/">Status of your complaints</a><br />
            <a href="https://zerodha.com/">Bulletin</a><br />
            <a href="https://zerodha.com/">Circular</a><br />
            <a href="https://zerodha.com/z-connect/">Z-Connect blog</a><br />
            <a href="https://zerodha.com/">Downloads</a><br />
          </div>

          <div className="col-2 footer-link lh-lg">
            <p>Company</p>
            <a href="https://zerodha.com/about/">About</a><br />
            <a href="https://zerodha.com/about/">Philosophy</a><br />
            <a href="https://zerodha.com/">Press &amp; media</a><br />
            <a href="https://zerodha.com/careers/">Careers</a><br />
            <a href="https://zerodha.com/">Zerodha Cares (CSR)</a><br />
            <a href="https://zerodha.tech/">Zerodha.tech</a><br />
            <a href="https://github.com/zerodha">Open source</a><br />
            <a href="https://zerodha.com/">Referral program</a><br />
          </div>

          <div className="col-2 footer-link lh-lg">
            <p>Quick Links</p>
            <a href="https://zerodha.com/">Upcoming IPOs</a><br />
            <a href="https://zerodha.com/charges/">Brokerage charges</a><br />
            <a href="https://zerodha.com/">Market holidays</a><br />
            <a href="https://zerodha.com/">Economic calendar</a><br />
            <a href="https://zerodha.com/tools/">Calculators</a><br />
            <a href="https://zerodha.com/">Markets</a><br />
            <a href="https://zerodha.com/">Sectors</a><br />
            <a href="https://zerodha.com/">Gift Nifty</a><br />
          </div>
        </div>

        <div className="mt-5 fs-6">
          <h6 className="text-muted lh-lg mt-5 small text-secondary">
            broking please write to complaints@zerodha.com, for DP related to
            dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | ICF Procedure to file a complaint
            on SEBI SCORES/SMARTODR: Register on SCORES portal &amp; SMARTODR.
            Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of grievances
          </h6>

          <h6 className="text-primary mt-4 mb-4 small">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism |
            Project Jagrook by SEBI
          </h6>

          <h6 className="text-muted lh-lg small text-secondary">
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

        <div className="row">
          <div className="col d-flex gap-3 ms-3 text-secondary may-link">
            <a href="https://www.nseindia.com/">NSE</a>
            <a href="https://www.bseindia.com/">BSE</a>
            <a href="https://www.mcxindia.com/">MCX</a>
            <a href="https://www.msei.in/">MSEI</a>
            <a href="https://zerodha.com/">Terms &amp; conditions</a>
            <a href="https://zerodha.com/">Policies &amp; procedures</a>
            <a href="https://zerodha.com/">Privacy policy</a>
            <a href="https://zerodha.com/">Disclosure</a>
            <a href="https://zerodha.com/">For investor's attention</a>
            <a href="https://zerodha.com/">Investor charter</a>
            <a href="https://zerodha.com/">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};