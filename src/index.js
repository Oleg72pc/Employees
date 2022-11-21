import React from 'react';
import MainPage from './pages';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { store } from './redux/store';
import './index.scss';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  </Provider>);
