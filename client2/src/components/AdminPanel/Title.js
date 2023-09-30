/* eslint-disable require-jsdoc */
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
  const {children} = props;
  return (
    <Typography sx={{
      color: '#090b6f85',
    }}
    component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

Title.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

export default Title;
