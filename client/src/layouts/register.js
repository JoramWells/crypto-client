/* eslint-disable max-len */

import axios from 'axios';
import {useState} from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputValues = {
    email: email,
    username: username,
    password: password,
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await axios.post('http://localhost:5000/auth/register', inputValues)
        .then((response)=>{
          console.log(response);
        })
        .catch((err)=>console.log(err.message));
    console.log(inputValues);
  };


  return (
    <div>
      <title>Create Crypto Account</title>

      <div className="box-form">
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
          <form className="myform-validation" noValidate>
            <div className="inputs">
              <input type="text" placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <br />
              <input type="text" placeholder="user name"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
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
            <button onClick={handleSubmit} type="submit" name="submit">SignUp</button>
          </form>
        </div>
      </div>
      {/* partial */}
    </div>
  );
};

export default Register;
