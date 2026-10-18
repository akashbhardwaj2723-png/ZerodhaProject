import React from "react";
import { useState } from "react";

export const Team = () => {
  const [showBio1, setShowBio1] = useState(false);
  const [showBio2, setShowBio2] = useState(false);
  const [showBio3, setShowBio3] = useState(false);
  const [showBio4, setShowBio4] = useState(false);
  const [showBio5, setShowBio5] = useState(false);
  const [showBio6, setShowBio6] = useState(false);

  return (
    <div className="border-top container mt-5 mb-5">
      <h2 className="text-center mt-5 mb-5">People</h2>

      <div className="row mb-10">
        <div className="col-6 text-end mt-5">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ width: "55%", borderRadius: "50%", marginRight: "50px" }}
          />
          <h5 className="mt-4" style={{ marginRight: "130px" }}>
            Nithin Kamath
          </h5>
          <h6 className="mt-4" style={{ marginRight: "140px" }}>
            Founder, CEO
          </h6>
          <br />
        </div>

        <div className="col-6 mt-5">
          <p className="lh-lg text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="lh-lg text-muted">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted">Playing basketball is his zen.</p>
          <p className="text-muted">
            Connect on{" "}
            <a href="https://zerodha.com/" className="text-primary">
              HomePage
            </a>{" "}
            /{" "}
            <a href="https://tradingqna.com/" className="text-primary">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="https://x.com/" className="text-primary">
              Twitter
            </a>
          </p>
        </div>
        <br />
      </div>

      <div className="container mt-5 text-center mb-5">
        <div className="row mb-5">
          <div className="col-4">
            <img
              src="/media/images/ceo_1.jpg"
              alt="Nikhil Kamath"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <h5 className="mt-4 text-muted">Nikhil Kamath</h5>
            <p className="text-muted">Co-founder & CFO</p>
            <button
              className="btn bg-transparent border-0"
              onClick={() => setShowBio1(!showBio1)}
            >
              Bio {showBio1 ? "⌃" : "⌄"}
            </button>
            {showBio1 && (
              <div className="mt-3">
                <p className="text-start text-muted">
                  Nikhil is an astute and experienced investor, and he heads
                  financial planning at Zerodha. An avid reader, he always
                  appreciates a good game of chess.
                </p>
              </div>
            )}
          </div>

          <div className="col-4">
            <img
              src="/media/images/ceo_2.jpg"
              alt="Dr. Kailash Nadh"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <h5 className="mt-4 text-muted">Dr. Kailash Nadh</h5>
            <p className="text-muted">CTO</p>
            <button
              className="btn bg-transparent border-0"
              onClick={() => setShowBio2(!showBio2)}
            >
              Bio {showBio2 ? "⌃" : "⌄"}
            </button>
            {showBio2 && (
              <div className="mt-3">
                <p className="text-start text-muted">
                  Kailash has a PhD in Artificial Intelligence & Computational
                  Linguistics, and is the brain behind all our technology and
                  products. He has been a developer from his adolescence and
                  continues to write code every day.
                </p>
              </div>
            )}
          </div>

          <div className="col-4">
            <img
              src="/media/images/ceo_3.jpg"
              alt="Venu Madhav"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <h5 className="mt-4 text-muted">Venu Madhav</h5>
            <p className="text-muted">COO</p>
            <button
              className="btn bg-transparent border-0"
              onClick={() => setShowBio3(!showBio3)}
            >
              Bio {showBio3 ? "⌃" : "⌄"}
            </button>
            {showBio3 && (
              <div className="mt-3">
                <p className="text-start text-muted">
                  Venu is the backbone of Zerodha taking care of operations and
                  ensuring that we are compliant to rules and regulations. He
                  has over a dozen certifications in financial markets and is
                  also proficient in technical analysis. Workouts, cycling, and
                  adventuring is what he does outside of Zerodha.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <br />

      <div className="container mt-5 text-center mb-5">
        <div className="row mb-5">
          <div className="col-4">
            <img
              src="/media/images/ceo_4.jpg"
              alt="Seema Patil"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <h5 className="mt-4 text-muted">Seema Patil</h5>
            <p>Director</p>
            <button
              className="btn bg-transparent border-0"
              onClick={() => setShowBio4(!showBio4)}
            >
              Bio {showBio4 ? "⌃" : "⌄"}
            </button>
            {showBio4 && (
              <div className="mt-3">
                <p className="text-start text-muted">
                  Seema who has lead the quality team since the beginning of
                  Zerodha, is now a director. She is an extremely disciplined
                  fitness enthusiast.
                </p>
              </div>
            )}
          </div>

          <div className="col-4">
            <img
              src="/media/images/ceo_5.jpg"
              alt="Karthik Rangappa"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <h5 className="mt-4 text-muted">Karthik Rangappa</h5>
            <p className="text-muted">Chief of Education</p>
            <button
              className="btn bg-transparent border-0"
              onClick={() => setShowBio5(!showBio5)}
            >
              Bio {showBio5 ? "⌃" : "⌄"}
            </button>
            {showBio5 && (
              <div className="mt-3">
                <p className="text-start text-muted">
                  Karthik "Guru" Rangappa single handledly wrote Varsity,
                  Zerodha's massive educational program. He heads investor
                  education initiatives at Zerodha and loves stock markets,
                  classic rock, single malts, and photography.
                </p>
              </div>
            )}
          </div>

          <div className="col-4">
            <img
              src="/media/images/ceo_6.jpg"
              alt="Austin Prakesh"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <h5 className="mt-4 text-muted">Austin Prakesh</h5>
            <p className="text-muted">Director Strategy</p>
            <button
              className="btn bg-transparent border-0"
              onClick={() => setShowBio6(!showBio6)}
            >
              Bio {showBio6 ? "⌃" : "⌄"}
            </button>
            {showBio6 && (
              <div className="mt-3">
                <p className="text-start text-muted">
                  Austin is a successful self-made entrepreneur from Singapore.
                  His area of specialty revolves around helping organisations
                  including grow by optimizing revenue streams and creating
                  growth strategies. He is a boxing enthusiast and loves
                  collecting exquisite watches.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
