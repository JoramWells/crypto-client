/* eslint-disable no-unused-vars */
import {useNavigate} from 'react-router-dom';
import AdminPanel from '../components/AdminPanel';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../context/userContext';
import {Collapse, Grid, List, ListItemButton,
  ListItemIcon, ListItemText, Paper} from '@mui/material';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import AccountCircleOutlinedIcon from
  '@mui/icons-material/AccountCircleOutlined';
import Chart from '../components/AdminPanel/Chart';
import Deposits from '../components/AdminPanel/Deposits';
const Account = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user} = useContext(UserContext);

  const getUserData = () => {
    const userDetails = localStorage.getItem('registeredUser');
    return JSON.parse(userDetails);
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // const fetchBitcoinP

  useEffect(()=>{
    const user = getUserData();
    setUserData(user);
    console.log(userData, 'datax');
  }, []);
  return (
    <AdminPanel avatar={'avatar_me'}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
        <div style={{
          width: '100%',
          height: '80vh',
        }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid item xs={12} md={8} lg={9} mr={2}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Chart title={'Recent Investment'} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
          </div>

        </div>


      </div>
    </AdminPanel>
  );
};

export default Account;
