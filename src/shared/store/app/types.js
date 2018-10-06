// @flow
export type AppT = {
    series: SeriesT[],
    selectedSeries: null | SeriesT,
};

type setSeriesListAction = {
    type: 'SET_SERIES',
    payload: SeriesT[],
};

type setSeriesAction = {
    type: 'SET_SELECTED_SERIES',
    payload: SeriesT,
};

export type ActionT = setSeriesListAction | setSeriesAction;

export type SeriesT = {
    type: string,
    coverImage: string,
    publicPath: string,
    title: string,
    synopsis: string,
    href?: string,
    seasons?: number,
};
