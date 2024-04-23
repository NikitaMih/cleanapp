import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from 'src/pages/MainPage/MainPage';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from 'src/store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainPage />{' '}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
