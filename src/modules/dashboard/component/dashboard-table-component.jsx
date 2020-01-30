/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import PeopleIcon from '@material-ui/icons/People';
import CustomTablePagination from '../../../common/component/table/custom-table-pagination';
import Dialogue from '../../../common/component/dialog/dialog-dashboard';
import DialogueAddSiswa from '../../../common/component/dialog/dialog-add-siswa';

const DashboardTableComponent = ({
  header, siswa, titles, loading,
  deleteDataSiswa, mapTable, leftMargin,
  open, closeUpdateDataSiswa, selectKelasSiswa, selectDateSiswa, onChangeSiswa,
  setCurrentData, currentData, dialogTitle, onUpdateDataSiswa, isWidth,
  openAddDataSiswa, add, closeAddDataSiswa, nisn, tgl_lahir, kls, nama,
  onChangeAddKls, onChangeAdd, onChangeAddDate, addData,
}) => (
  <>
    <Dialogue
      open={open}
      closeUpdateDialog={closeUpdateDataSiswa}
      selectData={selectKelasSiswa}
      currentData={currentData}
      selectDate={selectDateSiswa}
      dialogTitle={dialogTitle}
      onChangeData={onChangeSiswa}
      onUpdateData={onUpdateDataSiswa}
    />
    <DialogueAddSiswa
      open={add}
      closeAddDataSiswa={closeAddDataSiswa}
      nisn={nisn}
      tgl_lahir={tgl_lahir}
      kls={kls}
      nama={nama}
      onChangeAddKls={onChangeAddKls}
      onChangeAdd={onChangeAdd}
      onChangeAddDate={onChangeAddDate}
      addData={addData}
    />
    <CustomTablePagination
      header={header}
      Icon={PeopleIcon}
      data={siswa}
      titles={titles}
      loading={loading}
      remove={deleteDataSiswa}
      mapTable={mapTable}
      leftMargin={leftMargin}
      setCurrentData={setCurrentData}
      isWidth={isWidth}
      openAddData={openAddDataSiswa}
    />
  </>
);

DashboardTableComponent.propTypes = {
  header: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired,
  mapTable: PropTypes.array.isRequired,
  leftMargin: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  siswa: PropTypes.array.isRequired,
  deleteDataSiswa: PropTypes.func.isRequired,
  closeUpdateDataSiswa: PropTypes.func.isRequired,
  selectKelasSiswa: PropTypes.func.isRequired,
  selectDateSiswa: PropTypes.func.isRequired,
  onChangeAdd: PropTypes.func.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  kls: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
  nisn: PropTypes.string.isRequired,
  tgl_lahir: PropTypes.string.isRequired,
  currentData: PropTypes.object.isRequired,
  closeAddDataSiswa: PropTypes.func.isRequired,
  onChangeAddDate: PropTypes.func.isRequired,
  onChangeSiswa: PropTypes.func.isRequired,
  onChangeAddKls: PropTypes.func.isRequired,
  openAddDataSiswa: PropTypes.func.isRequired,
  add: PropTypes.bool.isRequired,
  dialogTitle: PropTypes.array.isRequired,
  addData: PropTypes.func.isRequired,
  onUpdateDataSiswa: PropTypes.func.isRequired,
  isWidth: PropTypes.string.isRequired,
};

export default DashboardTableComponent;
