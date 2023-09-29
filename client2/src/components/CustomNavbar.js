/* eslint-disable no-unused-vars */
import {useCallback, useEffect, useState} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

const CustomNavbar = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();


  const getUserData = useCallback( async () =>{
    const userDetails = localStorage.getItem('registeredUser');
    if (userDetails) {
      setUserData(await JSON.parse(userDetails));
      console.log(JSON.parse(userDetails));
      setUserData(JSON.parse(userDetails));
    }
  }, []);

  useEffect(()=>{
    getUserData();
  }, [getUserData]);
  return (

    <Navbar expand='lg' bg='dark' sticky='top' className="px-5 py-2 py-lg-0">

      <Navbar.Brand className='p-0' href="/">
        <h1 className="m-0" style={{
          color: 'white',
        }}>Crypto Investment Podium</h1>
      </Navbar.Brand>
      {/* <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse"> */}

      <Nav className='navbar-nav ms-auto' style={{
        color: 'white',
      }}>
        <a href="index.html" className="nav-item
          nav-link active"
        style={{
          color: 'white',
        }}
        ><i className="fa fa-home" /></a>
        <Nav.Link href='#acion1' style={{
          color: 'white',
        }}>About Us</Nav.Link>
        <Nav.Link href='#acion1' style={{
          color: 'white',
        }}>How to Join</Nav.Link>
        <Nav.Link href='#acion1' style={{
          color: 'white',
        }}>Contact</Nav.Link>
      </Nav>
      <button type="button" className="btn text-primary ms-3"
        data-bs-toggle="modal" data-bs-target="#searchModal">
        <i className="fa fa-search" /></button>
      {localStorage.getItem('registeredUser') ?
      <DropDownMenu color={'white'} profileName={userData.email}
        localStorageString={'registeredUser'}
      /> : <div className="btn btn-primary
      py-2 px-4 ms-3"><i className="fa fa-user"> </i>
        <Link style={{
          color: 'white',
          marginLeft: '5px',
        }} to={'/login'}
        >Join Now</Link>

      </div>}

      {/* </div> */}
    </Navbar>
  );
};

export default CustomNavbar;
