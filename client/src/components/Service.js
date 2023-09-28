import React from 'react';

const Service = () => {
  return (
    <div className="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-2">
        <div className="section-title text-center
       position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '1000px'}}>
          <h1 className="mb-0">Successful Business</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light
           rounded d-flex flex-column align-items-center
            justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-shield-alt text-white" />
              </div>
              <h4 className="mb-3">Bsiness Boost</h4>
              <p className="m-0">Improve your business by investing in us</p>
              <a className="btn btn-lg btn-primary rounded" href>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light
          rounded d-flex flex-column align-items-center
           justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-pie text-white" />
              </div>
              <h4 className="mb-3">Money Security</h4>
              <p className="m-0">Your Money is at the safest place</p>
              <a className="btn btn-lg btn-primary rounded" href>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="service-item bg-light rounded d-flex
          flex-column align-items-center
           justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-code text-white" />
              </div>
              <h4 className="mb-3">Multiplay your Money</h4>
              <p className="m-0">Multiplay your Money as you play </p>
              <a className="btn btn-lg btn-primary rounded" href>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded
           d-flex flex-column align-items-center
           justify-content-center text-center">
              <div className="service-icon">
                <i className="fab fa-android text-white" />
              </div>
              <h4 className="mb-3">play </h4>
              <p className="m-0">Multiplay your Money as you play</p>
              <a className="btn btn-lg btn-primary rounded" href>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded
          d-flex flex-column align-items-center
           justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-search text-white" />
              </div>
              <h4 className="mb-3">Games</h4>
              <p className="m-0">Multiplay your Money as you play</p>
              <a className="btn btn-lg btn-primary rounded" href>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-primary rounded h-100
           d-flex flex-column align-items-center
            justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Easy Money for you</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
