import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './store';
import { render } from "react-dom";
import App from "./App"


render(
<Provider store={store}  >
<React.StrictMode>
<App />
  </React.StrictMode>
  </Provider>

, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();