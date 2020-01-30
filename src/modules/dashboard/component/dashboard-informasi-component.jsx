/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { dashboardStyle, SidebarStyle } from '../../../common/component/globalStyle';
import TopHeader from '../../../common/component/top-header/top-header';

import totalSiswa from '../../../common/assets/total-siswa.png';
import totalBuku from '../../../common/assets/total-buku.png';
import peminjaman from '../../../common/assets/peminjaman.png';
import pengembalian from '../../../common/assets/pengembalian.png';

const DashboardInformasiComponent = ({ text, siswa, total }) => {
  const classes = dashboardStyle();
  const sideBar = SidebarStyle();
  return (
    <>
      <div className={sideBar.toolbar} style={{ marginTop: '5px' }} />
      <Grid container={classes.root} spacing={2} style={{ marginLeft: '90px' }}>
        <TopHeader text={text} />
        <Grid item xs={12} style={{ marginTop: '-15px' }}>
          <Grid container justify="center" spacing={2} wrap="nowrap">
            <Grid key={1} item>
              <div style={{ boxSizing: 'border-box' }}>
                <Card className={classes.paper}>
                  <img src={totalSiswa} className="dashboard-image" />
                  <div className="dashboard-text">
                    <Typography variant="h5" className="dashboard-bold">{siswa.length}</Typography>
                    <Typography variant="body2">Total Siswa</Typography>
                  </div>
                </Card>
              </div>
            </Grid>
            <Grid key={2} item>
              <div style={{ boxSizing: 'border-box' }}>
                <Card className={classes.paper}>
                  <img src={totalBuku} className="dashboard-image" />
                  <div className="dashboard-text">
                    <Typography variant="h5" className="dashboard-bold">{total}</Typography>
                    <Typography variant="body2">Total Buku</Typography>
                  </div>
                </Card>
              </div>
            </Grid>
            <Grid key={3} item>
              <div style={{ boxSizing: 'border-box' }}>
                <Card className={classes.paper}>
                  <img src={peminjaman} className="dashboard-image" />
                  <div className="dashboard-text">
                    <Typography variant="h5" className="dashboard-bold">3</Typography>
                    <Typography variant="body2">Peminjaman</Typography>
                  </div>
                </Card>
              </div>
            </Grid>
            <Grid key={4} item>
              <div style={{ boxSizing: 'border-box' }}>
                <Card className={classes.paper}>
                  <img src={pengembalian} className="dashboard-image" />
                  <div className="dashboard-text">
                    <Typography variant="h5" className="dashboard-bold">3</Typography>
                    <Typography variant="body2">Pengembalian</Typography>
                  </div>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};


DashboardInformasiComponent.propTypes = {
  text: PropTypes.string.isRequired,
  siswa: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

export default DashboardInformasiComponent;
