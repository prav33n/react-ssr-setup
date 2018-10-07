import idx from 'idx';
require('fetch-everywhere');

export const getSeriesList = () => {
    const url = `${getInitUrl}samtliga`;
    return fetch(url, options)
        .then((response) => response.json())
        .then(processListData)
        .catch(console.log);
};

export const getSeriesData = (seriesPath) => {
    const url = `${getInitUrl}${seriesPath}?partial=true`;
    return fetch(url, options)
        .then((response) => response.json())
        .then(processSerieData)
        .catch(console.log);
};

const baseURL = 'https://content.viaplay.se/';
const platform = 'pc';
const language = 'se';
const options = { mode: 'no-cors' };

const processListData = (response) => {
    const { _embedded = {} } = response;
    if (_embedded['viaplay:blocks'][0]) {
        return (
            _embedded['viaplay:blocks'][0] &&
            _embedded['viaplay:blocks'][0]._embedded['viaplay:products'].map((serie) => {
                if (serie.type === 'series') {
                    const content = idx(serie, (_) => _.content.series);
                    return {
                        type: idx(serie, (_) => _.type),
                        coverImage: idx(serie, (_) => _.content.images.landscape.template),
                        publicPath: idx(serie, (_) => _.publicPath),
                        href: idx(serie, (_) => _._links.self.href),
                        title: content.title,
                        synopsis: content.synopsis,
                        seasons: content.seasons,
                    };
                }
                return;
            })
        );
    }
};

const processSerieData = (response) => {
    const { _embedded = {} } = response;
    const serie = _embedded['viaplay:article'];
    if (serie) {
        return {
            type: idx(serie, (_) => _.type),
            coverImage: idx(serie, (_) => _.content.images.landscape.template),
            publicPath: idx(serie, (_) => _.publicPath),
            title: idx(serie, (_) => _.content.title),
            synopsis: idx(serie, (_) => _.content.synopsis),
        };
    }
    return;
};

const getInitUrl = `${baseURL}${platform}-${language}/serier/`;
