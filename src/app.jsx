/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './common/store/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';

import SideBar from './common/component/sidebar/sidebar';
import DashboardPage from './app/dashboard/dashboard-page';
import KatalogBukuPage from './app/katalog-buku-page/katalog-buku-page';
import DataPeminjamanPage from './app/data-peminjaman-page/data-peminjaman-page';

import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <SideBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/katalog_buku" component={KatalogBukuPage} />
              <Route exact path="/data_transaksi" component={DataPeminjamanPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
