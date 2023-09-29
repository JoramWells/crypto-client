/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function DropDownMenu({color, profileName, localStorageString}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = (localStorageString) => {
    return localStorage.setItem(localStorageString, JSON.stringify([]));
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: color ? color :' black',
        }}
      >
        <PersonOutlineIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>{profileName?
        profileName:'Profile'}</MenuItem>
        <MenuItem onClick={()=>{
          navigate('/account');
        }}>My account</MenuItem>
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
