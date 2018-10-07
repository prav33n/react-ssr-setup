import React from 'react';
import idx from 'idx';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderHTML from 'react-render-html';
import Html from './components/HTML';
import App from '../shared/App';
import { getSeriesList, getSeriesData } from '../shared/api/api';

const serverRenderer = () => (req, res) => {
    const content = renderToString(
        <Provider store={req.store}>
            <Router location={req.url} context={{}}>
                <App />
            </Router>
        </Provider>
    );

    const urlFragments = req.url.split('/');
    return (urlFragments.length > 2 ? getSeriesData(urlFragments.pop()) : getSeriesList())
        .then((data) => {
            const state = req.store.getState();
            if (idx(state, (_) => _.app.series.length) === 0 && data.length > 0) {
                state.app.series = data;
            } else if (
                !idx(state, (_) => _.app.series.selectedSeries) &&
                data &&
                data.type === 'article'
            ) {
                state.app.selectedSeries = data;
            }
            res.status(200).send(
                '<!doctype html>' +
                    renderToString(
                        <Html
                            css={[
                                res.locals.assetPath('bundle.css'),
                                res.locals.assetPath('vendor.css'),
                            ]}
                            scripts={[
                                res.locals.assetPath('bundle.js'),
                                res.locals.assetPath('vendor.js'),
                            ]}
                            state={JSON.stringify(state)}
                        >
                            {content}
                        </Html>
                    )
            );
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send(renderHTML('Error'));
        });
};

export default serverRenderer;
