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
import {IconButton, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Title from './Title';
import axios from 'axios';

export default function RegisteredUsers() {
  const [studentInfo, setStudentInfo] = React.useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    await axios.get('http://localhost:5000/auth/getAllUsers')
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err.message));
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    if (data) {
      setStudentInfo(data);
    }
  };

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
      <Title>Registered Students</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Second Name</TableCell>
            <TableCell>Index Code</TableCell>
            <TableCell>Age</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentInfo.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.secondName}</TableCell>
              <TableCell>{row.indexCodeName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="center">
                <Tooltip title="Generate Report">
                  <IconButton onClick={() => {
                    navigate('/report1');
                  }}>
                    <AssessmentOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    style={{
                      color: '#FD6868',
                    }}
                    onClick={() => {
                      deleteStudent(row.id);
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
    </>
  );
}
