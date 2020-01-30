import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import sidebarReducer from '../component/sidebar/store/sidebar-reducer';
import dashboardReducer from '../../modules/dashboard/store/dashboard-reducer';
import katalogBukuReducer from '../../modules/katalog-buku/store/katalog-buku-reducer';
import dataPeminjamanReducer from '../../modules/data-peminjaman/store/data-peminjaman-reducer';

const middleware = [thunk];

const reducer = combineReducers({
  sidebar: sidebarReducer,
  dashboard: dashboardReducer,
  katalogBuku: katalogBukuReducer,
  dataPeminjaman: dataPeminjamanReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
