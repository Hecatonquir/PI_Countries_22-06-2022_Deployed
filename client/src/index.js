import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './Redux/store.js';
import App from './App';
import './index.css';
/* ------------ Configurations to  Deploy ----------- */
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';
/* ------------ End of Deploy config ---------------- */

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
