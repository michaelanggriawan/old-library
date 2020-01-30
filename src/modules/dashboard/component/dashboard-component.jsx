/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

import DashboardInformasiComponent from './dashboard-informasi-component';
import DashboardTableComponent from './dashboard-table-component';

const header = 'DATA SISWA';
const titles = ['No', 'NISN', 'Nama', 'Tgl.Lahir', 'Kelas', 'Aksi'];
const mapTable = ['id', 'nisn', 'nama', 'tgl_lahir', 'kelas'];
const leftMargin = '243px';

const DashboardComponent = ({
  siswa, loading, deleteDataSiswa,
  open, closeUpdateDataSiswa, selectKelasSiswa, selectDateSiswa, onChangeSiswa,
  setCurrentData, currentData, dialogTitle, onUpdateDataSiswa, isWidth, text,
  openAddDataSiswa, add, closeAddDataSiswa, onChangeAdd, kls, nisn, nama, tgl_lahir,
  onChangeAddKls, onChangeAddDate, addData, totalBuku,
}) => (
  <div>
    <DashboardInformasiComponent text={text} siswa={siswa} total={totalBuku} />
    <DashboardTableComponent
      header={header}
      siswa={siswa}
      titles={titles}
      loading={loading}
      deleteDataSiswa={deleteDataSiswa}
      mapTable={mapTable}
      leftMargin={leftMargin}
      open={open}
      closeUpdateDataSiswa={closeUpdateDataSiswa}
      selectKelasSiswa={selectKelasSiswa}
      selectDateSiswa={selectDateSiswa}
      setCurrentData={setCurrentData}
      currentData={currentData}
      dialogTitle={dialogTitle}
      onChangeSiswa={onChangeSiswa}
      onUpdateDataSiswa={onUpdateDataSiswa}
      isWidth={isWidth}
      openAddDataSiswa={openAddDataSiswa}
      add={add}
      closeAddDataSiswa={closeAddDataSiswa}
      onChangeAdd={onChangeAdd}
      kls={kls}
      nisn={nisn}
      tgl_lahir={tgl_lahir}
      nama={nama}
      onChangeAddKls={onChangeAddKls}
      onChangeAddDate={onChangeAddDate}
      addData={addData}
    />
  </div>
);

DashboardComponent.propTypes = {
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
  text: PropTypes.string.isRequired,
  totalBuku: PropTypes.number.isRequired,
};

export default DashboardComponent;
