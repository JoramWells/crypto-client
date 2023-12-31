import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>

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
          <form action="login_action.php" method="post" id="myform">
            <div className="inputs">
              <input type="email" name="email" placeholder="Email" />
              <br />
              <input type="password" name="password" placeholder="password" />
            </div><br />
            <div className="remember-me--forget-password">
              <label>
                <input type="checkbox" name="item" defaultChecked />
                <span className="text-checkbox">Remember me</span>
              </label>
              <p>forget password?</p>
            </div>
            <br />
            <button type="submit" name="login">Login</button>
          </form>
        </div>
      </div>
      {/* partial */}
    </div>
  );
};

export default Login;
