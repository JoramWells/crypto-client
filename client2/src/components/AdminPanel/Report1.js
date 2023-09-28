/* eslint-disable require-jsdoc */
import {
  Button, Paper, IconButton,
} from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {useEffect, useState} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Header2 from '../../components/Header2';
import PersonalDetails from '../../components/PersonalDetails';
import CustomTable from '../../components/CustomTable';
import Badge from '../../components/Badge';
import Underline from '../../components/Underline';
import Dashboard from '.';

function Report1() {
  const [loader, setLoader] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [results, setUserResults] = useState(studentData);
  const navigate = useNavigate();

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(loader);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('/img/jpeg', 1.0);
      // eslint-disable-next-line new-cap
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'JPEG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    });
  };

  const getStudentId = (id) => {
    if (results && results.length > 0) {
      const userResults = results.filter(
          (user) => user.id.toLowerCase().includes(id.toLowerCase()),
      );
      setUserResults(userResults);
      console.log('resulsts', results);
    }
  };
  useEffect(() => {
    const studentData2 = localStorage.getItem('studentData');
    const data = JSON.parse(studentData2);
    setStudentData(data);
    getStudentId();
  }, []);

  return (
    <Dashboard>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100vh',
        padding: '10px',
      }}
      >
        <IconButton
          onClick={() => navigate('/')}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
          }}
        >
          <ArrowBackIcon />

        </IconButton>

        {/* LEFT SECTION */}
        {/* <Box>
        <FormGroup >
          <div>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <input placeholder='Enter name'
              onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: 'column'
          }}
          >
            <InputLabel htmlFor="my-input">First Name</InputLabel>

            <input placeholder='Enter second name'
              onChange={(e) => setSecondName(e.target.value)} />
          </div>
        </FormGroup >
      </Box> */}

        {/* report section */}
        <Paper>
          <div
            style={{
              width: '793.7007874px',
              height: '1122.519685px',
              // margin: "30mm 45mm 30mm 45mm"
            }}
            className="actual-receipt"
          >
            <div style={{
              border: '1px solid grey',
              height: '100%',
            }}
            >
              <Header />
              <Header2 />
              <PersonalDetails />
              <CustomTable />
              <div style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
              >
                <Badge text="Class Teachers remarks" width="30%" />
                <input style={{
                  width: '70%',
                }}
                />
              </div>

              {/* initials */}
              <div style={{
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-evenly',
              }}
              >
                <Badge text="Initials" />
                <Underline />
                <Underline width="70%" />

              </div>
            </div>

            <div style={{
              marginTop: '1rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: '40%',
                }}
                onClick={() => downloadPDF()}
              >
                SAVE

              </Button>
              <Button
                variant="contained"
                sx={{
                  width: '40%',
                }}
                onClick={() => downloadPDF()}
              >
                DOWNLOAD

              </Button>

            </div>
          </div>

        </Paper>

      </div>
    </Dashboard>

  );
}

export default Report1;
