/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import '../css/signuppg.css';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import {useRegisterApi} from '../hooks/useRegisterApi';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [loading, setLoading] = useState(false);

  const {registerUser, loading} = useRegisterApi();

  const navigate = useNavigate();


  const {user, saveUser} = useContext(UserContext);


  const inputValues = {
    email: email,
    userName: userName,
    password: password,
  };

  useEffect(()=>{
    if (user && user.userName.length > 0) {
      navigate('/');
    }
  }, [user, navigate]);


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '80%',
      marginLeft: '10%',
    }}>

      <div className="box-form" style={{
        width: '50%',

      }}>
        <div className="left">
          <div className="overlay">
            <h1>Easly way to Invest.</h1>
            <p>When you invest with Crypto Investment Podium.
            Your money is safe.<br />Login to access Your account.</p>
            <span>
              <a href="Login.html"><i className="fa fa-o" aria-hidden="true" /> LogIn</a>
            </span>
          </div>
        </div>
        <div className="right">
          <h5>SignUp</h5>
          <p>Already have an account? <a href="login.html">Login</a> provide your login details</p>
          <legend><a href="index.php"><i style={{color: '#fff'}} className="fa fa-home" /></a> <i style={{color: '#fff'}} className="fa fa-user" /></legend>
          {/* ?php global $nam; echo $nam; ?*/}
          {/* ?php global $error; echo $error; ?*/}
          <div className="myform-validation">
            <div className="inputs">
              <br />
              <input type="text" placeholder="user name"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
              />
              <input type="text" placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <br />
              <input type="password"
                className="form-control"
                id="password" placeholder="Password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required />
              <input id="confirm_password" type="password"
                name="password" placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </div><br />
            <button onClick={() => registerUser(inputValues)} type="submit" name="submit">{loading? 'Loading...' : 'SignUp'}</button>
          </div>
        </div>
      </div>
      {/* partial */}
    </div>
  );
};

export default Register;
