/* eslint-disable no-unused-vars */
import * as actionType from './sidebar-action-type';

const initialState = {
  mobileOpen: false,
};

const handler = (currentState) => {
  const sidebar = {
    handleDrawerToggle: () => ({ ...currentState, mobileOpen: !currentState.mobileOpen }),
  };

  return {
    ...sidebar,
  };
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.HANDLE_DRAWER_TOGGLE:
      return handler(state).handleDrawerToggle();
    default:
      return state;
  }
};
