import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { searchStyle } from '../globalStyle';

const SearchBuku = ({ searchBuku, search, onChangeBukuSearch }) => {
  const classes = searchStyle();

  return (
    <div style={{ marginLeft: '197px', marginTop: '10px', marginBottom: '10px' }}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Cari Buku..."
          inputProps={{ 'arial-label': 'Search Buku' }}
          onChange={(e) => onChangeBukuSearch(e.target.value)}
          value={search}
        />
        <IconButton className={classes.iconButton} arial-label="search" onClick={() => searchBuku(search)}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

SearchBuku.propTypes = {
  searchBuku: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  onChangeBukuSearch: PropTypes.func.isRequired,
};

export default SearchBuku;
