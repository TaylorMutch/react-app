import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';		// Create more reducers!

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

//LSS.store = store

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);

// register async handlers
