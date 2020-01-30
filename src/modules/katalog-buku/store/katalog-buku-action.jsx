/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import * as actionType from './katalog-buku-actionType';

const setLoadingBukuAction = () => ({
  type: actionType.SET_LOADING_BUKU,
});

const setCurrentDataAction = (payload) => ({
  type: actionType.SET_CURRENT_DATA,
  payload,
});

const onChangeBukuAction = (payload) => ({
  type: actionType.CHANGE_UPDATE_BUKU,
  payload,
});

const onChangeAddBukuAction = (payload) => ({
  type: actionType.CHANGE_ADD_BUKU,
  payload,
});

const closeAddBukuAction = () => ({
  type: actionType.CLOSE_ADD_BUKU,
});

const openAddBukuAction = () => ({
  type: actionType.OPEN_ADD_BUKU,
});

const onChangeBukuSearchAction = (payload) => ({
  type: actionType.ON_CHANGE_BUKU,
  payload,
});

const getTotalBukuAction = () => ({
  type: actionType.GET_TOTAL_BUKU,
});

export const setCurrentData = (data) => (dispatch) => {
  dispatch(setCurrentDataAction(data));
};

export const onChangeBuku = (data) => (dispatch) => {
  dispatch(onChangeBukuAction(data));
};

export const onChangeAddBuku = (data) => (dispatch) => {
  dispatch(onChangeAddBukuAction(data));
};

export const closeAddBuku = () => (dispatch) => {
  dispatch(closeAddBukuAction());
};

export const openAddBuku = () => (dispatch) => {
  dispatch(openAddBukuAction());
};

export const onChangeBukuSearch = (event) => (dispatch) => {
  dispatch(onChangeBukuSearchAction(event));
};

export const getTotalBuku = () => (dispatch) => {
  dispatch(getTotalBukuAction());
};

export const getDataBuku = () => async (dispatch) => {
  try {
    dispatch(setLoadingBukuAction());
    const res = await fetch('http://localhost:4000/katalog_buku');
    const data = await res.json();

    dispatch({
      type: actionType.GET_KATALOG_BUKU,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBuku = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:4000/katalog_buku/${id}`,
      {
        method: 'DELETE',
      });

    dispatch({
      type: actionType.DELETE_BUKU,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateDataBuku = (item) => async (dispatch) => {
  console.log(item);
  try {
    const res = await fetch(`http://localhost:4000/katalog_buku/${item.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });

    const data = await res.json();

    dispatch({
      type: actionType.UPDATE_DATA_BUKU,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addDataBuku = (item) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/katalog_buku/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: actionType.ADD_DATA_BUKU,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchBuku = (text) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.SEARCH_BUKU,
      payload: text,
    });
  } catch (err) {
    console.log(err);
  }
};
