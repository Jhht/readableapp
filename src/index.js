import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


ReactDOM.render(
		<App />
	, document.getElementById('root'));
registerServiceWorker();
