/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import mapper from '../../../modules/katalog-buku/mapper/katalog-buku-mapper';
// import PropTypes from 'prop-types';

const Dialogue = ({
  open, onChangeData, closeAddBuku,
  judul, penerbit, pengarang, jumlah_buku,
  katalog_buku, addDataBuku,
}) => {
  const [validate, setValidate] = useState('');
  const [nums, setNums] = useState('');
  const isValidate = () => {
    const buku = {
      id: katalog_buku.length + 1,
      judul,
      pengarang,
      penerbit,
      jumlah_buku,
    };
    const num = /^[0-9]*$/;
    if (judul === '' || pengarang === '' || jumlah_buku === '' || penerbit === '') {
      setValidate('*Field harus di isi');
    } else if (!num.test(jumlah_buku)) {
      setNums('Hanya Angka');
    } else {
      addDataBuku(mapper.addDataBuku(buku));
      setValidate('');
      setNums('');
    }
  };

  const isCancel = () => {
    closeAddBuku('');
    setNums('');
    setValidate('');
  };
  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tambah Data Buku</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              id="judul"
              label="Judul"
              type="text"
              onChange={onChangeData}
              value={judul}
              fullWidth
            />
            <span style={{ color: 'red' }}>{validate}</span>
            <TextField
              autoFocus
              margin="dense"
              id="pengarang"
              label="Pengarang"
              type="text"
              onChange={onChangeData}
              value={pengarang}
              fullWidth
            />
            <span style={{ color: 'red' }}>{validate}</span>
            <TextField
              autoFocus
              margin="dense"
              id="penerbit"
              label="Penerbit"
              type="text"
              onChange={onChangeData}
              value={penerbit}
              fullWidth
            />
            <span style={{ color: 'red' }}>{validate}</span>
            <TextField
              autoFocus
              margin="dense"
              id="jumlah_buku"
              label="Jumlah Buku"
              type="text"
              onChange={onChangeData}
              value={jumlah_buku}
              fullWidth
            />
            <span style={{ color: 'red' }}>{nums === '' ? validate : nums}</span>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={isCancel} color="primary">
                Cancel
          </Button>
          <Button
            onClick={isValidate}
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
  onChangeData: PropTypes.func.isRequired,
  closeAddBuku: PropTypes.func.isRequired,
  judul: PropTypes.string.isRequired,
  pengarang: PropTypes.string.isRequired,
  penerbit: PropTypes.string.isRequired,
  jumlah_buku: PropTypes.string.isRequired,
  katalog_buku: PropTypes.array.isRequired,
  addDataBuku: PropTypes.func.isRequired,
};

export default Dialogue;
