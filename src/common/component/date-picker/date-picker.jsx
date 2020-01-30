/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const DatePicker = ({ selectDate, date }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      margin="normal"
      id="date-picker-dialog"
      label="Date picker dialog"
      format="MM/dd/yyyy"
      value={new Date(date)}
      onChange={selectDate}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  </MuiPickersUtilsProvider>
);

export default DatePicker;
