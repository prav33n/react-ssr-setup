// @flow
import type { SeriesT } from './types';

export const ActionTypes = {
    SETSERIES: 'SET_SERIES',
    SETSELECTEDSERIES: 'SET_SELECTED_SERIES',
};

export const setSelectedSeries = (serie: SeriesT) => ({
    type: ActionTypes.SETSELECTEDSERIES,
    payload: serie,
});

export const setSeries = (seriesList: SeriesT[]) => ({
    type: ActionTypes.SETSERIES,
    payload: seriesList,
});
