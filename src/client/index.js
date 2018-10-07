import React from 'react';
import { createBrowserHistory } from 'history';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../shared/App';
import { ConnectedRouter as Router } from 'connected-react-router';
import { configureStore } from '../shared/store';

const browserHistory = window.browserHistory || createBrowserHistory();
const store =
    window.store ||
    configureStore({
        initialState: window.__PRELOADED_STATE__,
    });

hydrate(
    <Provider store={store}>
        <Router history={browserHistory}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store || !window.browserHistory) {
        window.browserHistory = browserHistory;
        window.store = store;
    }
}
