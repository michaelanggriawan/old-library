/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import KatalogBukuComponent from '../../modules/katalog-buku/component/katalog-buku-component';
import {
  getDataBuku, setCurrentData, deleteBuku, onChangeBuku,
  updateDataBuku, onChangeAddBuku, closeAddBuku, openAddBuku,
  addDataBuku, searchBuku, onChangeBukuSearch,
} from '../../modules/katalog-buku/store/katalog-buku-action';
import mapper from '../../modules/katalog-buku/mapper/katalog-buku-mapper';

const header = 'KATALOG BUKU';
const titles = ['No', 'Judul', 'Pengarang', 'Penerbit', 'Jumlah Buku', 'Aksi'];
const mapTable = ['id', 'judul', 'pengarang', 'penerbit', 'jumlah_buku'];
const leftMargin = '200px';
const isWidth = '100%';
const text = 'Katalog Buku';
const KatalogBukuPage = ({
  getDataBuku, loading, katalog_buku,
  setCurrentData, deleteBuku, onChangeBuku,
  currentData, updateDataBuku, onChangeAddBuku,
  closeAddBuku, openAddBuku, add, judul, pengarang,
  penerbit, jumlah_buku, addDataBuku, searchBuku,
  onChangeBukuSearch, search,
}) => {
  useEffect(() => {
    getDataBuku();
  }, [katalog_buku]);

  const [open, setOpen] = useState(false);
  const updateData = (data) => {
    updateDataBuku(mapper.updateDataBuku(data));
    setOpen(false);
  };

  const handleGetCurrentData = (data) => {
    setOpen(true);
    setCurrentData(data);
  };

  const closeBuku = () => {
    setOpen(false);
  };
  if (katalog_buku === null) {
    return <p> No data at all </p>;
  }
  return (
    <KatalogBukuComponent
      header={header}
      titles={titles}
      mapTable={mapTable}
      leftMargin={leftMargin}
      loading={loading}
      katalog_buku={katalog_buku}
      setCurrentData={handleGetCurrentData}
      remove={deleteBuku}
      isWidth={isWidth}
      text={text}
      onChangeBuku={onChangeBuku}
      open={open}
      currentData={currentData}
      updateDataBuku={updateData}
      closeBuku={closeBuku}
      onChangeAddBuku={onChangeAddBuku}
      openAddBuku={openAddBuku}
      closeAddBuku={closeAddBuku}
      add={add}
      penerbit={penerbit}
      jumlah_buku={jumlah_buku}
      judul={judul}
      pengarang={pengarang}
      addDataBuku={addDataBuku}
      searchBuku={searchBuku}
      onChangeBukuSearch={onChangeBukuSearch}
      search={search}
    />
  );
};

const mapStateToProps = (state) => ({
  ...state.katalogBuku,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = ((dispatch) => ({
  getDataBuku,
  setCurrentData,
  deleteBuku,
  onChangeBuku,
  updateDataBuku,
  onChangeAddBuku,
  closeAddBuku,
  openAddBuku,
  addDataBuku,
  searchBuku,
  onChangeBukuSearch,
}))();

KatalogBukuPage.propTypes = {
  getDataBuku: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  katalog_buku: PropTypes.array.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  deleteBuku: PropTypes.func.isRequired,
  onChangeBuku: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
  updateDataBuku: PropTypes.func.isRequired,
  onChangeAddBuku: PropTypes.func.isRequired,
  closeAddBuku: PropTypes.func.isRequired,
  openAddBuku: PropTypes.func.isRequired,
  add: PropTypes.bool.isRequired,
  judul: PropTypes.string.isRequired,
  pengarang: PropTypes.string.isRequired,
  penerbit: PropTypes.string.isRequired,
  jumlah_buku: PropTypes.string.isRequired,
  addDataBuku: PropTypes.func.isRequired,
  searchBuku: PropTypes.func.isRequired,
  onChangeBukuSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(KatalogBukuPage);
