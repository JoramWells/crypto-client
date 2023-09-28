import React from 'react';

const Pricing = () => {
  return (
    <div className="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-2">
        <div className="section-title text-center
      position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '1000px'}}>
          {/* <h5 class="fw-bold text-primary
        text-uppercase">Pricing Plans</h5>*/}
          {/* <h1 className="mb-0" /> */}
        </div>
        <div className="row g-0">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="bg-light rounded">
              <div className="border-bottom py-4 px-5 mb-4">
                <h4 className="text-primary mb-1">MICRO</h4>
                <small className="text-uppercase">great way to invest.</small>
              </div>
              <div className="p-5 pt-0">
                <h1 className="display-5 mb-3">
                  <small className="align-top" style={{
                    fontSize: '22px',
                    lineHeight: '45px', color: 'red',
                  }}>$</small><b style={{
                    color: 'red',
                  }}>10.00</b><small className="align-bottom"
                    style={{
                      fontSize: '16px', lineHeight:
                      '40px', color: 'red',
                    }}>/ Insatand</small>
                </h1>
                <div className="d-flex justify-content-between mb-3"><span>
                Local Kenyan stocks</span><i
                  className="fa fa-check text-primary pt-1" /></div>
                <div className="d-flex
              justify-content-between mb-3"><span>Fast withdrawals
                  </span><i className="fa fa-check text-primary pt-1" /></div>
                {/* <div className="d-flex
              justify-content-between mb-3"><span>No
               hidden fees</span><i className="
                fa-check text-primary pt-1" " /></div> */}
                <div className="d-flex
               justify-content-between
               mb-2"><span>Free education and tools
                  </span><i className="fa fa-check text-primary pt-1" /></div>
                <a href className="btn
               btn-primary py-2 px-4 mt-4">More info</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="bg-white rounded
          shadow position-relative" style={{zIndex: 1}}>
              <div className="border-bottom py-4 px-5 mb-4">
                <h4 className="text-primary mb-1">Standard Plan</h4>
                <small className="text-uppercase">
                For Medium Size Business</small>
              </div>
              <div className="p-5 pt-0">
                <h1 className="display-5 mb-3">
                  <small className="align-top"
                    style={{fontSize: '22px', lineHeight: '45px'}}>$
                  </small>99.00<small className="align-bottom"
                    style={{
                      fontSize: '16px',
                      lineHeight: '40px',
                    }}>/ Month</small>
                </h1>
                <div className="d-flex justify-content-between mb-3">
                  <span>Local Kenyan stocks</span><i
                    className="fa fa-check text-primary pt-1" /></div>
                <div className="d-flex justify-content-between mb-3"><span>
                Fast withdrawals</span>
                <i className="fa fa-check text-primary pt-1" /></div>
                {/* <div className="d-flex justify-content-between mb-3">
              <span>No hidden fees</span><i className="fa
              fa-check text-primary pt-1" " /></div> */}
                <div className="d-flex justify-content-between mb-2">
                  <span>Free education and tools</span><i
                    className="fa fa-check text-primary pt-1" /></div>
                <a href className="btn
              btn-primary py-2 px-4 mt-4">More info</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="bg-light rounded">
              <div className="border-bottom py-4 px-5 mb-4">
                <h4 className="text-primary mb-1">Advanced Plan</h4>
                <small className="text-uppercase">For
                Large Size Business</small>
              </div>
              <div className="p-5 pt-0">
                <h1 className="display-5 mb-3">
                  <small className="align-top" style={{
                    fontSize: '22px',
                    lineHeight: '45px',
                  }}>$</small>
                149.00<small className="align-bottom"
                    style={{
                      fontSize: '16px',
                      lineHeight: '40px',
                    }}>/ Month</small>
                </h1>
                <div className="d-flex justify-content-between mb-3">
                  <span>Local Kenyan stocks</span><i
                    className="fa fa-check text-primary pt-1" /></div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Fast withdrawals</span><i
                    className="fa fa-check text-primary pt-1" /></div>
                {/* <div className="d-flex justify-content-between mb-3">
              <span>No hidden fees</span><i className="fa fa-check
              text-primary pt-1" " /></div> */}
                <div className="d-flex justify-content-between mb-2">
                  <span>Free education and tools</span>
                  <i className="fa fa-check text-primary pt-1" /></div>
                <a href className="btn btn-primary py-2 px-4 mt-4">
                More info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
