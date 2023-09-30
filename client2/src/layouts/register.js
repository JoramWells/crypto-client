/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import {useRegisterApi} from '../hooks/useRegisterApi';
import {ToastContainer} from 'react-toastify';
import AuthContainer from '../components/AuthContainer';
import {Typography} from '@material-ui/core';


const button = {
  // float: 'right',
  color: '#fff',
  fontSize: '16px',
  padding: '12px 35px',
  borderRadius: '50px',
  // display: 'inline-block',
  border: '0',
  outline: '0',
  boxShadow: '0px 4px 20px 0px #49c628a6',
  backgroundImage: 'linear-gradient(135deg, #70F570 10%, #49C628 100%)',
  margin: 'auto',
  display: 'block',
  width: '80%',
};

const input = {
  width: '100%',
  padding: 'auto',
  marginTop: '25px',
  fontSize: '16px',
  border: 'none',
  outline: 'none',
  borderBottom: '2px solid #B0B3B9',
};

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
    <AuthContainer>
      <div className="right">
        <Typography variant='h1'>SignUp</Typography>

        <div style={{
          width: '100%',
          marginTop: '5rem',
        }} >
          <div style={{
            width: '95%',
            display: 'block',
            margin: 'auto',
          }}>
            <input type="text" placeholder="user name"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
              style={input}
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
          <button style={button}
            onClick={() => registerUser(inputValues)} type="submit" name="submit">{loading? 'Loading...' : 'SignUp'}</button>
        </div>
      </div>
      <p style={{
        color: 'grey',
        marginTop: '2rem',
      }}>Already have an account,
        <Link to={'/login'}> Sign In?</Link></p>
    </AuthContainer>
  );
};

export default Register;
