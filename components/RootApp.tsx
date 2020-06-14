import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Customer from './customer/Customer';

const RootApp = () => {
  const content = (
    <Provider store={store}>
      <div className="container-fluid">
        <h3>Customer App</h3>
        <hr />
        <Customer />
      </div>

    </Provider>
  )

  return content;
}

export default RootApp