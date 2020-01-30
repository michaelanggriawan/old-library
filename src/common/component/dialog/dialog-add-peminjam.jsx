/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from '../date-picker/date-picker';
// import PropTypes from 'prop-types';

const Dialogue = ({
  open, onChangeDate, dateFrom,
  onChangeDateTo, dateTo, onChangeAdd, no_pinjam,
  judul, nama_siswa, closeAndClear, addDataPeminjamBuku,
}) => {
  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tambah Data Peminjam</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              id="no_pinjam"
              label="nomor peminjam"
              type="text"
              fullWidth
              onChange={onChangeAdd}
              value={no_pinjam}
            />
            <TextField
              autoFocus
              margin="dense"
              id="judul"
              label="judul"
              type="text"
              fullWidth
              onChange={onChangeAdd}
              value={judul}
            />
            <TextField
              autoFocus
              margin="dense"
              id="nama_siswa"
              label="nama siswa"
              type="text"
              fullWidth
              onChange={onChangeAdd}
              value={nama_siswa}
            />
            <DatePicker
              selectDate={onChangeDate}
              date={dateFrom}
            />
            {' '}
            <DatePicker
              selectDate={onChangeDateTo}
              date={dateTo}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeAndClear()} color="primary">
                Cancel
          </Button>
          <Button
            onClick={addDataPeminjamBuku}
            color="primary"
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
  onChangeDate: PropTypes.func.isRequired,
  dateFrom: PropTypes.string.isRequired,
  onChangeDateTo: PropTypes.func.isRequired,
  dateTo: PropTypes.string.isRequired,
  onChangeAdd: PropTypes.func.isRequired,
  no_pinjam: PropTypes.string.isRequired,
  judul: PropTypes.string.isRequired,
  nama_siswa: PropTypes.string.isRequired,
  closeAndClear: PropTypes.func.isRequired,
};

export default Dialogue;
