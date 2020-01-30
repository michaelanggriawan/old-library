/* eslint-disable react/prop-types */
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { dashboardStyle } from '../globalStyle';


const TopHeader = ({ text }) => {
  const classes = dashboardStyle();
  return (
    <Grid className={classes.dahshboardHeader} container direction="row" justify="space-around">
      <Grid style={{ marginLeft: '-165px' }}>
        <Typography style={{ fontWeight: 'bold' }}>{ text }</Typography>
      </Grid>
      <Grid style={{ marginRight: '-170px' }}>
        <Typography style={{ fontWeight: 'bold' }}>
          <span style={{ color: 'blue' }}>Beranda</span>
          {' '}
                / Dashboard
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TopHeader;
