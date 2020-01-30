/* eslint-disable react/jsx-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import { connect } from 'react-redux';

import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import Hidden from '@material-ui/core/Hidden';
import { handleDrawerToggle } from './store/sidebar-action';
import { SidebarStyle } from '../globalStyle';


const Sidebar = ({ handleDrawerToggle, mobileOpen }) => {
  const classes = SidebarStyle();
  const theme = useTheme();

  const selectMenu = (text) => {
    if (text === 'Dashboard') {
      return <DashboardOutlinedIcon key={1} />;
    } if (text === 'Katalog Buku') {
      return <LibraryBooksOutlinedIcon key={3} />;
    } if (text === 'Data Transaksi') {
      return <AccountBalanceWalletOutlinedIcon key={4} />;
    } if (text === 'Penerbit') {
      return <PermIdentityOutlinedIcon key={5} />;
    } if (text === 'Laporan') {
      return <BookOutlinedIcon key={6} />;
    }
  };

  const linkTo = ['/', 'katalog_buku', 'data_transaksi'];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Dashboard', 'Katalog Buku', 'Data Transaksi'].map((text, index) => (
          <Link to={linkTo[index]} style={{ color: 'black', textDecoration: 'none' }}>
            <ListItem button key={text}>
              <ListItemIcon>{selectMenu(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Penerbit', 'Laporan'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>{selectMenu(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          Buku Pintar
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.sidebar,
});

const mapDispatchToProps = ((dispatch) => ({
  handleDrawerToggle,
}))();

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
