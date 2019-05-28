import React from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import reducer from 'reducers';
import rootSaga from 'sagas';

import App from 'containers/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(
    sagaMiddleware
));

sagaMiddleware.run(rootSaga);

const Root = () => (
    <Provider store={ store }>
        <App />
    </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
