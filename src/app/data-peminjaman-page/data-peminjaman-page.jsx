/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DataPeminjamanComponent from '../../modules/data-peminjaman/component/data-peminjaman-component';
import {
  getDataPeminjaman, searchDataPeminjaman, openAddDataPeminjaman,
  onChangeDate, onChangeDateTo, onChange, closeAddDataPeminjam, onClear,
  addDataPeminjam,
} from '../../modules/data-peminjaman/store/data-peminjaman-action';
import mapper from '../../modules/data-peminjaman/mapper/data-peminjaman-mapper';

const text = 'Data Peminjaman';
const titles = ['No Pinjam', 'Judul', 'Nama Siswa', 'Tgl Pinjam', 'Tgl Kembali', 'Terlambat', 'Kembali', 'Perpanjang'];

const DataPeminjamanPage = ({
  getDataPeminjaman, dataPeminjaman, searchDataPeminjaman,
  filtered, search, openAddDataPeminjaman, add, onChangeDate,
  dateFrom, onChangeDateTo, dateTo, onChange, no_pinjam,
  judul, nama_siswa, closeAddDataPeminjam, onClear, addDataPeminjam,
}) => {
  useEffect(() => {
    getDataPeminjaman();
  }, []);
  if (dataPeminjaman === null) {
    return <p style={{ textAlign: 'center', marginTop: '100px', fontStyle: 'bold' }}>Data Kosong</p>;
  }
  const closeAndClear = () => {
    closeAddDataPeminjam();
    onClear();
  };
  const addDataPeminjamBuku = () => {
    const data = {
      no_pinjam,
      judul,
      nama_siswa,
      dateFrom,
      dateTo,
    };

    addDataPeminjam(mapper.addDataPeminjam(data));
    closeAddDataPeminjam();
    onClear();
  };
  return (
    <DataPeminjamanComponent
      text={text}
      titles={titles}
      data={dataPeminjaman}
      searchDataPeminjaman={searchDataPeminjaman}
      filtered={filtered}
      search={search}
      openAddDataPeminjaman={openAddDataPeminjaman}
      add={add}
      onChangeDate={onChangeDate}
      dateFrom={dateFrom}
      onChangeDateTo={onChangeDateTo}
      dateTo={dateTo}
      onChange={onChange}
      no_pinjam={no_pinjam}
      judul={judul}
      nama_siswa={nama_siswa}
      closeAndClear={closeAndClear}
      addDataPeminjamBuku={addDataPeminjamBuku}
    />
  );
};

const mapStateToProps = (state) => ({
  ...state.dataPeminjaman,
});

const mapDispatchToProps = (() => ({
  getDataPeminjaman,
  searchDataPeminjaman,
  openAddDataPeminjaman,
  closeAddDataPeminjam,
  onChangeDate,
  onChangeDateTo,
  onChange,
  onClear,
  addDataPeminjam,
}))();

DataPeminjamanPage.propTypes = {
  getDataPeminjaman: PropTypes.func.isRequired,
  dataPeminjaman: PropTypes.array.isRequired,
  searchDataPeminjaman: PropTypes.func.isRequired,
  filtered: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  openAddDataPeminjaman: PropTypes.func.isRequired,
  add: PropTypes.bool.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  dateFrom: PropTypes.string.isRequired,
  onChangeDateTo: PropTypes.func.isRequired,
  dateTo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  no_pinjam: PropTypes.string.isRequired,
  judul: PropTypes.string.isRequired,
  nama_siswa: PropTypes.string.isRequired,
  closeAddDataPeminjam: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  addDataPeminjam: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataPeminjamanPage);
