/* eslint-disable react/forbid-prop-types */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from '../date-picker/date-picker';
import SelectBox from '../select-box/select-box';

const Dialogue = ({
  open, closeUpdateDialog, selectData, currentData,
  selectDate, dialogTitle, onChangeData,
  onUpdateData,
}) => {
  const [validate, setValidate] = useState('');
  const [field, setField] = useState('');
  const isValidate = (data) => {
    const num = /^[0-9]*$/;
    if (currentData[dialogTitle[2]] === '') {
      setField('*Field harus di isi');
    } else if (currentData[dialogTitle[1]] === '') {
      setValidate('*Field harus di isi');
    } else if (!num.test(currentData[dialogTitle[1]])) {
      setValidate('NISN harus di isi angka');
    } else {
      onUpdateData(data);
      setValidate('');
      setField('');
    }
  };

  const isCancel = () => {
    setValidate('');
    setField('');
    closeUpdateDialog();
  };

  return (
    <div>
      <Dialog open={open} onClose={closeUpdateDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Data Siswa</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <span style={{ color: 'red' }}>{validate}</span>
            <TextField
              autoFocus
              margin="dense"
              id="nisn"
              label="NISN"
              type="text"
              onChange={onChangeData}
              value={currentData[dialogTitle[1]]}
              fullWidth
            />
            <span style={{ color: 'red' }}>{field}</span>
            <TextField
              autoFocus
              margin="dense"
              id="nama"
              label="Nama"
              type="text"
              onChange={onChangeData}
              value={currentData[dialogTitle[2]]}
              fullWidth
            />
            <DatePicker
              selectDate={selectDate}
              date={currentData[dialogTitle[3]]}
            />
            <SelectBox
              selectData={selectData}
              currentData={currentData[dialogTitle[4]]}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={isCancel} color="primary">
                Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              isValidate(currentData);
            }}
          >
                Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Dialogue.propTypes = {
  open: PropTypes.bool.isRequired,
  dialogTitle: PropTypes.array.isRequired,
  closeUpdateDialog: PropTypes.func.isRequired,
  selectDate: PropTypes.func.isRequired,
  onUpdateData: PropTypes.func.isRequired,
  selectData: PropTypes.func.isRequired,
  onChangeData: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
};

export default Dialogue;
