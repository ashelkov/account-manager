import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import initializeStore from './store';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const storeInstance = initializeStore();

ReactDOM.render(
  <Provider store={storeInstance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
