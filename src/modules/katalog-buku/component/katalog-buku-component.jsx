/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { SidebarStyle, dashboardStyle } from '../../../common/component/globalStyle';
import CustomTablePagination from '../../../common/component/table/custom-table-pagination';
import DialogBuku from '../../../common/component/dialog/dialog-buku';
import TopHeader from '../../../common/component/top-header/top-header';
import DialogAddBuku from '../../../common/component/dialog/dialog-add-buku';
import SearchBuku from '../../../common/component/search/search-buku';
// import FormControl from '@material-ui/core/FormControl';

const KatalogBukuComponent = ({
  header, titles, mapTable,
  leftMargin, katalog_buku, loading,
  setCurrentData, remove, isWidth,
  text, open, onChangeBuku, currentData,
  updateDataBuku, closeBuku, onChangeAddBuku,
  closeAddBuku, openAddBuku, add, judul, pengarang,
  penerbit, jumlah_buku, addDataBuku, searchBuku,
  onChangeBukuSearch, search,
}) => {
  const sideBar = SidebarStyle();
  const classes = dashboardStyle();
  return (
    <>
      <div className={sideBar.toolbar} style={{ marginTop: '10px' }} />
      <Grid container={classes.root} spacing={2} style={{ marginLeft: '50px' }}>
        <TopHeader text={text} />
        <SearchBuku
          searchBuku={searchBuku}
          search={search}
          onChangeBukuSearch={onChangeBukuSearch}
        />
        <DialogBuku
          dialogTitle={mapTable}
          onChangeData={onChangeBuku}
          open={open}
          currentData={currentData}
          onUpdateData={updateDataBuku}
          closeUpdateDialog={closeBuku}
        />
        <DialogAddBuku
          open={add}
          onChangeData={onChangeAddBuku}
          closeAddBuku={closeAddBuku}
          penerbit={penerbit}
          jumlah_buku={jumlah_buku}
          judul={judul}
          pengarang={pengarang}
          addDataBuku={addDataBuku}
          katalog_buku={katalog_buku}
        />
        <div style={{ marginTop: '10px', marginLeft: '-4px' }}>
          <CustomTablePagination
            header={header}
            titles={titles}
            Icon={LocalLibraryIcon}
            mapTable={mapTable}
            leftMargin={leftMargin}
            loading={loading}
            data={katalog_buku}
            remove={remove}
            isWidth={isWidth}
            setCurrentData={setCurrentData}
            openAddData={openAddBuku}
          />
        </div>
      </Grid>
    </>
  );
};

KatalogBukuComponent.propTypes = {
  header: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired,
  mapTable: PropTypes.array.isRequired,
  leftMargin: PropTypes.string.isRequired,
  katalog_buku: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  isWidth: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onChangeBuku: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
  updateDataBuku: PropTypes.func.isRequired,
  closeBuku: PropTypes.func.isRequired,
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
  search: PropTypes.string.isRequired,
  onChangeBukuSearch: PropTypes.func.isRequired,
};

export default KatalogBukuComponent;
