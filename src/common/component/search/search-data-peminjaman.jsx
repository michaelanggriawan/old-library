import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { searchStyle } from '../globalStyle';

const SearchDataPeminjam = ({ searchDataPeminjaman }) => {
  const classes = searchStyle();

  return (
    <div style={{ marginLeft: '190px', marginTop: '10px', marginBottom: '10px' }}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Cari Data Peminjam..."
          inputProps={{ 'arial-label': 'Search Peminjam' }}
          onChange={(e) => searchDataPeminjaman(e.target.value)}
        //   value={search}
        />
        <IconButton className={classes.iconButton} arial-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

SearchDataPeminjam.propTypes = {
  searchDataPeminjaman: PropTypes.func.isRequired,
};

export default SearchDataPeminjam;
