/* eslint-disable camelcase */
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
  open, nama, nisn, onChangeAddKls,
  closeAddDataSiswa, onChangeAddDate,
  kls, tgl_lahir, onChangeAdd, addData,
// eslint-disable-next-line arrow-body-style
}) => {
  const [validate, setValidate] = useState('');
  const [field, setField] = useState('');
  const isValidate = () => {
    const num = /^[0-9]*$/;
    if (nama === '') {
      setField('*Field harus di isi');
    } else if (nisn === '') {
      setValidate('*Field harus di isi');
    } else if (!num.test(nisn)) {
      setValidate('NISN harus di isi angka');
    } else {
      addData();
      setValidate('');
      setField('');
    }
  };

  const isCancel = () => {
    setValidate('');
    setField('');
    closeAddDataSiswa();
  };

  return (
    <div>
      <Dialog open={open} onClose={closeAddDataSiswa} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Data Siswa</DialogTitle>
        <DialogContent>
          <form onSubmit={addData}>
            <spans style={{ color: 'red' }}>{ validate }</spans>
            <TextField
              autoFocus
              margin="dense"
              id="nisn"
              value={nisn}
              label="NISN"
              type="text"
              onChange={onChangeAdd}
              fullWidth
            />
            <spans style={{ color: 'red' }}>{ field }</spans>
            <TextField
              autoFocus
              margin="dense"
              id="nama"
              label="Nama"
              type="text"
              value={nama}
              onChange={onChangeAdd}
              fullWidth
            />
            <DatePicker
              selectDate={onChangeAddDate}
              date={tgl_lahir}
            />
            <SelectBox
              selectData={onChangeAddKls}
              currentData={kls}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={isCancel} color="primary">
                Cancel
          </Button>
          <Button
            color="primary"
            onClick={isValidate}
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
  nama: PropTypes.string.isRequired,
  nisn: PropTypes.string.isRequired,
  kls: PropTypes.string.isRequired,
  onChangeAddKls: PropTypes.func.isRequired,
  closeAddDataSiswa: PropTypes.func.isRequired,
  onChangeAddDate: PropTypes.func.isRequired,
  tgl_lahir: PropTypes.string.isRequired,
  onChangeAdd: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
};

export default Dialogue;
