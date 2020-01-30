/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import * as actionType from './dashboard-action-type';

const setLoadingAction = () => ({
  type: actionType.SET_LOADING_SISWA,
});

const openUpdateDataSiswaAction = () => ({
  type: actionType.OPEN_UPDATE_DATA_SISWA,
});

const closeUpdateDataSiswaAction = () => ({
  type: actionType.CLOSE_UPDATE_DATA_SISWA,
});

const selectKelasSiswaAction = (payload) => ({
  type: actionType.SELECT_KELAS_SISWA,
  payload,
});

const selectDateSiswaAction = (payload) => ({
  type: actionType.SELECT_DATE_SISWA,
  payload,
});

const setCurrentDataAction = (payload) => ({
  type: actionType.SET_CURRENT_DATA,
  payload,
});

const onChangeSiswaAction = (payload) => ({
  type: actionType.ON_CHANGE_SISWA,
  payload,
});

const openAddDataSiswaAction = () => ({
  type: actionType.OPEN_ADD_DATA_SISWA,
});

const closeAddDataSiswaAction = () => ({
  type: actionType.CLOSE_ADD_DATA_SISWA,
});

const onChangeAddAction = (payload) => ({
  type: actionType.ON_CHANGE_ADD,
  payload,
});

const onChangeAddKlsAction = (payload) => ({
  type: actionType.ON_CHANGE_ADD_KLS,
  payload,
});

const onChangeAddDateAction = (payload) => ({
  type: actionType.ON_CHANGE_ADD_DATE,
  payload,
});

const clearTextAction = () => ({
  type: actionType.CLEAR_TEXT,
});

export const openUpdateDataSiswa = () => (dispatch) => {
  dispatch(openUpdateDataSiswaAction());
};

export const closeUpdateDataSiswa = () => (dispatch) => {
  dispatch(closeUpdateDataSiswaAction());
};

export const selectKelasSiswa = (data) => (dispatch) => {
  console.log(data);
  dispatch(selectKelasSiswaAction(data));
};

export const selectDateSiswa = (data) => (dispatch) => {
  console.log(data);
  dispatch(selectDateSiswaAction(data));
};

export const setCurrentData = (data) => (dispatch) => {
  dispatch(setCurrentDataAction(data));
};

export const onChangeSiswa = (event) => (dispatch) => {
  dispatch(onChangeSiswaAction(event));
};

export const openAddDataSiswa = () => (dispatch) => {
  dispatch(openAddDataSiswaAction());
};

export const closeAddDataSiswa = () => (dispatch) => {
  dispatch(closeAddDataSiswaAction());
};

export const onChangeAdd = (event) => (dispatch) => {
  dispatch(onChangeAddAction(event));
};

export const onChangeAddKls = (data) => (dispatch) => {
  dispatch(onChangeAddKlsAction(data));
};

export const onChangeAddDate = (data) => (dispatch) => {
  dispatch(onChangeAddDateAction(data));
};

export const clearText = () => (dispatch) => {
  dispatch(clearTextAction());
};

export const getDataSiswa = () => async (dispatch) => {
  try {
    dispatch(setLoadingAction());
    const res = await fetch('http://localhost:4000/siswa');
    const data = await res.json();

    dispatch({
      type: actionType.GET_DATA_SISWA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteDataSiswa = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:4000/siswa/${id}`,
      {
        method: 'DELETE',
      });

    dispatch({
      type: actionType.DELETE_DATA_SISWA,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateDataSiswa = (item) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:4000/siswa/${item.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });

    const data = await res.json();

    dispatch({
      type: actionType.UPDATE_DATA_SISWA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addDataSiswa = (item) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/siswa/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: actionType.ADD_DATA_SISWA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
