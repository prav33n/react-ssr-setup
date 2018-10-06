import reducer, { initialState } from './reducer';
import { ActionTypes } from './actions';

const testData = {};

describe('App Reducer', () => {
    it('sets the active series', () => {
        expect(reducer(initialState, { type: ActionTypes.SETSERIES, payload: testData })).toEqual({
            locale: 'de-DE',
        });
    });
});
