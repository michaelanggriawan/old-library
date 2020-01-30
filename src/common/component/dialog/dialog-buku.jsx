/* eslint-disable react/forbid-prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const Dialogue = ({
  open, closeUpdateDialog, currentData,
  dialogTitle, onChangeData,
  onUpdateData,
}) => (
  <div>
    <Dialog open={open} onClose={closeUpdateDialog} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Update Data Buku</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <TextField
            autoFocus
            margin="dense"
            id="judul"
            label="Judul"
            type="text"
            onChange={onChangeData}
            value={currentData[dialogTitle[1]]}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="pengarang"
            label="Pengarang"
            type="text"
            onChange={onChangeData}
            value={currentData[dialogTitle[2]]}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="penerbit"
            label="Penerbit"
            type="text"
            onChange={onChangeData}
            value={currentData[dialogTitle[3]]}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="jumlah_buku"
            label="Jumlah Buku"
            type="text"
            onChange={onChangeData}
            value={currentData[dialogTitle[4]]}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeUpdateDialog} color="primary">
                Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
            onUpdateData(currentData);
          }}
        >
                Submit
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

Dialogue.propTypes = {
  open: PropTypes.bool.isRequired,
  closeUpdateDialog: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
  dialogTitle: PropTypes.array.isRequired,
  onChangeData: PropTypes.func.isRequired,
  onUpdateData: PropTypes.func.isRequired,
};

export default Dialogue;
