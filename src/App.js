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
import About from './components/About';
import About2 from './components/About2';
import Service from './components/Service';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Blog from './components/Blog';

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
      <About />
      {/* Facts Start */}
      {/* About Start */}
      <About2 />
      {/* About End */}
      {/* Service Start */}
      <Service />
      {/* Service End */}
      {/* Pricing Plan Start */}
      <Pricing />
      {/* Pricing Plan End */}
      {/* Blog Start */}
      <Blog/>
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
      <Footer />
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
