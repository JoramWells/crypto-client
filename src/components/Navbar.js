import React from 'react';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-2 py-lg-0">
      <a href="index.html" className="navbar-brand p-0">
        <h1 className="m-0">Crypto Investment Podium</h1>
      </a>
      <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="index.html" className="nav-item
          nav-link active"><i className="fa fa-home" /></a>
          <a href="www" className="nav-item nav-link">About Us</a>
          <a href="www" className="nav-item nav-link">How to Join</a>
          <a href="www" className="nav-item nav-link">Contact</a>
        </div>
        <button type="button" className="btn text-primary ms-3"
          data-bs-toggle="modal" data-bs-target="#searchModal">
          <i className="fa fa-search" /></button>
        <a href="login.html" className="btn btn-primary
        py-2 px-4 ms-3"><i className="fa fa-user"> </i> Join Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
