import React from 'react';
import carousel1 from '../img/carousel-1.jpeg';

const Carousel = () => {
  return (
    <div id="header-carousel" className="carousel
    slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src={carousel1}
            alt="Imagecarou" />
          <div className="carousel-caption d-flex
          flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: '900px'}}>
              <h1 className="display-1 text-white mb-md-4
              animated zoomIn">the Crypto Investment Podium</h1>
              <a href="quote.html" className="btn btn-primary
              py-md-3 px-md-5 me-3 animated slideInLeft">Home</a>
              <a href className="btn btn-outline-light py-md-3
              px-md-5 animated slideInRight">Benefits</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/about2.jpeg" alt="Imageabout" />
          <div className="carousel-caption d-flex
          flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: '900px'}}>
              <h1 className="display-1 text-white
              mb-md-4 animated
              zoomIn">A radically simple way to save &amp; invest</h1>
              <a href="quote.html" className="btn btn-primary
              py-md-3 px-md-5 me-3 animated slideInLeft">Home</a>
              <a href className="btn btn-outline-light
              py-md-3 px-md-5 animated slideInRight">Benefits</a>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev"
        type="button" data-bs-target="#header-carousel"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next"
        type="button" data-bs-target="#header-carousel"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
