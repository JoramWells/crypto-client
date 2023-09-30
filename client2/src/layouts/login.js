import '../css/styless.css';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import AuthContainer from '../components/AuthContainer';
// const Container = styled.div`


// `


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

    <AuthContainer>

      <Typography variant='h1'>Login</Typography>


      <div style={{
        width: '100%',
        marginTop: '5rem',
      }} >
        <div style={{
          width: '95%',
          display: 'block',
          margin: 'auto',
        }}>
          <input type="email" name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />
          <br />
          <input type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            style={input}
          />
        </div><br />
        <div style={{
          marginTop: '.3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }} className="remember-me--forget-password">
          <label style={{
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
          <p style={{
            marginTop: '1.5rem',
          }}>forget password?</p>
        </div>
        <br />
        <button style={button}
          onClick={handleLogin} name="login">Login</button>

      </div>
      <p style={{
        color: 'grey',
        marginTop: '2rem',
      }}>Dont have an account,
        <Link to={'/register'}> Create Your Account?</Link></p>
    </AuthContainer>

  );
};

export default Login;
