// @flow
import type { ActionT, AppT } from './types';
import { ActionTypes } from './actions';

export const initialState: AppT = {
    series: [],
    selectedSeries: null,
};

export default (state: AppT = initialState, action: ActionT): AppT => {
    const { type, payload = {} } = action;

    switch (type) {
        case ActionTypes.SETSERIES: {
            return {
                ...state,
                series: payload,
            };
        }
        case ActionTypes.SETSELECTEDSERIES: {
            return {
                ...state,
                selectedSeries: payload,
            };
        }
    }

    return state;
};
