/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mapper from '../../modules/dashboard/mapper/dashboard-mapper';
import {
  getDataSiswa, deleteDataSiswa, updateDataSiswa, openUpdateDataSiswa, closeUpdateDataSiswa,
  selectKelasSiswa, selectDateSiswa, setCurrentData, onChangeSiswa, closeAddDataSiswa,
  openAddDataSiswa, onChangeAdd, onChangeAddKls, onChangeAddDate, addDataSiswa, clearText,
} from '../../modules/dashboard/store/dashboard-action';

import { getDataBuku, getTotalBuku } from '../../modules/katalog-buku/store/katalog-buku-action';

import DashboardComponent from '../../modules/dashboard/component/dashboard-component';

const dialogTitle = ['id', 'nisn', 'nama', 'tgl_lahir', 'kelas'];
const isWidth = '87%';
const text = 'Selamat Datang Di Buku Pintar';
const DashboardPage = ({
  open, getDataSiswa, siswa, loading,
  deleteDataSiswa, openUpdateDataSiswa, closeUpdateDataSiswa,
  selectKelasSiswa, selectDateSiswa, date, updateDataSiswa,
  setCurrentData, currentData, onChangeSiswa, openAddDataSiswa, add,
  closeAddDataSiswa, kls, nisn, nama, tgl_lahir, onChangeAddKls,
  onChangeAddDate, onChangeAdd, addDataSiswa, clearText, getDataBuku,
  getTotalBuku, totalBuku,
}) => {
  useEffect(() => {
    getDataSiswa();
    getDataBuku();
    getTotalBuku();
  }, [siswa]);
  const handleGetCurrentData = (data) => {
    openUpdateDataSiswa();
    setCurrentData(data);
  };

  const onUpdateDataSiswa = (data) => {
    updateDataSiswa(mapper.updateDataSiswa(data));
  };

  const addData = () => {
    const dep = {
      id: siswa.length + 1,
      nama,
      nisn,
      tgl_lahir,
      kls,
    };
    closeAddDataSiswa();
    addDataSiswa(mapper.addDataSiswa(dep));
    clearText();
  };
  return (
    <DashboardComponent
      open={open}
      siswa={siswa}
      loading={loading}
      deleteDataSiswa={deleteDataSiswa}
      updateDataSiswa={updateDataSiswa}
      closeUpdateDataSiswa={closeUpdateDataSiswa}
      selectKelasSiswa={selectKelasSiswa}
      selectDateSiswa={selectDateSiswa}
      date={date}
      setCurrentData={handleGetCurrentData}
      currentData={currentData}
      dialogTitle={dialogTitle}
      onChangeSiswa={onChangeSiswa}
      onUpdateDataSiswa={onUpdateDataSiswa}
      isWidth={isWidth}
      text={text}
      openAddDataSiswa={openAddDataSiswa}
      add={add}
      closeAddDataSiswa={closeAddDataSiswa}
      onChangeAdd={onChangeAdd}
      kls={kls}
      tgl_lahir={tgl_lahir}
      nama={nama}
      nisn={nisn}
      onChangeAddKls={onChangeAddKls}
      onChangeAddDate={onChangeAddDate}
      addData={addData}
      totalBuku={totalBuku}
    />
  );
};

const mapStateToProps = (state) => ({
  ...state.katalogBuku,
  ...state.sidebar,
  ...state.dashboard,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = ((dispatch) => ({
  getDataSiswa,
  deleteDataSiswa,
  updateDataSiswa,
  openUpdateDataSiswa,
  closeUpdateDataSiswa,
  selectKelasSiswa,
  selectDateSiswa,
  setCurrentData,
  onChangeSiswa,
  closeAddDataSiswa,
  openAddDataSiswa,
  onChangeAdd,
  onChangeAddKls,
  onChangeAddDate,
  addDataSiswa,
  clearText,
  getDataBuku,
  getTotalBuku,
}))();

DashboardPage.propTypes = {
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  siswa: PropTypes.array.isRequired,
  getDataSiswa: PropTypes.func.isRequired,
  deleteDataSiswa: PropTypes.func.isRequired,
  openUpdateDataSiswa: PropTypes.func.isRequired,
  closeUpdateDataSiswa: PropTypes.func.isRequired,
  selectKelasSiswa: PropTypes.func.isRequired,
  selectDateSiswa: PropTypes.func.isRequired,
  onChangeAdd: PropTypes.func.isRequired,
  date: PropTypes.string,
  setCurrentData: PropTypes.func.isRequired,
  addDataSiswa: PropTypes.func.isRequired,
  kls: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
  nisn: PropTypes.string.isRequired,
  tgl_lahir: PropTypes.string.isRequired,
  currentData: PropTypes.object.isRequired,
  closeAddDataSiswa: PropTypes.func.isRequired,
  updateDataSiswa: PropTypes.func.isRequired,
  onChangeAddDate: PropTypes.func.isRequired,
  onChangeSiswa: PropTypes.func.isRequired,
  onChangeAddKls: PropTypes.func.isRequired,
  openAddDataSiswa: PropTypes.func.isRequired,
  clearText: PropTypes.func.isRequired,
  add: PropTypes.bool.isRequired,
  getDataBuku: PropTypes.func.isRequired,
  getTotalBuku: PropTypes.func.isRequired,
  totalBuku: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
