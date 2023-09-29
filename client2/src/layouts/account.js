import {useNavigate} from 'react-router-dom';
import AdminPanel from '../components/AdminPanel';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../context/userContext';
import {Collapse, List, ListItemButton,
  ListItemIcon, ListItemText} from '@mui/material';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import AccountCircleOutlinedIcon from
  '@mui/icons-material/AccountCircleOutlined';

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

  useEffect(()=>{
    const user = getUserData();
    setUserData(user);
    console.log(userData, 'datax');
  }, []);
  return (
    <AdminPanel>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
        <div style={{
          width: '80%',
        }}>
          {user ? <div style={{
            display: 'flex',
            flex: 'column',
          }}>
            <div style={{
              border: '1px solid whitesmoke',
              backgroundColor: 'red',
            }}>
              {userData.userName}
            </div>
            <div>
              {userData.email}
            </div>
            <div>
              {userData.gender}
            </div>
            <div>
              {userData.age}
            </div>
            <div>
              {userData.createdAt}

            </div>
            <List>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="User Name" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                      <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={userData.userName} />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>


          </div>: navigate('/')}
        </div>


      </div>
    </AdminPanel>
  );
};

export default Account;
