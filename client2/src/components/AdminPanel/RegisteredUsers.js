/* eslint-disable require-jsdoc */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import {IconButton, TableContainer, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Title from './Title';
import axios from 'axios';
import {useFetchApi} from '../../hooks/useFetchApi';
import useAdminApis from '../../hooks/useAdminApis';
import {ToastContainer, toast} from 'react-toastify';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

export default function RegisteredUsers() {
  const [loadingDelete, setLoadingDelete] = React.useState(false);

  const url = 'http://localhost:5000/auth/getAllUsers';
  // const {status, data} = useFetchApi(url);
  const {registeredUsers, getRegisteredUsers} = useAdminApis();

  const navigate = useNavigate();

  const deleteUser = async (id) => {
    setLoadingDelete(true);
    await axios.delete(`http://localhost:5000/auth/${id}`)
        .then((response)=>{
          getRegisteredUsers();
          setLoadingDelete(false);
          toast('deleted successfully');
        })
        .catch((err)=>{
          console.log(err.message);
          setLoadingDelete(false);
        });
    setLoadingDelete(false);
  };


  return (
    <>
      <Title>Registered Users</Title>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell align='center'>Created</TableCell>
              <TableCell align='center'>Is Admin</TableCell>
              <TableCell align='center'>Deposit(KES)</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registeredUsers.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">{row.isAdmin ? row.isAdmin :
                <div style={{
                  padding: '2px',
                  backgroundColor: 'whitesmoke',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  color: 'grey',
                }}>FALSE</div>}</TableCell>
                <TableCell align="center">{row.deposit}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Generate Report">
                    <IconButton onClick={() => {
                      navigate('/report1');
                    }}
                    sx={{
                      color: '#68FDB6',
                    }}
                    >
                      <ModeEditOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      style={{
                        color: loadingDelete? 'grey': '#FD6868',
                      }}
                      onClick={() => {
                        deleteUser(row._id);
                      }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer />
    </>
  );
}
