/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { SidebarStyle, dashboardStyle } from '../../../common/component/globalStyle';
import TopHeader from '../../../common/component/top-header/top-header';
import SearchDataPeminjam from '../../../common/component/search/search-data-peminjaman';
import CustomTablePaginationTransaksi from '../../../common/component/table/custom-table-pagination-transaksi';
import DialogAddPeminjam from '../../../common/component/dialog/dialog-add-peminjam';

const DataPeminjamanComponent = ({
  text, titles, data, searchDataPeminjaman,
  filtered, search, add, openAddDataPeminjaman,
  onChangeDate, dateFrom, onChangeDateTo, dateTo,
  onChange, no_pinjam, judul, nama_siswa, closeAndClear,
  addDataPeminjamBuku,
}) => {
  const sideBar = SidebarStyle();
  const classes = dashboardStyle();
  return (
    <>
      <div className={sideBar.toolbar} style={{ marginTop: '10px' }} />
      <Grid container={classes.root} spacing={2} style={{ marginLeft: '50px' }}>
        <TopHeader text={text} />
        <SearchDataPeminjam searchDataPeminjaman={searchDataPeminjaman} />
        <DialogAddPeminjam
          open={add}
          onChangeDate={onChangeDate}
          dateFrom={dateFrom}
          onChangeDateTo={onChangeDateTo}
          dateTo={dateTo}
          onChangeAdd={onChange}
          no_pinjam={no_pinjam}
          judul={judul}
          nama_siswa={nama_siswa}
          closeAndClear={closeAndClear}
          addDataPeminjamBuku={addDataPeminjamBuku}
        />
        <div style={{ marginTop: '10px', marginLeft: '-4px' }}>
          <CustomTablePaginationTransaksi
            titles={titles}
            data={data}
            filtered={filtered}
            search={search}
            openAdd={openAddDataPeminjaman}
          />
        </div>
      </Grid>
    </>
  );
};

DataPeminjamanComponent.propTypes = {
  data: PropTypes.array.isRequired,
  searchDataPeminjaman: PropTypes.func.isRequired,
  filtered: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  openAddDataPeminjaman: PropTypes.func.isRequired,
  add: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  onChangeDateTo: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  no_pinjam: PropTypes.string.isRequired,
  judul: PropTypes.string.isRequired,
  nama_siswa: PropTypes.string.isRequired,
  closeAndClear: PropTypes.func.isRequired,
  addDataPeminjamBuku: PropTypes.func.isRequired,
};

export default DataPeminjamanComponent;
