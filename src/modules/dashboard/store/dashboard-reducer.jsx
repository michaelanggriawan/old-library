/* eslint-disable radix */
import * as actionType from './dashboard-action-type';

const initialState = {
  siswa: [],
  loading: true,
  open: false,
  kelas: '',
  currentData: {
    id: '',
    nisn: '',
    nama: '',
    tgl_lahir: '',
    kelas: '',
  },
  add: false,
  nisn: '',
  nama: '',
  tgl_lahir: '2014-08-18',
  kls: 'A1',
};

const handler = (currentState) => {
  const getDataSiswa = {
    getDataSiswaAction: (data) => ({ ...currentState, siswa: data }),
    setLoadingSiswaAction: () => ({ ...currentState, loading: false }),
    deleteDataSiswaAction: (id) => ({
      ...currentState, siswa: currentState.siswa.filter((item) => item.id !== id),
    }),
    updateDataSiswaAction: (data) => ({
      ...currentState,
      siswa: currentState.siswa.map((item) => (item.id === data.id ? data.id : item)),
      open: false,
    }),
    setCurrentDataAction: (data) => ({
      ...currentState,
      currentData: {
        id: data.id,
        nisn: parseInt(data.nisn),
        nama: data.nama,
        tgl_lahir: data.tgl_lahir,
        kelas: data.kelas,
      },
    }),
  };

  const openOrCloseUpdate = {
    openUpdateDataSiswa: () => ({ ...currentState, open: true }),
    closeUpdateDataSiswa: () => ({ ...currentState, open: false }),
    selectKelas: (data) => ({
      ...currentState,
      currentData: { ...currentState.currentData, kelas: data },
    }),
    selectDateSiswa: (data) => ({
      ...currentState,
      currentData: { ...currentState.currentData, tgl_lahir: data },
    }),
    onChangeSiswa: (event) => ({
      ...currentState,
      currentData: { ...currentState.currentData, [event.target.id]: event.target.value },
    }),
  };

  const addDataSiswa = {
    addDataSiswaAction: (data) => ({
      ...currentState,
      siswa: [...currentState.siswa, data],
    }),
    openAddDataSiswa: () => ({ ...currentState, add: true }),
    closeAddDataSiswa: () => ({ ...currentState, add: false }),
    onChangeAdd: (event) => ({ ...currentState, [event.target.id]: event.target.value }),
    onChangeAddKls: (data) => ({ ...currentState, kls: data }),
    onChangeAddDate: (data) => ({ ...currentState, tgl_lahir: data }),
    clearText: () => ({
      ...currentState,
      nisn: '',
      nama: '',
      kls: '',
    }),
  };

  return {
    ...getDataSiswa,
    ...openOrCloseUpdate,
    ...addDataSiswa,
  };
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.GET_DATA_SISWA:
      return handler(state).getDataSiswaAction(payload);
    case actionType.SET_LOADING_SISWA:
      return handler(state).setLoadingSiswaAction();
    case actionType.DELETE_DATA_SISWA:
      return handler(state).deleteDataSiswaAction(payload);
    case actionType.UPDATE_DATA_SISWA:
      return handler(state).updateDataSiswaAction(payload);
    case actionType.OPEN_UPDATE_DATA_SISWA:
      return handler(state).openUpdateDataSiswa();
    case actionType.CLOSE_UPDATE_DATA_SISWA:
      return handler(state).closeUpdateDataSiswa();
    case actionType.SELECT_KELAS_SISWA:
      return handler(state).selectKelas(payload);
    case actionType.SELECT_DATE_SISWA:
      return handler(state).selectDateSiswa(payload);
    case actionType.SET_CURRENT_DATA:
      return handler(state).setCurrentDataAction(payload);
    case actionType.ON_CHANGE_SISWA:
      return handler(state).onChangeSiswa(payload);
    case actionType.OPEN_ADD_DATA_SISWA:
      return handler(state).openAddDataSiswa();
    case actionType.CLOSE_ADD_DATA_SISWA:
      return handler(state).closeAddDataSiswa();
    case actionType.ON_CHANGE_ADD:
      return handler(state).onChangeAdd(payload);
    case actionType.ON_CHANGE_ADD_KLS:
      return handler(state).onChangeAddKls(payload);
    case actionType.ON_CHANGE_ADD_DATE:
      return handler(state).onChangeAddDate(payload);
    case actionType.CLEAR_TEXT:
      return handler(state).clearText();
    default:
      return state;
  }
};
