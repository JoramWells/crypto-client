import React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Carousel from '../components/Carousel';

import ModalFade from '../components/ModalFade';
import About2 from '../components/About2';
import Service from '../components/Service';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Vendor from '../components/Vendor';
import Footer from '../components/Footer';

const Index = () => {
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
      </Helmet>
      {/* <div id="spinner" className="show
      bg- position-fixed translate-middle w-100
      vh-100 top-50 start-50 d-flex align-items-center
      justify-content-center">
        <div className="spinner" />
      </div> */}
      {/* Spinner End */}
      {/* Top Start */}
      <Header />
      {/* Topbar End */}
      {/* Navbar & Carousel Start */}
      <NavBar />
      {/* Navbar & Carousel End */}
      <Carousel />
      {/* Full Screen Search Start */}
      <ModalFade />
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
      <Blog />
      {/* Blog Start */}
      {/* Vendor Start */}
      <Vendor />
      {/* Vendor End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
      {/* Back to Top */}
      <a href="www" className="btn btn-lg btn-primary
      btn-lg-square rounded back-to-top">
        <i className="bi bi-arrow-up" /></a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
};

export default Index;
