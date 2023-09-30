/* eslint-disable require-jsdoc */
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Chart from './Chart';
import Deposits from './Deposits';

import Dashboard from '.';
import RegisteredUsers from './RegisteredUsers';

export default function HomeDashboard({avatar}) {
  return (
    <Dashboard>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
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
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <RegisteredUsers />
        </Paper>
      </Grid>
    </Dashboard>
  );
}

HomeDashboard.propTypes={
  avatar: PropTypes.string,
};
