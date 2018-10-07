import { createBrowserHistory, createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';

const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export const configureStore = ({ initialState } = {}) => {
    const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    const history = isServer
        ? createMemoryHistory({
              initialEntries: ['/'],
          })
        : createBrowserHistory();

    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), ...[thunk]))
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () =>
                store.replaceReducer(require('./rootReducer').default)
            );
        }
    }

    return store;
};

export default configureStore;
