/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import * as actionType from './data-peminjaman-actionType';

const searchDataPeminjamanAction = (payload) => ({
  type: actionType.SEARCH_DATA_PEMINJAMAN,
  payload,
});

const openAddDataPeminjamAction = () => ({
  type: actionType.OPEN_ADD_DATA_PEMINJAM,
});

const closeAddDataPeminjamAction = () => ({
  type: actionType.CLOSE_ADD_DATA_PEMINJAM,
});

const onChangeDateAction = (payload) => ({
  type: actionType.ON_CHANGE_DATE,
  payload,
});

const onChangeDateToAction = (payload) => ({
  type: actionType.ON_CHANGE_DATE_T0,
  payload,
});

const onChangeAction = (payload) => ({
  type: actionType.ON_CHANGE,
  payload,
});

const onClearAction = () => ({
  type: actionType.ON_CLEAR,
});

export const searchDataPeminjaman = (data) => async (dispatch) => {
  dispatch(searchDataPeminjamanAction(data));
};

export const openAddDataPeminjaman = () => async (dispatch) => {
  dispatch(openAddDataPeminjamAction());
};

export const closeAddDataPeminjam = () => async (dispatch) => {
  dispatch(closeAddDataPeminjamAction());
};

export const onChangeDate = (data) => async (dispatch) => {
  dispatch(onChangeDateAction(data));
};

export const onChangeDateTo = (data) => async (dispatch) => {
  console.log(data);
  dispatch(onChangeDateToAction(data));
};

export const onChange = (data) => async (dispatch) => {
  dispatch(onChangeAction(data));
};

export const onClear = () => async (dispatch) => {
  dispatch(onClearAction(onClear));
};

export const getDataPeminjaman = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/data_peminjaman');
    const data = await res.json();
    console.log(data);
    dispatch({
      type: actionType.GET_DATA_PEMINJAMAN,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addDataPeminjam = (item) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/data_peminjaman/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: actionType.ADD_DATA_PEMINJAMAN,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
