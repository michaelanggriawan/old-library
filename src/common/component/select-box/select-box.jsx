/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectBox = ({ currentData, selectData }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="true">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Select Kelas</InputLabel>
        <Select
          value={currentData}
          onChange={(event) => { selectData(event.target.value); }}
          inputProps={{
            name: 'kelas',
            id: 'kls',
          }}
        >
          <MenuItem value="A1">A1</MenuItem>
          <MenuItem value="A2">A2</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default SelectBox;
