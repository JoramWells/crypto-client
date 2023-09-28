import React from 'react';

const Blog = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center
      position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
          <h5 className="fw-bold text-primary
        text-uppercase">Crypto Investment</h5>
          <h1 className="mb-0">The modern way to save and grow your money</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/123.jpeg" alt="" />
                <a className="position-absolute top-0
              start-0 bg-primary text-white
              rounded-end mt-5 py-2 px-4" href>AMBCrypto</a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3"><i
                    className="far fa-user
                 text-primary me-2" />AMBCrypto</small>
                  <small>
                    <i className="far fa-calendar-alt
                   text-primary me-2" />2 hours ago</small>
                </div>
                <h4 className="mb-3">Bitcoin gets
                leg-up from Chines Liguidity:
                Heres why this is important</h4>
                <p>Chinas cetral bank has been using
                open market operations to pump more funds into the
                financial system. this may have
                encouraged Chinese investors to .....</p>
                <a className="text-uppercase" href>
                Read More <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/123.jpeg" alt="" />
                <a className="position-absolute
               top-0 start-0 bg-primary text-white
               rounded-end mt-5 py-2 px-4" href>NewsBTC</a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3"><i
                    className="far fa-user
                  text-primary me-2" />NewsBTC</small>
                  <small><i className="far fa-calendar-alt
                 text-primary me-2" />2 hours ago</small>
                </div>
                <h4 className="mb-3">Tron Price Prediction:
                TRX  and Revisit $0.085</h4>
                <p>Tron price s up over 5% and gaining
                pace above $0.0725 agaist the US Dollar.
                TRX is outperforming
                Bitcoin and clould rise furthe towards $0.0850. Tron....</p>
                <a className="text-uppercase" href>
                Read More <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/123.jpeg" alt="" />
                <a className="position-absolute top-0 start-0 bg-primary
              text-white rounded-end mt-5 py-2 px-4" href>Bitcoinist</a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3"><i
                    className="far fa-user
                 text-primary me-2" />Bitcoinist</small>
                  <small><i className="far
                 fa-calendar-alt text-primary me-2" />3 hours </small>
                </div>
                <h4 className="mb-3">Jump Trading Accumulating
                Defi Tokens incluing KDO, PERP and MASK</h4>
                <p>On-Chain data by LookOnChain, an analytic
                platform, shows the that Jump Trading, a
                quant trading firm, has rapidly
                accumulated several decentralized financees</p>
                <a className="text-uppercase"
                  href>Read More <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
