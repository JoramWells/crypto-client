import '../css/styless.css';
import {Grid, Typography} from '@material-ui/core';
import backimg from '../img/backg.jpg';
import PropTypes from 'prop-types';
// const Container = styled.div`


// `

const leftStyle = {
  color: '#FFFFFF',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${backimg})`,
  overflow: 'hidden',
};

const rightStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

const AuthContainer = ({children}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '80%',
        marginLeft: '10%',
      }}
    >

      <div className="box-form">
        <Grid container spacing={2}>
          <Grid xs={8} item style={leftStyle}>
            <div className="overlay">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%',
              }}>
                <Typography variant='h1'
                  color='white' style={{
                    color: 'white',
                    textAlign: 'center',
                  }}>Easly way to Invest.</Typography>
                <Typography variant='h6' style={{
                  textAlign: 'center',
                  color: 'white',
                  marginTop: '1rem',
                  fontWeight: '400',
                }}>When you invest with Crypto Investment Podium.<br />
            Your money is safe.<br />
            SignUp or Login to have an account with us.</Typography>

              </div>
            </div>
          </Grid>
          <Grid item xs={4} style={rightStyles}>
            {children}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AuthContainer;

AuthContainer.propTypes={
  children: PropTypes.node,
};
