import * as actionType from './data-peminjaman-actionType';

const initialState = {
  dataPeminjaman: null,
  filtered: null,
  search: '',
  add: false,
  dateFrom: '2014-08-18',
  dateTo: '2014-08-18',
  no_pinjam: '',
  judul: '',
  nama_siswa: '',
  terlambat: '',
};

const handler = (currentState) => {
  const dataPeminjamanBuku = {
    getDataBuku: (data) => ({ ...currentState, dataPeminjaman: data }),
    searchDataPeminjamanBuku: (data) => ({
      ...currentState,
      search: data,
      filtered: currentState.dataPeminjaman.filter((item) => {
        const regex = new RegExp(`${data}`, 'gi');
        return item.judul.match(regex) || item.nama_siswa.match(regex);
      }),
    }),
    openAddDataPeminjam: () => ({ ...currentState, add: true }),
    closeAddDataPeminjam: () => ({ ...currentState, add: false }),
    onChangeDate: (data) => ({ ...currentState, dateFrom: data }),
    onChangeDateTo: (data) => ({ ...currentState, dateTo: data }),
    onChange: (e) => ({ ...currentState, [e.target.id]: e.target.value }),
    onClear: () => ({
      ...currentState,
      no_pinjam: '',
      judul: '',
      nama_siswa: '',
    }),
    addDataPeminjaman: (data) => ({
      ...currentState,
      dataPeminjaman: [...currentState.dataPeminjaman, data],
    }),
  };

  return {
    ...dataPeminjamanBuku,
  };
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.GET_DATA_PEMINJAMAN:
      return handler(state).getDataBuku(payload);
    case actionType.SEARCH_DATA_PEMINJAMAN:
      return handler(state).searchDataPeminjamanBuku(payload);
    case actionType.OPEN_ADD_DATA_PEMINJAM:
      return handler(state).openAddDataPeminjam();
    case actionType.CLOSE_ADD_DATA_PEMINJAM:
      return handler(state).closeAddDataPeminjam();
    case actionType.ON_CHANGE_DATE:
      return handler(state).onChangeDate(payload);
    case actionType.ON_CHANGE_DATE_T0:
      return handler(state).onChangeDateTo(payload);
    case actionType.ON_CHANGE:
      return handler(state).onChange(payload);
    case actionType.ON_CLEAR:
      return handler(state).onClear();
    case actionType.ADD_DATA_PEMINJAMAN:
      return handler(state).addDataPeminjaman(payload);
    default:
      return state;
  }
};
