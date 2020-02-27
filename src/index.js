import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
// import store from './store';
import reducer from './reducers';
import App from './App';
import './App.css';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// import createSagaMiddleware from 'redux-saga';
// import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { logger } from 'redux-logger';
// import reducer from './reducers';
// import App from './components/App';
// import rootSaga from './sagas';
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//    reducer,
//    applyMiddleware(sagaMiddleware, logger),
// );
// sagaMiddleware.run(rootSaga);
// render(
//    <Provider store={store}>
//      <App />
//    </Provider>,
// document.getElementById('root'),
// );
// if (module.hot) { module.hot.accept(App);}
