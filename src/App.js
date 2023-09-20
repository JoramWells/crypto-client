import React from 'react';
import {Helmet} from 'react-helmet';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/animate/animate.min.css';
import './css/bootstrap.min.css';
import './css/style.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ModalFade from './components/ModalFade';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crypto Investment Podium</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Crypto Investment Podium" name="keywords" />
        <meta content="Crypto Investment Podium" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
        {/* Icon Font Stylesheet */}
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" /> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" /> */}
        {/* Libraries Stylesheet */}
        {/* <link href="./lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet" /> */}
        {/* <link href="./lib/animate/animate.min.css" rel="stylesheet" /> */}
        {/* Customized Bootstrap Stylesheet */}
        {/* <link href="./css/bootstrap.min.css" rel="stylesheet" /> */}
        {/* Template Stylesheet */}
        {/* <link href="./css/style.css" rel="stylesheet" /> */}
        {/* Spinner Start */}
      </Helmet>
      <div id="spinner" className="show
      bg- position-fixed translate-middle w-100
      vh-100 top-50 start-50 d-flex align-items-center
      justify-content-center">
        <div className="spinner" />
      </div>
      {/* Spinner End */}
      {/* Top Start */}
      <Header />
      {/* Topbar End */}
      {/* Navbar & Carousel Start */}
      <Navbar/>
      {/* Navbar & Carousel End */}
      <Carousel />
      {/* Full Screen Search Start */}
      <ModalFade/>
      {/* Full Screen Search End */}
      {/* Facts Start */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="bg-primary shadow d-flex align-items-center
              justify-content-center p-4" style={{height: '150px'}}>
                <div className="bg-white d-flex
                align-items-center justify-content-center
                rounded mb-2" style={{width: '60px', height: '60px'}}>
                  <i className="fa fa-Money text-primary" />
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Exchange</h5>
                  <h1 className="text-white mb-0"
                    data-toggle="counter-up">1000</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-light shadow d-flex align-items-center
               justify-content-center p-4" style={{height: '150px'}}>
                <div className="bg-primary d-flex align-items-center
                 justify-content-center rounded mb-2"
                style={{width: '60px', height: '60px'}}>
                  <i className="fa fa-users text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="text-primary mb-0">Our users</h5>
                  <h1 className="mb-0" data-toggle="counter-up">1200</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary shadow d-flex align-items-center
               justify-content-center p-4" style={{height: '150px'}}>
                <div className="bg-white d-flex align-items-center
                justify-content-center rounded mb-2"
                style={{width: '60px', height: '60px'}}>
                  <i className="fa fa-world text-primary" />
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Countries</h5>
                  <h1 className="text-white mb-0"
                    data-toggle="counter-up">50</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts Start */}
      {/* About Start */}
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
      {/* About End */}
      {/* Service Start */}
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
      {/* Service End */}
      {/* Pricing Plan Start */}
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
      {/* Pricing Plan End */}
      {/* Blog Start */}
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
      {/* Blog Start */}
      {/* Vendor Start */}
      <div className="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-2 mb-5">
          <div className="bg-white">
            <div className="owl-carousel vendor-carousel">
              <img src="img/vendor-1.jpg" alt="" />
              <img src="img/vendor-2.jpg" alt="" />
              <img src="img/vendor-3.jpg" alt="" />
              <img src="img/vendor-4.jpg" alt="" />
              <img src="img/vendor-5.jpg" alt="" />
              <img src="img/vendor-6.jpg" alt="" />
              <img src="img/vendor-7.jpg" alt="" />
              <img src="img/vendor-8.jpg" alt="" />
              <img src="img/vendor-9.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Vendor End */}
      {/* Footer Start */}
      <div className="container-fluid bg-dark
      text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title
                  section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2" />
                    <p className="mb-0">20 Street, Menosota, USA</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2" />
                    <p className="mb-0">info@cryptoinvestmentpodium.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2" />
                    <p className="mb-0">+018 345 67890</p>
                  </div>
                  <div className="d-flex mt-4">
                    {/* <a className="btn btn-primary btn-square
                     me-2" href="#"><i className="fab
                      fa-twitter fw-normal" /></a>
                  <a className="btn btn-primary btn-square me-2"
                  href="#"><i className="fab fa-facebook-f fw-normal" /></a>
                  <a className="btn btn-primary btn-square me-2"
                  href="#"><i className="fab fa-linkedin-in fw-normal" /></a>
                  <a className="btn btn-primary btn-square"
                   href="#"><i className="fab fa-instagram fw-normal" /></a> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title
                  section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex
                  flex-column justify-content-start">
                    {/* <a className="text-light mb-2" href="#"><i
                    className="bi bi-arrow-right text-primary me-2" />Home</a>
                  <a className="text-light mb-2" href="#"><i className="bi
                  bi-arrow-right text-primary me-2" />About Us</a>
                  <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary
                  me-2" />Our Services</a>
                  <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right
                  text-primary me-2" />Meet The Team</a>
                  <a className="text-light mb-2" href="#">
                  <i
                  className="bi bi-arrow-right
                  text-primary me-2" />Latest Blog</a>
                  <a className="text-light"
                   href="#"><i className="bi
                   bi-arrow-right text-primary me-2" />Contact Us</a> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title
                  section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated
                  d-flex flex-column justify-content-start">
                    {/* <a className="text-light mb-2" href="#"><i
                    className="bi bi-arrow-right text-primary me-2" />Home</a>
                  <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  About Us</a>
                  <a className="text-light mb-2" href
                  i className="bi bi-arrow-right text-primary
                  me-2" />Our Services</a>
                  <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2"
                   />Meet The Team</a>
                  <a className="text-light mb-2" href="#"><i
                  className="bi bi-arrow-right
                  text-primary me-2" />Latest Blog</a>
                  <a className="text-light" href="#"><i className="bi
                  bi-arrow-right text-primary me-2" />Contact Us</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white"
        style={{background: '#061429'}}>
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div className="d-flex align-items-center
              justify-content-center" style={{height: '75px'}}>
                {/* <p className="mb-0">© <a className="text-white
                border-bottom" href="#" />All Rights Reserved.  */}
                {/* /*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                {/* powerd by Crypto Investment Podium 2023</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      {/* <a href="#" className="btn btn-lg btn-primary
      btn-lg-square rounded back-to-top">
      <i className="bi bi-arrow-up" /></a> */}
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div >
  );
}

export default App;
