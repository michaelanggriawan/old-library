/* eslint-disable import/prefer-default-export */
import * as actionType from './sidebar-action-type';

const handleDrawerToggleAction = () => ({
  type: actionType.HANDLE_DRAWER_TOGGLE,
});

export const handleDrawerToggle = () => (dispatch) => {
  dispatch(handleDrawerToggleAction());
};
