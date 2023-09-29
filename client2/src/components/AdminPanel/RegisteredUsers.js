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

export default function RegisteredUsers() {
  const [studentInfo, setStudentInfo] = React.useState([]);
  const [loadingDelete, setLoadingDelete] = React.useState(false);

  const url = 'http://localhost:5000/auth/getAllUsers';
  // const {status, data} = useFetchApi(url);

  const navigate = useNavigate();

  const getData = async () => {
    await axios.get('http://localhost:5000/auth/getAllUsers')
        .then((response)=>{
          setStudentInfo(response.data);
          console.log(response.data);
        })
        .catch((err)=>console.log(err.message));
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    // if (data) {
    //   setStudentInfo(data.data);
    // }
  };

  const deleteUser = async (id) => {
    setLoadingDelete(true);
    await axios.delete(`http://localhost:5000/auth/${id}`)
        .then((response)=>{
          console.log(response.data);
          setLoadingDelete(false);
        })
        .catch((err)=>{
          console.log(err.message);
          setLoadingDelete(false);
        });
    setLoadingDelete(false);
  };

  // console.log(data, status);

  const deleteStudent = (id) => {
    setStudentInfo(studentInfo.filter((student) => student.id !== id));
    localStorage.setItem('studentData', JSON.stringify(studentInfo));
    // localStorage.todo
  };

  React.useEffect(() => {
    getData();
    console.log([studentInfo]);
  }, []);

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
              <TableCell>DOB</TableCell>
              <TableCell>Is Admin</TableCell>
              <TableCell>Deposit</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentInfo.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.DOB}</TableCell>
                <TableCell align="right">{row.isAdmin}</TableCell>
                <TableCell align="right">{row.deposit}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Generate Report">
                    <IconButton onClick={() => {
                      navigate('/report1');
                    }}>
                      <AssessmentOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    {loadingDelete ? <>del</>: <IconButton
                      style={{
                        color: '#FD6868',
                      }}
                      onClick={() => {
                        deleteUser(row._id);
                      }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>}
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
