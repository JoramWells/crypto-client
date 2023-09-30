/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';


import {
  Avatar,
  ListItemButton, ListItemIcon, ListItemText, ListSubheader,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DropDownMenu from '../DropDownMenu';
import axios from 'axios';
import {UserContext} from '../../context/userContext';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminPanel({children, avatar}) {
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [data, setData] = React.useState([]);

  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getData = async () => {
    await axios.get('http://localhost:5000/auth/getAllUsers')
        .then((response)=>{
          setData(response.data);
          console.log(response.data);
        })
        .catch((err)=>console.log(err.message));
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    // if (data) {
    //   setStudentInfo(data.data);
    // }
  };

  const [userData, setUserData] = React.useState({});


  const {user} = React.useContext(UserContext);

  const getUserData = () => {
    const userDetails = localStorage.getItem('registeredUser');
    return JSON.parse(userDetails);
  };


  React.useEffect(()=>{
    const user = getUserData();
    setUserData(user);
    console.log(userData, 'datax');
  }, []);

  // main list
  const mainListItems = (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" onClick={() => navigate('/')} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Investments" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Deposits" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="ECD" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Subjects" />
      </ListItemButton>
    </>
  );

  const secondaryListItems = (
    <>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton onClick={() => navigate('/report1')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Generate Report 1" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </>
  );

  const userListItems = (
    <>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <div style={{
        fontSize: '12px',
      }}>
        <ListItemButton >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Investments" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Deposits" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Bitcoin Prices" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Games" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Profits" />
        </ListItemButton>
      </div>
      <div style={{
        position: 'fixed',
        bottom: '0',
        width: '15%',
      }}>
        <ListItemButton >
          <ListItemIcon>
            <SettingsApplicationsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton style={{
          textAlign: 'center',
          backgroundColor: '#FFC5C5',
          color: 'white',
          fontWeight: 'bold',
        }}>
          <ListItemText primary="Delete Account" />
        </ListItemButton>
      </div>
    </>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />


        <AppBar position="absolute" open={open} style={{
          backgroundColor: '#090b6f85',
        }}>
          <Toolbar
            sx={{
              pr: '24px',
              backgroundColor: '#090b6f85', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && {display: 'none'}),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{flexGrow: 1}}
              onClick={() => navigate('/')}
            >
              Dashboard
            </Typography>

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <DropDownMenu />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {avatar ? <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain',
                }}
                src="https://www.citypng.com/public/uploads/preview/png-profile-user-round-gray-icon-symbol-11639594342slkdqxcgi6.png?v=2023082006"
                alt="user-avatar" />

              <div style={{
                marginTop: '.5rem',
                fontSize: '20px',
                fontWeight: 'bold',
              }}>{userData.userName}</div>
              <div style={{
                marginTop: '.5rem',
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'grey',
              }}>{userData.email}</div>
              <button
                style={{
                  marginTop: '.5rem',
                  marginBottom: '.5rem',
                  border: '0',
                  outline: 'none',
                  backgroundColor: '#090b6f85',
                  padding: '5px',
                  width: '80%',
                  borderRadius: '5px',
                  color: 'white',

                }}
              >Edit profile</button>

            </div>: <>{mainListItems}</> }


            <Divider sx={{my: 1}} />
            {avatar ? userListItems: secondaryListItems}
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'light' ?
              theme.palette.grey[100] :
              theme.palette.grey[900]),
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
              {/* Chart */}
              {children}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

AdminPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  avatar: PropTypes.string,
};
