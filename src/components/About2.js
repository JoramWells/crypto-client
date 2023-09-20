import React from 'react';

const About2 = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary
             text-uppercase">About Crypto Investment Podium</h5>
              <h1 className="mb-0">Peer to peer cash system</h1>
            </div>
            <p className="mb-4">
            Customer funds are segregated from the
            rest of the company’s assets for their
            protection, and we’re regulated in multiple jurisdictions.
            </p>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3"><i className="fa
              fa-check text-primary me-3" />Points</h5>
                <h5 className="mb-3"><i className="fa
              fa-check text-primary me-3" />Bitcoin Price</h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3"><i className="fa
              fa-check text-primary me-3" />$10 US</h5>
                <h5 className="mb-3"><i className="fa
              fa-check text-primary me-3" />$30,272.67</h5>
              </div>
            </div>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3"><i className="fa
               fa-check text-primary me-3" />Points</h5>
                <h5 className="mb-3"><i className="fa
               fa-check text-primary me-3" />Bitcoin Price</h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3"><i className="fa
              fa-check text-primary me-3" />$10 US</h5>
                <h5 className="mb-3"><i className="fa
               fa-check text-primary me-3" />$30,272.67</h5>
              </div>
            </div>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3"><i className="fa
              fa-check text-primary me-3" />Points</h5>
                <h5 className="mb-3"><i className="fa fa-check
              text-primary me-3" />Bitcoin Price</h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3"><i
                  className="fa fa-check text-primary me-3" />$10 US</h5>
                <h5 className="mb-3"><i
                  className="fa fa-check text-primary me-3" />$30,272.67</h5>
              </div>
            </div>
            <a href="quote.html" className="btn btn-primary
           py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">More infor</a>
          </div>
          <div className="col-lg-5" style={{minHeight: '500px'}}>
            <div className="position-relative h-100">
              <video className="position-absolute
             w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" controls>
                <source src="vids/bitcoin.mp4" type="video/mp4" />
                <source src="vids/bitcoin.ogg" type="video/ogg" />
              Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
