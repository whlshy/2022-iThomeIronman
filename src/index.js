import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux' // 加上這裡
import store from './store' // 加上這裡

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* 加上這裡 */}
      <Router>
        <App />
      </Router>
    </Provider> {/* 加上這裡 */}
  </React.StrictMode>
);

reportWebVitals();