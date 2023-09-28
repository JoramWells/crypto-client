import '../css/styless.css';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// const Container = styled.div`


// `
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputValues = {
    email: email,
  };

  const handleLogin = async (e) =>{
    e.preventDefault();
    await axios.post('http://localhost:5000/auth/login', inputValues)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err.message));
  };

  return (


    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Easly way to Invest.</h1>
          <p>When you invest with Crypto Investment Podium.<br />
              Your money is safe.<br />
              SignUp or Login to have an account with us.</p>
          <p>Dont have an account?
            <span>

              <Link to={'/register'}
                className="fa fa-pen">Create Account</Link>

            </span>
          </p></div>
      </div>
      <div className="right">
        <h5>Login</h5>
        <p>Dont have an account?
          <Link to={'/register'}>Create Your Account</Link>
            it takes less than a minute</p>
        <p>{/* ?php global $nam; echo $nam; ?*/}<br />
          {/* ?php global $error; echo $error; ?*/}</p>
        <form id="myform">
          <div className="inputs">
            <input type="email" name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div><br />
          <div className="remember-me--forget-password">
            <label>
              <input type="checkbox" name="item" defaultChecked />
              <span className="text-checkbox">Remember me</span>
            </label>
            <p>forget password?</p>
          </div>
          <br />
          <button onClick={handleLogin} name="login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
