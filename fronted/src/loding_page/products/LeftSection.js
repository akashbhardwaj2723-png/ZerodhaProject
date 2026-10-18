import React from "react";

export const LeftSection = ({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlrPlay,
  appStore,
  icon,
}) => {
  return (
    <div className="container border-top mt-5 text-center">
      <div className="row mt-5">
        <div className="col-7 p-3 ">
          <img src={imgUrl}></img>
        </div>
        <div className="col-5 mt-3 mb-5 ps-5 pe-5">
          <h3 className="mt-5">{productName}</h3>
          <p className="lh-lg text-muted">{productDescription}</p>

          <div className="mt-5 d-flex gap-5 ">
            {tryDemo && (
              <a href={tryDemo.url} className="text-decoration-none  ">
                {tryDemo.text}
                <i className="fa fa-long-arrow-right ms-3 "></i>
              </a>
            )}

            {learnMore && (
              <a href={learnMore.url} className="text-decoration-none ms-4">
                {learnMore.text}
                <i className="fa fa-long-arrow-right ms-3"></i>
              </a>
            )}
          </div>

          <br />
          <div className="d-flex gap-5">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
              />
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/media/images/appstoreBadge (1).svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
