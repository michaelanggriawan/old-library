/* eslint-disable max-len */
import * as actionType from './katalog-buku-actionType';

const initialState = {
  katalog_buku: [],
  loading: true,
  open: false,
  currentData: {
    id: '',
    judul: '',
    pengarang: '',
    penerbit: '',
    jumlah_buku: '',
  },
  judul: '',
  pengarang: '',
  penerbit: '',
  jumlah_buku: '',
  add: false,
  search: '',
  totalBuku: 0,
};


const handler = (currentState) => {
  const katalogBuku = {
    getKatalogBuku: (data) => ({ ...currentState, katalog_buku: data }),
    setLoadingBuku: () => ({ ...currentState, loading: false }),
    deleteBukuAction: (id) => ({
      ...currentState, katalog_buku: currentState.katalog_buku.filter((item) => item.id !== id),
    }),
    setCurrenDataAction: (data) => ({
      ...currentState,
      currentData: {
        id: data.id,
        judul: data.judul,
        pengarang: data.pengarang,
        penerbit: data.penerbit,
        jumlah_buku: data.jumlah_buku,
      },
    }),
    onChangeBukuAction: (event) => ({
      ...currentState,
      currentData: { ...currentState.currentData, [event.target.id]: event.target.value },
    }),
    updateDataBukuAction: (data) => ({
      ...currentState,
      katalog_buku: currentState.katalog_buku.map((item) => (item.id === data.id ? data.id : item)),
      open: false,
    }),
    onChangeAddBuku: (event) => ({ ...currentState, [event.target.id]: event.target.value }),
    closeAddBuku: () => ({ ...currentState, add: false }),
    openAddBuku: () => ({ ...currentState, add: true }),
    addDataBuku: (data) => ({
      ...currentState,
      katalog_buku: [...currentState.katalog_buku, data],
    }),
    searchBuku: (data) => ({
      ...currentState,
      katalog_buku: currentState.katalog_buku.filter((buku) => {
        const regex = new RegExp(`${data}`, 'gi');
        return buku.judul.match(regex) || buku.pengarang.match(regex);
      }),
    }),
    onChangeSearchBuku: (event) => ({ ...currentState, search: event }),
    getTotalBuku: () => ({
      ...currentState,
      // eslint-disable-next-line radix
      totalBuku: currentState.katalog_buku.reduce((acc, val) => parseInt(acc) + parseInt(val.jumlah_buku), 0),
    }),
  };

  return {
    ...katalogBuku,
  };
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.GET_KATALOG_BUKU:
      return handler(state).getKatalogBuku(payload);
    case actionType.SET_LOADING_BUKU:
      return handler(state).setLoadingBuku(payload);
    case actionType.SET_CURRENT_DATA:
      return handler(state).setCurrenDataAction(payload);
    case actionType.DELETE_BUKU:
      return handler(state).deleteBukuAction(payload);
    case actionType.CHANGE_UPDATE_BUKU:
      return handler(state).onChangeBukuAction(payload);
    case actionType.UPDATE_DATA_BUKU:
      return handler(state).updateDataBukuAction(payload);
    case actionType.CHANGE_ADD_BUKU:
      return handler(state).onChangeAddBuku(payload);
    case actionType.CLOSE_ADD_BUKU:
      return handler(state).closeAddBuku();
    case actionType.OPEN_ADD_BUKU:
      return handler(state).openAddBuku();
    case actionType.ADD_DATA_BUKU:
      return handler(state).addDataBuku(payload);
    case actionType.SEARCH_BUKU:
      return handler(state).searchBuku(payload);
    case actionType.ON_CHANGE_BUKU:
      return handler(state).onChangeSearchBuku(payload);
    case actionType.GET_TOTAL_BUKU:
      return handler(state).getTotalBuku();
    default:
      return state;
  }
};
