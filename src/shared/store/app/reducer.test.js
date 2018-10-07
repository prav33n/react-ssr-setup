import reducer, { initialState } from './reducer';
import { ActionTypes } from './actions';

const testData = [
    {
        type: 'series',
        coverImage:
            'https://i-viaplay-com.akamaized.net/viaplay-prod/871/336/Paradise_Hotel_Sverige_S9_packshot.jpg{?width,height}',
        publicPath: 'paradise-hotel-sverige',
        href: 'https://content.viaplay.se/pc-se/serier/paradise-hotel-sverige?partial=true',
        title: 'Paradise Hotel',
        synopsis:
            'Äntligen är realityseriernas kronjuvel Paradise Hotel tillbaka – som i år bjuder på ännu mer drama, intriger, kärlek och svek. Redan från start är det tjejerna som styr och ställer i paradiset och killarna kommer att få kämpa för sin överlevnad.',
        seasons: 4,
    },
    {
        type: 'series',
        coverImage:
            'https://i-viaplay-com.akamaized.net/viaplay-prod/637/780/ConspiracyofSilenceSE_Packshot.jpg{?width,height}',
        publicPath: 'ingen-utan-skuld',
        href: 'https://content.viaplay.se/pc-se/serier/ingen-utan-skuld?partial=true',
        title: 'Ingen utan skuld',
        synopsis:
            'Ett Viaplay Original om svensk vapenexport. En före detta vapenhandlare, som tvingats i exil, återvänder till Sverige för att söka hämnd på mannen som tidigare har försökt mörda honom.',
        seasons: 1,
    },
];

const activeSeries = {
    type: 'series',
    coverImage:
        'https://i-viaplay-com.akamaized.net/viaplay-prod/637/780/ConspiracyofSilenceSE_Packshot.jpg{?width,height}',
    publicPath: 'ingen-utan-skuld',
    href: 'https://content.viaplay.se/pc-se/serier/ingen-utan-skuld?partial=true',
    title: 'Ingen utan skuld',
    synopsis:
        'Ett Viaplay Original om svensk vapenexport. En före detta vapenhandlare, som tvingats i exil, återvänder till Sverige för att söka hämnd på mannen som tidigare har försökt mörda honom.',
    seasons: 1,
};

describe('App Reducer', () => {
    it('sets the series List', () => {
        expect(reducer(initialState, { type: ActionTypes.SETSERIES, payload: testData })).toEqual({
            series: testData,
            selectedSeries: null,
        });
    });
    it('sets the active series', () => {
        expect(
            reducer(initialState, { type: ActionTypes.SETSELECTEDSERIES, payload: activeSeries })
        ).toEqual({
            series: [],
            selectedSeries: activeSeries,
        });
    });
});
